/**************************************************************************/ /**
 * @file __test__\deque\linkedListDeque.test.ts
 * @desc 测试双向循环链表实现双端队列
 *
 * @author Mingjie Pi
 * @date 2023-10-13 17:13:31
 ******************************************************************************/

import { LinkedListDeque } from '@/deque/linkedListDeque'

describe('Linked List Deque', () => {
  let queue: LinkedListDeque<number>

  beforeEach(() => {
    queue = new LinkedListDeque<number>(5)
  })

  it('should add an element to the front of the queue', () => {
    queue.unshift(1)
    queue.unshift(2)
    queue.unshift(3)
    queue.unshift(4)
    queue.unshift(5)
    expect(queue.unshift(1)).toBe(false)

    const queueList: number[] = []
    for (const e of queue) {
      queueList.push(e)
    }
    expect(queueList).toEqual([5, 4, 3, 2, 1])
  })

  it('should add an element to the back of queue', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)
    expect(queue.enqueue(6)).toBe(false)

    const queueList: number[] = []
    for (const e of queue) {
      queueList.push(e)
    }
    expect(queueList).toEqual([1, 2, 3, 4, 5])
  })

  it('should delete an element from the front of the queue', () => {
    expect(queue.dequeue()).toBeNull()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)

    expect(queue.dequeue()).toBe(1)
    expect(queue.dequeue()).toBe(2)
    expect(queue.dequeue()).toBe(3)
    expect(queue.dequeue()).toBe(4)
    expect(queue.dequeue()).toBe(5)
    expect(queue.dequeue()).toBeNull()
  })

  it('should delete an element from the back of the queue', () => {
    expect(queue.popBack()).toBeNull()
    queue.unshift(1)
    queue.unshift(2)
    queue.unshift(3)
    queue.unshift(4)
    queue.unshift(5)
    expect(queue.popBack()).toBe(1)
    expect(queue.popBack()).toBe(2)
    expect(queue.popBack()).toBe(3)
    expect(queue.popBack()).toBe(4)
    expect(queue.popBack()).toBe(5)
    expect(queue.popBack()).toBeNull()
  })

  it('should peek the queue', () => {
    expect(queue.peekFront()).toBeNull()
    expect(queue.peekBack()).toBeNull()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)
    expect(queue.peekFront()).toBe(1)
    expect(queue.peekFront()).toBe(1)
    expect(queue.peekBack()).toBe(5)
    expect(queue.peekBack()).toBe(5)
  })
})
