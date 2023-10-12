/**************************************************************************/ /**
 * @file src\stack\arrayStack.ts
 * @desc 数组实现栈
 *
 * @author Mingjie Pi
 * @date 2023-10-12 20:49:09
 ******************************************************************************/

export class ArrayStack<E> implements Stack<E> {
  private readonly array: E[]
  private top: number

  constructor(capacity: number) {
    this.top = 0
    this.array = new Array(capacity)
  }

  push(value: E): boolean {
    if (this.isFull()) {
      return false
    }
    this.array[this.top++] = value
    return true
  }

  pop(): E | null {
    if (this.isEmpty()) {
      return null
    }
    return this.array[--this.top]
  }

  peek(): E | null {
    if (this.isEmpty()) {
      return null
    }
    return this.array[this.top - 1]
  }

  isEmpty(): boolean {
    return this.top === 0
  }

  isFull(): boolean {
    return this.top === this.array.length
  }

  *[Symbol.iterator](): Generator<E, void, undefined> {
    let current: number = this.top

    while (current !== 0) {
      yield this.array[--current]
    }
  }
}
