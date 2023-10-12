/**************************************************************************/ /**
 * @file src\queue\arrayQueue.ts
 * @desc 环形数组队列
 *
 * @author Mingjie Pi
 * @date 2023-10-12 13:54:01
 ******************************************************************************/

export class ArrayQueue<E> implements Queue<E> {
  private array: E[]
  private head = 0
  private tail = 0

  constructor(capacity: number) {
    this.array = new Array(capacity + 1)
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
    this.array[this.tail] = value
    this.tail = (this.tail + 1) % this.array.length
    return true
  }

  /**
   * 从队列头获取值并移除
   * @returns 如果队列非空返回队列头的值，否则返回 null
   */
  poll(): E | null {
    if (this.isEmpty()) {
      return null
    }
    const value = this.array[this.head]
    this.head = (this.head + 1) % this.array.length
    return value
  }

  /**
   * 从队列头取值，不移除
   * @returns 如果队列非空返回队列头的值，否则返回 null
   */
  peek(): E | null {
    if (this.isEmpty()) {
      return null
    }
    return this.array[this.head]
  }

  /**
   * 检查队列是否为空
   * @returns 空返回 true，否则返回 false
   */
  isEmpty(): boolean {
    return this.head === this.tail
  }

  /**
   * 检查队列是否已满
   * @returns 队列满了返回 true，未满返回 false
   */
  isFull(): boolean {
    return (this.tail + 1) % this.array.length === this.head
  }

  /**
   * 迭代器
   */
  *[Symbol.iterator](): Generator<E, void, undefined> {
    let current = this.head
    while (current !== this.tail) {
      yield this.array[current]
      current = (current + 1) % this.array.length
    }
  }
}
