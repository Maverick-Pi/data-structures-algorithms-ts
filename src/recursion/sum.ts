/**************************************************************************/ /**
 * @file src\recursion\sum.ts
 * @desc 爆栈问题
 *
 * @author Mingjie Pi
 * @date 2023-10-09 16:05:55
 ******************************************************************************/

function sum(n: number, accumulator: number): number {
  if (n === 1) return 1 + accumulator
  return sum(n - 1, n + accumulator)
}

console.log(sum(10000, 0))
