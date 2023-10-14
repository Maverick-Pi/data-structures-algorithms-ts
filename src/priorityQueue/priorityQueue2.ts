/**************************************************************************/ /**
 * @file src\priorityQueue\priorityQueue2.ts
 * @desc 基于有序数组实现优先级队列
 *
 * @author Mingjie Pi
 * @date 2023-10-14 14:21:33
 ******************************************************************************/

import { type Queue } from '@/queue/queue'

export class PriorityQueue2<E extends Priority> implements Queue<E> {
  private array: E[] | null[]
  private size: number

  constructor(capacity: number) {
    this.size = 0
    this.array = new Array(capacity)
  }

  offer(value: E): boolean {
    if (this.isFull()) return false
    this.insert(value)
    this.size++
    return true
  }

  poll(): E | null {
    if (this.isEmpty()) return null
    const e = this.array[this.size - 1]
    this.array[--this.size] = null
    return e
  }

  peek(): E | null {
    if (this.isEmpty()) return null
    return this.array[this.size - 1]
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  isFull(): boolean {
    return this.size === this.array.length
  }

  /**
   * 根据优先级将元素插入到有序位置
   * @param e 插入元素
   */
  private insert(e: E): void {
    let i = this.size - 1
    while (i >= 0 && this.array[i]!.priority() > e.priority()) {
      this.array[i + 1] = this.array[i]
      i--
    }
    this.array[i + 1] = e
  }
}
