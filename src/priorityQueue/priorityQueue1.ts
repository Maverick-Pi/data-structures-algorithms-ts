/**************************************************************************/ /**
 * @file src\priorityQueue\priorityQueue1.ts
 * @desc 基于无序数组实现优先级队列
 *
 * @author Mingjie Pi
 * @date 2023-10-14 11:38:32
 ******************************************************************************/

import { type Queue } from '@/queue/queue'

export class PriorityQueue1<E extends Priority> implements Queue<E> {
  private array: E[] | null[]
  private size: number // 元素个数

  constructor(capacity: number) {
    this.size = 0
    this.array = new Array(capacity)
  }

  /**
   * 向队列尾部插入值
   * @param value 待插入值
   * @returns 插入成功返回 true，失败返回 false
   */
  offer(value: E): boolean {
    if (this.isFull()) {
      return false
    }
    this.array[this.size++] = value
    return true
  }

  /**
   * 从队列头获取值并移除
   * @returns 如果队列非空返回队列头的值，否则返回 null
   */
  poll(): E | null {
    if (this.isEmpty()) return null
    const max = this.selectMax()
    const e = this.array[max]
    this.remove(max)
    return e
  }

  /**
   * 从队列头取值，不移除
   * @returns 如果队列非空返回队列头的值，否则返回 null
   */
  peek(): E | null {
    if (this.isEmpty()) return null
    const max = this.selectMax()
    return this.array[max]
  }

  /**
   * 检查队列是否为空
   * @returns 空返回 true，否则返回 false
   */
  isEmpty(): boolean {
    return this.size === 0
  }

  /**
   * 检查队列是否已满
   * @returns 队列满了返回 true，未满返回 false
   */
  isFull(): boolean {
    return this.size === this.array.length
  }

  /**
   * 获取优先级最高的元素索引
   * @returns 优先级最高的索引
   */
  private selectMax(): number {
    let max: number = 0
    for (let i = 0; i < this.size; i++) {
      if (this.array[i]!.priority() > this.array[max]!.priority()) {
        max = i
      }
    }
    return max
  }

  /**
   * 删除给定索引的元素
   * @param max 需要删除的索引
   */
  private remove(max: number): void {
    for (let i = max; i < this.size - 1; i++) {
      this.array[i] = this.array[i + 1]
    }
    // help GC
    this.array[--this.size] = null
  }
}
