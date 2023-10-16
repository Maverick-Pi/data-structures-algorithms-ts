/**************************************************************************/ /**
 * @file src\heapify\maxHeap.ts
 * @desc 大顶堆
 *
 * @author Mingjie Pi
 * @date 2023-10-16 19:03:32
 ******************************************************************************/

export class MaxHeap {
  private array: number[]
  private size: number

  constructor(param: number | number[]) {
    if (Array.isArray(param) && param.every((item) => typeof item === 'number')) {
      this.array = param
      this.size = param.length
      this.heapify()
    } else {
      this.size = 0
      this.array = new Array(param as number)
    }
  }

  /**
   * 获取大顶堆数组
   * @returns 返回大顶堆数组
   */
  getArray(): number[] {
    return this.array
  }

  /**
   * 获取堆元素个数
   * @returns 返回堆元素个数
   */
  getSize(): number {
    return this.size
  }

  /**
   * 将长度加一
   */
  incSize(): void {
    this.size++
  }

  /**
   * 将长度减一
   */
  decSize(): void {
    this.size--
  }

  /**
   * 获取堆顶的值
   * @returns 返回堆顶的值
   */
  peek(): number {
    if (this.isEmpty()) {
      throw new Error('堆为空')
    }
    return this.array[0]
  }

  /**
   * 删除指定索引的元素
   * @param index 需要删除的元素索引
   * @returns 返回删除的元素值
   */
  poll(index: number = 0): number {
    if (this.isEmpty()) {
      throw new Error('堆为空')
    }
    if (index >= this.size) {
      throw new Error('索引无效')
    }
    const del = this.array[index]
    this.swap(index, this.size - 1)
    this.size--
    this.sink(index)
    return del
  }

  /**
   * 替换堆顶元素
   * @param replaced 替换值
   */
  replace(replaced: number): void {
    this.array[0] = replaced
    this.sink(0)
  }

  /**
   * 向堆中添加元素
   * @param offered 添加元素的值
   * @returns 添加成功返回 true，否则返回 false
   */
  offer(offered: number): boolean {
    if (this.size === this.array.length) {
      return false
    }
    this.up(offered)
    this.size++
    return true
  }

  /**
   * 上浮给定的元素值以满足大顶堆特性
   * @param offered 元素值
   */
  private up(offered: number): void {
    let child = this.size
    while (child > 0) {
      const parent = Math.trunc((child - 1) / 2)
      if (offered > this.array[parent]) {
        this.array[child] = this.array[parent]
      } else {
        break
      }
      child = parent
    }
    this.array[child] = offered
  }

  /**
   * 判断堆是否为空
   * @returns 堆空返回 true，否则返回 false
   */
  isEmpty(): boolean {
    return this.size === 0
  }

  /**
   * 建堆
   */
  private heapify(): void {
    // 找到最后一个非叶子结点
    for (let i = Math.trunc(this.size / 2) - 1; i >= 0; i--) {
      this.sink(i)
    }
  }

  /**
   * 将 parent 索引处的元素下沉
   * @param parent 下沉元素索引
   */
  sink(parent: number): void {
    const left = parent * 2 + 1
    const right = left + 1
    let max = parent

    if (left < this.size && this.array[left] > this.array[max]) {
      max = left
    }
    if (right < this.size && this.array[right] > this.array[max]) {
      max = right
    }
    if (max !== parent) {
      this.swap(max, parent)
      this.sink(max)
    }
  }

  /**
   * 交换两个元素的值
   * @param a 元素 1 索引
   * @param b 元素 2 索引
   */
  swap(a: number, b: number): void {
    const temp = this.array[a]
    this.array[a] = this.array[b]
    this.array[b] = temp
  }
}
