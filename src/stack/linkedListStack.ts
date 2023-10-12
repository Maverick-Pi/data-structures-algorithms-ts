/**************************************************************************/ /**
 * @file src\stack\linkedListStack.ts
 * @desc 基于链表实现栈
 *
 * @author Mingjie Pi
 * @date 2023-10-12 19:42:40
 ******************************************************************************/

class ListNode<E> {
  value: E | null
  next: ListNode<E> | null

  constructor(value: E | null, next: ListNode<E> | null) {
    this.value = value
    this.next = next
  }
}

export class LinkedListStack<E> implements Stack<E> {
  private readonly capacity: number // 栈容量
  private size: number // 栈中成员数据
  private readonly head: ListNode<E>

  constructor(capacity: number) {
    this.capacity = capacity
    this.size = 0
    this.head = new ListNode<E>(null, null)
  }

  /**
   * 向栈顶压入元素
   * @param value 待压入的值
   * @returns 压入成功返回 true，否则返回 false
   */
  push(value: E): boolean {
    if (this.isFull()) {
      return false
    }
    this.head.next = new ListNode<E>(value, this.head.next)
    this.size++
    return true
  }

  /**
   * 从栈顶弹出元素
   * @returns 栈非空返回栈顶元素，栈空返回 null
   */
  pop(): E | null {
    if (this.isEmpty()) {
      return null
    }
    const firstNode = this.head.next!
    this.head.next = firstNode.next
    this.size--
    return firstNode.value
  }

  /**
   * 获取栈顶元素
   * @returns 栈非空返回栈顶元素，栈空返回 null
   */
  peek(): E | null {
    if (this.isEmpty()) {
      return null
    }
    return this.head.next!.value
  }

  /**
   * 判断栈是否为空
   * @returns 栈空返回 true，非空返回 false
   */
  isEmpty(): boolean {
    return this.size === 0
  }

  /**
   * 判断栈是否已满
   * @returns 栈满返回 true，否则返回 false
   */
  isFull(): boolean {
    return this.size === this.capacity
  }

  /**
   * 迭代器
   */
  *[Symbol.iterator](): Generator<E, void, undefined> {
    let current = this.head.next

    while (current !== null) {
      yield current.value!
      current = current.next
    }
  }
}
