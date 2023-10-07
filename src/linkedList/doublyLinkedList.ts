/**************************************************************************/ /**
 * @file src\linkedList\doublyLinkedList.ts
 * @desc 带哨兵的双向链表
 *
 * @author Mingjie Pi
 * @date 2023-10-07 18:07:23
 ******************************************************************************/

/**
 * 链表结点
 */
class LinkedListNode<T> {
  prior: LinkedListNode<T> | null
  value: T | null
  next: LinkedListNode<T> | null

  constructor(prior: LinkedListNode<T> | null, value: T | null, next: LinkedListNode<T> | null) {
    this.prior = prior
    this.value = value
    this.next = next
  }
}

/**
 * 双向链表
 */
export class DoublyLinkedListSentinel<T> {
  // 首尾哨兵
  readonly head: LinkedListNode<T>
  readonly tail: LinkedListNode<T>

  constructor() {
    this.head = new LinkedListNode<T>(null, null, null)
    this.tail = new LinkedListNode<T>(null, null, null)
    this.head.next = this.tail
    this.tail.prior = this.head
  }

  /**
   * 根据索引查找对应的结点
   * @param index 结点索引
   * @returns 找到返回结点对象，没找到返回 null
   */
  private findNode(index: number): LinkedListNode<T> | null {
    for (let p = this.head, i = -1; p !== this.tail; p = p.next!, i++) {
      if (i === index) {
        return p
      }
    }
    return null
  }

  /**
   * 将新结点插入到指定索引位置
   * @param index 需要插入的索引位置
   * @param value 新结点值
   */
  insert(index: number, value: T): void {
    // 查找插入的前一个位置
    const prior = this.findNode(index - 1)
    if (prior === null) {
      throw new Error('无效索引！')
    }
    // 查找插入的后一个位置
    const next = prior.next
    // 创建新结点
    const newNode = new LinkedListNode<T>(prior, value, next)
    // 更新上一个结点的指向
    prior.next = newNode
    // 更新下一个结点
    next!.prior = newNode
  }

  /**
   * 根据索引删除对应的结点
   * @param index 删除结点的索引号
   */
  remove(index: number): void {
    // 查找待删除结点的上一个结点
    const prior = this.findNode(index - 1)
    // 待删除结点
    const delNode = prior?.next
    if (prior === null || delNode === this.tail) {
      throw new Error('无效索引！')
    }
    // 待删除结点的下一个结点
    const next = delNode!.next!
    // 更改指向
    prior.next = next
    next.prior = prior
  }

  /**
   * 删除链表首结点
   */
  removeFirst(): void {
    this.remove(0)
  }

  /**
   * 向链表首部添加新结点
   * @param value 新结点值
   */
  addFirst(value: T): void {
    this.insert(0, value)
  }

  /**
   * 向链表尾部添加新结点
   * @param value 新结点值
   */
  addLast(value: T): void {
    // 获取尾结点
    const last = this.tail.prior
    // 创建新结点
    const newNode = new LinkedListNode<T>(last, value, this.tail)
    // 更新原尾结点以及尾哨兵指向
    last!.next = newNode
    this.tail.prior = newNode
  }

  /**
   * 删除链表尾结点
   */
  removeLast(): void {
    // 要删除的结点
    const delNode = this.tail.prior!
    if (delNode === this.head) {
      throw new Error('链表已空！')
    }
    // 要删除的结点的上一个结点
    const prev = delNode.prior!
    // 更新指向
    prev.next = this.tail
    this.tail.prior = prev
  }

  /**
   * 遍历链表
   */
  traversal(consumer: (value: T) => void): void {
    for (let p = this.head.next!; p !== this.tail; p = p.next!) {
      consumer(p.value!)
    }
  }
}
