/**************************************************************************/ /**
 * @file __test__\priorityQueue\priorityQueue2.test.ts
 * @desc 测试基于有序数组实现的优先级队列
 *
 * @author Mingjie Pi
 * @date 2023-10-14 14:48:50
 ******************************************************************************/

import { PriorityQueue2 } from '@/priorityQueue/priorityQueue2'
import { Entry } from '@/priorityQueue/entry'

describe('Order Array Priority Queue', () => {
  let queue: PriorityQueue2<Entry>

  beforeEach(() => {
    queue = new PriorityQueue2<Entry>(5)
  })

  it('should add a task to the queue and poll a task from the queue', () => {
    queue.offer(new Entry('task1', 4))
    queue.offer(new Entry('task2', 3))
    queue.offer(new Entry('task3', 2))
    queue.offer(new Entry('task4', 5))
    queue.offer(new Entry('task5', 1))
    expect(queue.offer(new Entry('task6', 0))).toBe(false)

    expect(queue.peek()?.toString()).toBe('(task4 priority = 5)')

    expect(queue.poll()?.priority()).toBe(5)
    expect(queue.poll()?.priority()).toBe(4)
    expect(queue.poll()?.priority()).toBe(3)
    expect(queue.poll()?.priority()).toBe(2)
    expect(queue.poll()?.priority()).toBe(1)
    expect(queue.poll()?.priority()).toBeUndefined()
    expect(queue.peek()?.priority()).toBeUndefined()
  })
})
