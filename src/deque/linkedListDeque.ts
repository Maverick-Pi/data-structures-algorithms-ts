/**************************************************************************/ /**
 * @file src\deque\linkedListDeque.ts
 * @desc 双向循环链表实现双端队列
 *
 * @author Mingjie Pi
 * @date 2023-10-13 16:18:21
 ******************************************************************************/

/**
 * 结点
 */
class ListNode<E> {
  prev: ListNode<E> | null
  value: E | null
  next: ListNode<E> | null

  constructor(prev: ListNode<E> | null, value: E | null, next: ListNode<E> | null) {
    this.prev = prev
    this.value = value
    this.next = next
  }
}

/**
 * 双向循环链表实现双端队列
 */
export class LinkedListDeque<E> implements Deque<E> {
  private readonly capacity: number // 容量
  private size: number // 元素个数
  private readonly sentinel: ListNode<E>

  constructor(capacity: number) {
    this.capacity = capacity
    this.size = 0
    this.sentinel = new ListNode<E>(null, null, null)
    this.sentinel.next = this.sentinel
    this.sentinel.prev = this.sentinel
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
    const newNode = new ListNode<E>(this.sentinel, e, this.sentinel.next)
    this.sentinel.next!.prev = newNode
    this.sentinel.next = newNode
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
    const newNode = new ListNode<E>(this.sentinel.prev, e, this.sentinel)
    this.sentinel.prev!.next = newNode
    this.sentinel.prev = newNode
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
    const delNode = this.sentinel.next!
    const value = delNode.value
    this.sentinel.next = delNode.next
    delNode.next!.prev = this.sentinel
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
    const delNode = this.sentinel.prev!
    const value = delNode.value
    delNode.prev!.next = this.sentinel
    this.sentinel.prev = delNode.prev
    this.size--
    return value
  }

  /**
   * 获取队列前端元素的值
   * @returns 返回队列前端元素的值
   */
  peekFront(): E | null {
    if (this.isEmpty()) {
      return null
    }
    return this.sentinel.next!.value
  }

  /**
   * 获取队列后端元素的值
   * @returns 返回队列后端元素的值
   */
  peekBack(): E | null {
    if (this.isEmpty()) {
      return null
    }
    return this.sentinel.prev!.value
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
    return this.size === this.capacity
  }

  /**
   * 迭代器
   */
  *[Symbol.iterator](): Generator<E, void, undefined> {
    let current = this.sentinel.next!

    while (current !== this.sentinel) {
      yield current.value!
      current = current.next!
    }
  }
}
