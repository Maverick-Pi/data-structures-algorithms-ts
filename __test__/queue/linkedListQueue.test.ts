/**************************************************************************/ /**
 * @file __test__\queue\linkedListQueue.test.ts
 * @desc 测试链表实现队列
 *
 * @author Mingjie Pi
 * @date 2023-10-11 23:52:11
 ******************************************************************************/

import { LinkedListQueue } from '@/queue/linkedListQueue'

describe('Linked List Queue', () => {
  let queue: LinkedListQueue<number>

  beforeEach(() => {
    queue = new LinkedListQueue<number>(5)
  })

  it('should offer an element to the queue', () => {
    queue.offer(1)
    queue.offer(2)
    queue.offer(3)
    queue.offer(4)
    queue.offer(5)
    expect(queue.offer(6)).toBe(false)

    const elements: number[] = []
    for (const item of queue) {
      elements.push(item)
    }
    expect(elements).toEqual([1, 2, 3, 4, 5])
  })

  it('should peek an element from the queue', () => {
    expect(queue.peek()).toBeNull()
    queue.offer(1)
    expect(queue.peek()).toBe(1)
    queue.offer(2)
    expect(queue.peek()).toBe(1)
  })

  it('should poll an element from the queue', () => {
    expect(queue.poll()).toBeNull()
    queue.offer(1)
    queue.offer(2)
    queue.offer(3)
    expect(queue.poll()).toBe(1)
    expect(queue.poll()).toBe(2)
    expect(queue.poll()).toBe(3)
    expect(queue.poll()).toBeNull()
  })
})
