/**************************************************************************/ /**
 * @file __test__\stack\arrayStack.test.ts
 * @desc 测试数组实现栈
 *
 * @author Mingjie Pi
 * @date 2023-10-12 21:06:10
 ******************************************************************************/

import { ArrayStack } from '@/stack/arrayStack'

describe('Array Stack', () => {
  let stack: ArrayStack<number>

  beforeEach(() => {
    stack = new ArrayStack<number>(5)
  })

  it('should push an element to the stack', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(5)
    expect(stack.push(6)).toBe(false)

    const result: number[] = []
    for (const item of stack) {
      result.push(item)
    }
    expect(result).toEqual([5, 4, 3, 2, 1])
  })

  it('should pop an element from the stack', () => {
    expect(stack.pop()).toBeNull()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(5)
    expect(stack.pop()).toBe(5)
    expect(stack.pop()).toBe(4)
    expect(stack.pop()).toBe(3)
    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
    expect(stack.pop()).toBeNull()
  })

  it('should peek an element from the stack', () => {
    expect(stack.peek()).toBeNull()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.peek()).toBe(3)
    expect(stack.peek()).toBe(3)
    expect(stack.peek()).toBe(3)
  })
})
