/**************************************************************************/ /**
 * @file __test__\linkedList\doublyCircularLinkedList.test.ts
 * @desc 测试双向循环链表
 *
 * @author Mingjie Pi
 * @date 2023-10-08 12:05:32
 ******************************************************************************/

import { DoublyCircularLinkedList } from '@/linkedList/doublyCircularLinkedList'

describe('Doubly Circular Linked List', () => {
  let list: DoublyCircularLinkedList<number>

  beforeEach(() => {
    list = new DoublyCircularLinkedList<number>()
  })

  it('should add new nodes to the list and traverses the list', () => {
    list.insert(0, 3)
    list.addFirst(2)
    list.addFirst(1)
    list.addLast(5)
    list.addLast(6)
    list.insert(3, 4)
    list.insert(6, 7)

    const result: number[] = []
    list.traversal((value) => {
      result.push(value)
    })
    console.log(result)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7])

    // 无效索引情况
    expect(() => {
      list.insert(-1, 0)
    }).toThrowError('无效索引！')
    expect(() => {
      list.insert(8, 0)
    }).toThrowError('无效索引！')
  })

  it('should delete the first node of the list', () => {
    // 空链表情况
    expect(() => {
      list.removeFirst()
    }).toThrowError('链表已空！')

    // 非空链表
    list.insert(0, 1)
    list.insert(1, 2)
    list.insert(2, 3)

    list.removeFirst()
    expect(list.sentinel.next?.value).toBe(2)
    list.removeFirst()
    expect(list.sentinel.next?.value).toBe(3)
  })

  it('should delete the last node of the list', () => {
    // 空链表
    expect(() => {
      list.removeLast()
    }).toThrowError('链表已空！')

    // 非空链表
    list.addLast(1)
    list.addLast(2)
    list.addLast(3)

    list.removeLast()
    expect(list.sentinel.prev?.value).toBe(2)
    list.removeLast()
    expect(list.sentinel.prev?.value).toBe(1)
    list.removeLast()
    expect(() => {
      list.removeLast()
    }).toThrowError('链表已空！')
  })

  it('should delete the node of the specified index', () => {
    // 空链表删除
    expect(() => {
      list.remove(0)
    }).toThrowError('链表已空！')
    expect(() => {
      list.remove(1)
    }).toThrowError('无效索引！')

    // 非空链表
    list.addLast(1)
    list.addLast(2)
    list.addLast(3)
    list.addLast(4)
    list.addLast(5)

    list.remove(0)
    expect(list.sentinel.next?.value).toBe(2)
    list.remove(3)
    expect(list.sentinel.prev?.value).toBe(4)
    list.remove(1)
    const result: number[] = []
    list.traversal((value) => {
      result.push(value)
    })
    expect(result).toEqual([2, 4])
  })

  it('should delete the node of the specified value', () => {
    list.addLast(1)
    list.addLast(2)
    list.addLast(3)
    list.addLast(4)

    list.removeByValue(3)
    const result: number[] = []
    list.traversal((value) => {
      result.push(value)
    })
    expect(result).toEqual([1, 2, 4])

    // 结点不存在情况
    expect(() => {
      list.removeByValue(888)
    }).toThrowError('结点不存在！')
  })
})
