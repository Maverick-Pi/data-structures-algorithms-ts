/**************************************************************************/ /**
 * @file src\priorityQueue\entry.ts
 * @desc 实现 Priority 接口
 *
 * @author Mingjie Pi
 * @date 2023-10-14 13:20:58
 ******************************************************************************/

export class Entry implements Priority {
  private readonly value: string
  private readonly prior: number

  constructor(value: string, priority: number) {
    this.value = value
    this.prior = priority
  }

  /**
   * 返回对象的优先级，约定数字越大，优先级越高
   * @returns 优先级
   */
  priority(): number {
    return this.prior
  }

  toString(): string {
    return `(${this.value} priority = ${this.prior})`
  }
}
