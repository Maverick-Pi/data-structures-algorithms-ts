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

    expect(list.head?.value).toBe(3)
    expect(list.head?.next?.value).toBe(2)
    expect(list.head?.next?.next?.value).toBe(1)
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

    expect(list.head?.value).toBe(1)
    expect(list.head?.next?.value).toBe(2)
    expect(list.head?.next?.next?.value).toBe(3)
  })
})
