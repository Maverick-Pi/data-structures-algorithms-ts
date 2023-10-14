/**************************************************************************/ /**
 * @file src\priorityQueue\priorityQueue3.ts
 * @desc 基于大顶堆实现优先级队列
 *
 * @author Mingjie Pi
 * @date 2023-10-14 15:31:37
 ******************************************************************************/

import { type Queue } from '@/queue/queue'

export class PriorityQueue3<E extends Priority> implements Queue<E> {
  private array: E[] | null[]
  private size: number

  constructor(capacity: number) {
    this.size = 0
    this.array = new Array(capacity)
  }

  /**
   * 向优先级队列中添加新元素
   * @param value 需要入队的元素
   * @returns 成功返回 true，失败返回 false
   */
  offer(value: E): boolean {
    if (this.isFull()) return false
    // 子结点索引
    let child = this.size++
    // 父结点索引位置
    let parent = Math.trunc((child - 1) / 2)
    // 子结点与父结点比较优先级，如果子结点优先级大则父结点向下移动成为子结点，直至符合大顶堆
    while (child > 0 && value.priority() > this.array[parent]!.priority()) {
      this.array[child] = this.array[parent]
      child = parent
      parent = Math.trunc((child - 1) / 2)
    }
    // 循环结束找到插入位置
    this.array[child] = value
    return true
  }

  /**
   * 获取优先级最大的元素值并移除
   * @returns 移除成功返回对应的元素值，否则返回 null
   */
  poll(): E | null {
    if (this.isEmpty()) return null
    // 交换堆顶和尾部元素后，让尾部元素出队
    this.swap(0, this.size - 1)
    const e = this.array[--this.size]
    // help GC
    this.array[this.size] = null
    // 下潜
    this.sink()
    return e
  }

  /**
   * 获取优先级最高的元素值
   * @returns 优先级最高的元素值
   */
  peek(): E | null {
    if (this.isEmpty()) return null
    return this.array[0]
  }

  /**
   * 判断队列是否为空
   * @returns 队列空返回 true，非空返回 false
   */
  isEmpty(): boolean {
    return this.size === 0
  }

  /**
   * 判断队列是否满
   * @returns 队列满返回 true，否则返回 false
   */
  isFull(): boolean {
    return this.size === this.array.length
  }

  /**
   * 交换两个索引位置的值
   * @param i 索引i
   * @param j 索引j
   */
  private swap(i: number, j: number): void {
    const temp = this.array[i]
    this.array[i] = this.array[j]
    this.array[j] = temp
  }

  /**
   * 下沉结点
   * @param parent 需要下沉的结点索引
   */
  private sink(parent = 0): void {
    const leftChild = parent * 2 + 1 // 左孩子索引
    const rightChild = leftChild + 1 // 右孩子索引
    let max = parent // 假设父结点优先级最大
    // 与左孩子优先级比较
    if (leftChild < this.size && this.array[leftChild]!.priority() > this.array[max]!.priority()) {
      max = leftChild
    }
    // 与右孩子优先级比较
    if (rightChild < this.size && this.array[rightChild]!.priority() > this.array[max]!.priority()) {
      max = rightChild
    }
    // 有子结点优先级大于父结点
    if (parent !== max) {
      this.swap(max, parent)
      this.sink(max)
    }
  }
}
