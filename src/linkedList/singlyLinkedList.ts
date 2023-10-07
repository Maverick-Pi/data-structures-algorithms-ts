/**************************************************************************/ /**
 * @file src\linkedList\singlyLinkedList.ts
 * @desc 带哨兵的单向链表
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
  head: LinkedListNode<T> = new LinkedListNode<T>(null, null)

  /**
   * 在头部添加新结点
   * @param value 结点值
   */
  addFirst(value: T): void {
    this.insert(0, value)
  }

  /**
   * while 遍历链表
   * @param consumer 回调函数
   */
  traversalWhile(consumer: (value: T) => void): void {
    let p = this.head.next
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
    for (let p = this.head.next; p !== null; p = p.next) {
      consumer(p.value!)
    }
  }

  /**
   * 查找尾结点
   * @returns 尾结点 或 null
   */
  private findLast(): LinkedListNode<T> | null {
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
    // 非空链表
    last!.next = new LinkedListNode<T>(value, null)
  }

  /**
   * 根据索引查找对应结点
   * @param index 索引
   * @returns 返回结点对象 或 null
   */
  private findNode(index: number): LinkedListNode<T> | null {
    for (let p: LinkedListNode<T> | null = this.head, i = -1; p !== null; p = p.next, i++) {
      if (i === index) {
        return p
      }
    }
    return null // 没找到
  }

  /**
   * 根据索引查找对应结点的值
   * @param index 索引
   * @returns 对应结点的值
   */
  get(index: number): T {
    const node = this.findNode(index)
    if (node === null) {
      // 没找到抛异常
      throw new Error('非法参数！')
    }
    // 找到了则返回对应结点的值
    return node.value!
  }

  /**
   * 向索引位置插入新结点
   * @param index 索引
   * @param value 插入结点的值
   */
  insert(index: number, value: T): void {
    // 找到上一个结点
    const pre = this.findNode(index - 1)
    // 创建新结点
    const newNode = new LinkedListNode<T>(value, this.findNode(index))
    // 找不到，抛异常
    if (pre === null) {
      throw new Error('该位置不存在！')
    }
    // 更改上一个结点的指向
    pre.next = newNode
  }

  /**
   * 删除链表头结点
   */
  removeFirst(): void {
    if (this.head.next === null) {
      throw new Error('链表为空！')
    }
    this.head.next = this.head.next.next
  }

  /**
   * 根据索引删除对应结点
   * @param index 需要删除结点的索引
   */
  remove(index: number): void {
    // 找到上一个结点
    const pre = this.findNode(index - 1)
    if (pre?.next === null || pre === null) {
      throw new Error('该结点不存在！')
    }
    // 将上一个结点指向下一个结点
    pre.next = pre.next.next
  }
}
