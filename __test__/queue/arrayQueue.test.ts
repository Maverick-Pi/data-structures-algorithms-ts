/**************************************************************************/ /**
 * @file __test__\queue\arrayQueue.test.ts
 * @desc 测试环形数组队列
 *
 * @author Mingjie Pi
 * @date 2023-10-12 15:02:06
 ******************************************************************************/

import { ArrayQueue } from '@/queue/arrayQueue'

describe('Array Queue', () => {
  let queue: ArrayQueue<number>

  beforeEach(() => {
    queue = new ArrayQueue<number>(5)
  })

  it('should offer an element to the queue', () => {
    queue.offer(1)
    queue.offer(2)
    queue.offer(3)
    queue.offer(4)
    queue.offer(5)
    expect(queue.offer(6)).toBe(false)

    const arr: number[] = []
    for (const item of queue) {
      arr.push(item)
    }
    expect(arr).toEqual([1, 2, 3, 4, 5])
  })

  it('should poll an element from the queue', () => {
    expect(queue.poll()).toBeNull()
    queue.offer(1)
    queue.offer(2)
    queue.offer(3)
    queue.offer(4)
    queue.offer(5)
    expect(queue.poll()).toBe(1)
    expect(queue.poll()).toBe(2)
    expect(queue.poll()).toBe(3)
    expect(queue.poll()).toBe(4)
    expect(queue.poll()).toBe(5)
    expect(queue.poll()).toBeNull()
  })

  it('should peek an element from the queue', () => {
    expect(queue.peek()).toBeNull()
    queue.offer(1)
    queue.offer(2)
    queue.offer(3)
    queue.offer(4)
    queue.offer(5)
    expect(queue.peek()).toBe(1)
    expect(queue.peek()).toBe(1)
    expect(queue.peek()).toBe(1)
    expect(queue.peek()).toBe(1)
    expect(queue.peek()).toBe(1)
  })
})
