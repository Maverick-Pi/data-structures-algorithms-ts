/**************************************************************************/ /**
 * @file __test__\linkedList\singlyLinkedList.test.ts
 * @desc 单向链表测试
 *
 * @author Mingjie Pi
 * @date 2023-10-06 21:27:29
 ******************************************************************************/

import { SinglyLinkedList } from '@/linkedList/singlyLinkedList'

describe('Singly Linked List', () => {
  let list: SinglyLinkedList<number>

  beforeEach(() => {
    list = new SinglyLinkedList<number>()
  })

  it('should add elements to the front of the list', () => {
    list.addFirst(1)
    list.addFirst(2)
    list.addFirst(3)

    expect(list.head?.next?.value).toBe(3)
    expect(list.head?.next?.next?.value).toBe(2)
    expect(list.head?.next?.next?.next?.value).toBe(1)
  })

  it('should traverse the list using while loop and execute callback', () => {
    list.addFirst(1)
    list.addFirst(2)
    list.addFirst(3)

    const consoleSpy = jest.spyOn(console, 'log')
    const expectedOutput = [3, 2, 1]

    list.traversalWhile((value) => {
      console.log(value)
    })

    expectedOutput.forEach((output) => {
      expect(consoleSpy).toHaveBeenCalledWith(output)
    })

    consoleSpy.mockRestore()
  })

  it('should traverse the list using for loop and execute callback', () => {
    list.addFirst(10)
    list.addFirst(20)
    list.addFirst(30)

    const result: number[] = []

    list.traversalFor((value) => {
      result.push(value)
    })

    expect(result).toEqual([30, 20, 10])
  })

  it('should add elements to the tail of the list', () => {
    list.addLast(1)
    list.addLast(2)
    list.addLast(3)

    expect(list.head?.next?.value).toBe(1)
    expect(list.head?.next?.next?.value).toBe(2)
    expect(list.head?.next?.next?.next?.value).toBe(3)
  })

  it('should get the value by index of the list', () => {
    list.addLast(1)
    list.addLast(2)
    list.addLast(3)

    // 正常找到
    expect(list.get(0)).toBe(1)
    expect(list.get(1)).toBe(2)
    expect(list.get(2)).toBe(3)

    // 非正常找不到
    expect(() => list.get(-2)).toThrowError('非法参数！')
    expect(() => list.get(3)).toThrowError('非法参数！')
  })

  it('should insert a new node into the index position', () => {
    list.insert(0, 1)
    expect(list.head?.next?.value).toBe(1)
    list.addLast(2)
    list.addLast(3)
    list.addLast(4)

    list.insert(2, 9)
    expect(list.get(2)).toBe(9)

    list.insert(5, 5)
    expect(list.get(5)).toBe(5)

    // 找不到
    expect(() => {
      list.insert(7, 6)
    }).toThrowError('该位置不存在！')
  })

  it('should remove the first node from the list', () => {
    // 空链表
    expect(() => {
      list.removeFirst()
    }).toThrowError('链表为空！')

    // 非空链表
    list.addLast(1)
    list.addLast(2)
    list.addLast(3)
    list.addLast(4)
    list.addLast(5)

    list.removeFirst()
    const result: number[] = []
    list.traversalFor((value) => {
      result.push(value)
    })
    expect(result).toEqual([2, 3, 4, 5])
  })

  it('should remove the node by index from the list', () => {
    // 删除空链表
    expect(() => {
      list.remove(0)
    }).toThrowError('该结点不存在！')

    expect(() => {
      list.remove(3)
    }).toThrowError('该结点不存在！')

    // 删除存在元素
    list.addLast(1)
    list.addLast(2)
    list.addLast(3)
    list.addLast(4)
    list.addLast(5)

    list.remove(2)

    expect(list.head?.next?.value).toBe(1)
    expect(list.head?.next?.next?.value).toBe(2)
    expect(list.head?.next?.next?.next?.value).toBe(4)
    expect(list.head?.next?.next?.next?.next?.value).toBe(5)

    expect(() => {
      list.remove(4)
    }).toThrowError('该结点不存在！')
  })
})
