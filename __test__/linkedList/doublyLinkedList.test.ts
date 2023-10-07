/**************************************************************************/ /**
 * @file __test__\linkedList\doublyLinkedList.test.ts
 * @desc 测试带哨兵的双向链表
 *
 * @author Mingjie Pi
 * @date 2023-10-07 18:28:53
 ******************************************************************************/

import { DoublyLinkedListSentinel } from '@/linkedList/doublyLinkedList'

describe('Doubly Linked List Sentinel', () => {
  let doublyLinkedList: DoublyLinkedListSentinel<number>

  beforeEach(() => {
    doublyLinkedList = new DoublyLinkedListSentinel<number>()
  })

  it('should insert new node into the specified index position', () => {
    doublyLinkedList.insert(0, 3)
    doublyLinkedList.insert(0, 1)
    doublyLinkedList.insert(2, 4)
    doublyLinkedList.insert(1, 2)

    expect(doublyLinkedList.head.next?.value).toBe(1)
    expect(doublyLinkedList.head.next?.next?.value).toBe(2)
    expect(doublyLinkedList.tail.prior?.prior?.value).toBe(3)
    expect(doublyLinkedList.tail.prior?.value).toBe(4)

    // 错误情况
    expect(() => {
      doublyLinkedList.insert(-1, 0)
    }).toThrowError('无效索引！')
    expect(() => {
      doublyLinkedList.insert(5, 0)
    }).toThrowError('无效索引！')
  })

  it('should add a new node to the head of the list', () => {
    // 向头部添加结点
    doublyLinkedList.addFirst(1)
    doublyLinkedList.addFirst(2)
    doublyLinkedList.addFirst(3)

    expect(doublyLinkedList.head.next?.value).toBe(3)
    expect(doublyLinkedList.head.next?.next?.value).toBe(2)
    expect(doublyLinkedList.tail.prior?.value).toBe(1)
  })

  it('should add a new node to the end of the list', () => {
    // 向尾部添加结点
    doublyLinkedList.addLast(1)
    doublyLinkedList.addLast(2)
    doublyLinkedList.addLast(3)

    expect(doublyLinkedList.head.next?.value).toBe(1)
    expect(doublyLinkedList.head.next?.next?.value).toBe(2)
    expect(doublyLinkedList.tail.prior?.value).toBe(3)
  })

  it('should delete the first node of the linked list', () => {
    // 空链表删除
    expect(() => {
      doublyLinkedList.removeFirst()
    }).toThrowError('无效索引！')

    doublyLinkedList.addFirst(1)
    doublyLinkedList.addFirst(2)
    doublyLinkedList.addFirst(3)

    doublyLinkedList.removeFirst()
    expect(doublyLinkedList.head.next?.value).toBe(2)
    doublyLinkedList.removeFirst()
    expect(doublyLinkedList.head.next?.value).toBe(1)
  })

  it('should delete the tail node of the linked list', () => {
    // 空链表删除
    expect(() => {
      doublyLinkedList.removeLast()
    }).toThrowError('链表已空！')

    doublyLinkedList.addLast(1)
    doublyLinkedList.addLast(2)
    doublyLinkedList.addLast(3)

    doublyLinkedList.removeLast()
    expect(doublyLinkedList.tail.prior?.value).toBe(2)
    doublyLinkedList.removeLast()
    expect(doublyLinkedList.tail.prior?.value).toBe(1)
    doublyLinkedList.removeLast()
    expect(doublyLinkedList.tail.prior).toBe(doublyLinkedList.head)
    expect(() => {
      doublyLinkedList.removeLast()
    }).toThrowError('链表已空！')
  })

  it('should delete the corresponding node based on the index', () => {
    // 空链表删除
    expect(() => {
      doublyLinkedList.remove(0)
    }).toThrowError('无效索引！')
    expect(() => {
      doublyLinkedList.remove(1)
    }).toThrowError('无效索引！')
    expect(() => {
      doublyLinkedList.remove(2)
    }).toThrowError('无效索引！')

    // 非空链表删除
    doublyLinkedList.addLast(1)
    doublyLinkedList.addLast(2)
    doublyLinkedList.addLast(3)
    doublyLinkedList.addLast(4)
    doublyLinkedList.addLast(5)

    doublyLinkedList.remove(0)
    expect(doublyLinkedList.head.next?.value).toBe(2)

    doublyLinkedList.remove(3)
    expect(doublyLinkedList.tail.prior?.value).toBe(4)

    doublyLinkedList.remove(1)
    expect(doublyLinkedList.head.next?.value).toBe(2)
    expect(doublyLinkedList.head.next?.next?.value).toBe(4)

    // 非空链表越界删除
    expect(() => {
      doublyLinkedList.remove(5)
    }).toThrowError('无效索引！')
  })

  it('should traversal the list', () => {
    doublyLinkedList.addLast(1)
    doublyLinkedList.addLast(3)
    doublyLinkedList.addLast(5)
    doublyLinkedList.addLast(7)
    doublyLinkedList.addLast(9)

    const result: number[] = []
    doublyLinkedList.traversal((value) => {
      result.push(value)
    })

    expect(result).toEqual([1, 3, 5, 7, 9])
  })
})
