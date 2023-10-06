/**************************************************************************/ /**
 * @file src\linkedList\singlyLinkedList.ts
 * @desc 单向链表
 *
 * @author Mingjie Pi
 * @date 2023-10-06 14:36:11
 ******************************************************************************/

/**
 * 链表节点类
 */
class LinkedListNode<T> {
  value: T | null // 值
  next: LinkedListNode<T> | null // 下一个节点指针

  constructor(value: T | null, next: LinkedListNode<T> | null) {
    this.value = value
    this.next = next
  }
}

/**
 * 单向链表类
 */
export class SinglyLinkedList<T> {
  head: LinkedListNode<T> | null = null

  /**
   * 在头部添加新结点
   * @param value 结点值
   */
  addFirst(value: T): void {
    // 链表非空 或 空
    this.head = new LinkedListNode(value, this.head)
  }

  /**
   * while 遍历链表
   * @param consumer 回调函数
   */
  traversalWhile(consumer: (value: T) => void): void {
    let p = this.head
    while (p !== null) {
      consumer(p.value!)
      p = p.next
    }
  }

  /**
   * for 遍历链表
   * @param consumer 回调函数
   */
  traversalFor(consumer: (value: T) => void): void {
    for (let p = this.head; p !== null; p = p.next) {
      consumer(p.value!)
    }
  }

  /**
   * 查找尾结点
   * @returns 尾结点 或 null
   */
  private findLast(): LinkedListNode<T> | null {
    // 空链表
    if (this.head === null) return null
    // 非空链表
    let p = this.head
    while (p.next !== null) {
      p = p.next
    }
    return p
  }

  /**
   * 在尾部添加新结点
   * @param value 结点值
   */
  addLast(value: T): void {
    const last = this.findLast()
    // 空链表
    if (last === null) {
      this.addFirst(value)
    } else {
      // 非空链表
      last.next = new LinkedListNode<T>(value, null)
    }
  }
}
