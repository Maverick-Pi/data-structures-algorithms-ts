/**************************************************************************/ /**
 * @file src\deque\arrayDeque.ts
 * @desc 循环数组实现双端队列
 *
 * @author Mingjie Pi
 * @date 2023-10-13 17:35:29
 ******************************************************************************/

export class ArrayDeque<E> implements Deque<E> {
  private head: number
  private tail: number
  private size: number // 队列中元素个数
  private array: E[] | null[]

  constructor(capacity: number) {
    this.head = 0
    this.tail = 0
    this.size = 0
    this.array = new Array(capacity)
  }

  /**
   * 计算索引加一后的有效索引
   * @param i 索引
   * @param length 数组长度
   * @returns 有效索引
   */
  private inc(i: number, length: number): number {
    if (i + 1 >= length) {
      return 0
    }
    return i + 1
  }

  /**
   * 计算索引减一后的有效索引
   * @param i 索引
   * @param length 数组长度
   * @returns 有效索引
   */
  private dec(i: number, length: number): number {
    if (i - 1 < 0) {
      return length - 1
    }
    return i - 1
  }

  /**
   * 向队列前端添加元素
   * @param e 添加元素值
   * @returns 添加成功返回 true，失败返回 false
   */
  unshift(e: E): boolean {
    if (this.isFull()) {
      return false
    }
    this.head = this.dec(this.head, this.array.length)
    this.array[this.head] = e
    this.size++
    return true
  }

  /**
   * 向队列后端添加元素
   * @param e 添加元素值
   * @returns 添加成功返回 true，失败返回 false
   */
  enqueue(e: E): boolean {
    if (this.isFull()) {
      return false
    }
    this.array[this.tail] = e
    this.tail = this.inc(this.tail, this.array.length)
    this.size++
    return true
  }

  /**
   * 删除队列前端的元素
   * @returns 删除成功返回被删除元素值，否则返回 null
   */
  dequeue(): E | null {
    if (this.isEmpty()) {
      return null
    }
    const value = this.array[this.head]
    // help GC
    this.array[this.head] = null
    this.head = this.inc(this.head, this.array.length)
    this.size--
    return value
  }

  /**
   * 删除队列后端的元素
   * @returns 删除成功返回被删除元素的值，否则返回 null
   */
  popBack(): E | null {
    if (this.isEmpty()) {
      return null
    }
    this.size--
    this.tail = this.dec(this.tail, this.array.length)
    const e = this.array[this.tail]
    // help GC
    this.array[this.tail] = null
    return e
  }

  /**
   * 获取队列前端元素的值
   * @returns 返回队列前端元素的值
   */
  peekFront(): E | null {
    if (this.isEmpty()) {
      return null
    }
    return this.array[this.head]
  }

  /**
   * 获取队列后端元素的值
   * @returns 返回队列后端元素的值
   */
  peekBack(): E | null {
    if (this.isEmpty()) {
      return null
    }
    return this.array[this.dec(this.tail, this.array.length)]
  }

  /**
   * 判断队列是否为空
   * @returns 队列为空返回 true，非空返回 false
   */
  isEmpty(): boolean {
    return this.size === 0
  }

  /**
   * 判断队列是否满了
   * @returns 队列满返回 true，未满返回 false
   */
  isFull(): boolean {
    return this.size === this.array.length
  }

  /**
   * 迭代器
   */
  *[Symbol.iterator](): Generator<E, void, undefined> {
    let current = this.head

    for (let i = 0; i < this.size; i++) {
      yield this.array[current++]!
    }
  }
}
