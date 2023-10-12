/**************************************************************************/ /**
 * @file src\queue\linkedListQueue.ts
 * @desc 单向环形带哨兵链表实现队列
 *
 * @author Mingjie Pi
 * @date 2023-10-11 17:25:44
 ******************************************************************************/

/**
 * 链表结点
 */
class ListNode<E> {
  value: E | null
  next: ListNode<E> | null

  constructor(value: E | null, next: ListNode<E> | null) {
    this.value = value
    this.next = next
  }
}

/**
 * 单向环形链表队列
 */
export class LinkedListQueue<E> implements Queue<E>, Iterable<E> {
  readonly head: ListNode<E> = new ListNode<E>(null, null)
  private tail = this.head
  private size: number = 0 // 结点数
  readonly capacity: number // 队列容量

  constructor(capacity = Number.MAX_SAFE_INTEGER) {
    this.tail.next = this.head
    this.capacity = capacity
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
    const added = new ListNode<E>(value, this.head)
    this.tail.next = added
    this.tail = added
    this.size++
    return true
  }

  /**
   * 从队列头获取值并移除
   * @returns 如果队列非空返回队列头的值，否则返回 null
   */
  poll(): E | null {
    if (this.isEmpty()) {
      return null
    } else {
      const firstElement = this.head.next!
      const value = firstElement.value
      this.head.next = firstElement.next
      // 如果删除的元素为最后一个元素，则需要把尾指针指向头结点
      if (firstElement === this.tail) {
        this.tail = this.head
      }
      this.size--
      return value
    }
  }

  /**
   * 从队列头取值，不移除
   * @returns 如果队列非空返回队列头的值，否则返回 null
   */
  peek(): E | null {
    if (this.isEmpty()) {
      return null
    } else {
      return this.head.next!.value
    }
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
    return this.size === this.capacity
  }

  /**
   * 迭代器
   */
  /* [Symbol.iterator](): Iterator<E> {
    let current: ListNode<E> | null = this.head.next

    const iterator: Iterator<E> = {
      next: () => {
        if (current !== this.head) {
          const value = current!.value
          current = current!.next
          return { value: value as E, done: false }
        } else {
          return { value: undefined as any, done: true }
        }
      }
    }

    return iterator
  } */
  *[Symbol.iterator](): Generator<E, void, undefined> {
    let currentNode = this.head.next
    while (currentNode !== this.head) {
      yield currentNode!.value!
      currentNode = currentNode!.next
    }
  }
}
