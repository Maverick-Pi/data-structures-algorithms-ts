/**************************************************************************/ /**
 * @file src\linkedList\doublyCircularLinkedList.ts
 * @desc 双向循环链表
 *
 * @author Mingjie Pi
 * @date 2023-10-08 00:07:19
 ******************************************************************************/

/**
 * 结点
 */
class LinkedListNode<T> {
  prev: LinkedListNode<T> | null
  value: T | null
  next: LinkedListNode<T> | null

  constructor(prev: LinkedListNode<T> | null, value: T | null, next: LinkedListNode<T> | null) {
    this.prev = prev
    this.value = value
    this.next = next
  }
}

/**
 * 带哨兵的双向循环链表
 */
export class DoublyCircularLinkedList<T> {
  // 哨兵
  readonly sentinel: LinkedListNode<T>

  constructor() {
    this.sentinel = new LinkedListNode<T>(null, null, null)
    this.sentinel.prev = this.sentinel
    this.sentinel.next = this.sentinel
  }

  /**
   * 在链表首部添加新结点
   * @param value 新结点的值
   */
  addFirst(value: T): void {
    const prev = this.sentinel
    const next = this.sentinel.next
    const newNode = new LinkedListNode<T>(prev, value, next)
    prev.next = newNode
    next!.prev = newNode
  }

  /**
   * 在链表尾部添加新结点
   * @param value 新结点的值
   */
  addLast(value: T): void {
    const prev = this.sentinel.prev
    const next = this.sentinel
    const newNode = new LinkedListNode<T>(prev, value, next)
    prev!.next = newNode
    next.prev = newNode
  }

  /**
   * 根据索引查找对应的结点
   * @param index 查找的索引
   * @returns 找到返回对应的结点对象，没找到返回 null
   */
  private findNode(index: number): LinkedListNode<T> | null {
    for (let p = this.sentinel.next!.next, i = 1; p !== this.sentinel.next; p = p!.next!, i++) {
      if (index === i) {
        return p
      }
    }
    // 没找到
    return null
  }

  /**
   * 将新结点插入到指定索引位置
   * @param index 插入位置的索引
   * @param value 新结点的值
   */
  insert(index: number, value: T): void {
    if (index === 0) {
      this.addFirst(value)
      return
    }
    const next = this.findNode(index)
    if (next === null) {
      throw new Error('无效索引！')
    }
    const prev = next.prev!
    const newNode = new LinkedListNode<T>(prev, value, next)
    prev.next = newNode
    next.prev = newNode
  }

  /**
   * 删除第一个结点
   */
  removeFirst(): void {
    const firstNode = this.sentinel.next
    if (firstNode === this.sentinel) {
      throw new Error('链表已空！')
    }
    const prev = this.sentinel
    const next = firstNode!.next!
    prev.next = next
    next.prev = prev
  }

  /**
   * 删除最后一个结点
   */
  removeLast(): void {
    const lastNode = this.sentinel.prev
    if (lastNode === this.sentinel) {
      throw new Error('链表已空！')
    }
    const prev = lastNode!.prev!
    const next = this.sentinel
    prev.next = next
    next.prev = prev
  }

  /**
   * 根据索引删除对应位置的结点
   * @param index 需要删除的索引
   */
  remove(index: number): void {
    if (index === 0) {
      this.removeFirst()
      return
    }
    const removeNode = this.findNode(index)
    if (removeNode === null) {
      throw new Error('无效索引！')
    }
    const prev = removeNode.prev!
    const next = removeNode.next!
    prev.next = next
    next.prev = prev
  }

  /**
   * 根据值寻找结点
   * @param value 结点的值
   */
  private findNodeByValue(value: T): LinkedListNode<T> | null {
    let p = this.sentinel.next!
    while (p !== this.sentinel) {
      if (p.value === value) {
        return p
      }
      p = p.next!
    }
    return null
  }

  /**
   * 根据值删除结点
   * @param value 要删除的值
   */
  removeByValue(value: T): void {
    const removeNode = this.findNodeByValue(value)
    if (removeNode === null) {
      throw new Error('结点不存在！')
    }
    const prev = removeNode.prev!
    const next = removeNode.next!
    prev.next = next
    next.prev = prev
  }

  /**
   * 遍历链表
   * @param consumer 回调函数
   */
  traversal(consumer: (value: T) => void): void {
    for (let p = this.sentinel.next; p !== this.sentinel; p = p!.next) {
      consumer(p!.value!)
    }
  }
}
