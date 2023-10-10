/**************************************************************************/ /**
 * @file src\recursion\fibonacci.ts
 * @desc 多路递归 —— 斐波那契数列
 *
 * @author Mingjie Pi
 * @date 2023-10-09 12:39:24
 ******************************************************************************/

export function fibonacci(n: number): number {
  if (n === 0) return 0
  if (n === 1) return 1

  const x = fibonacci(n - 1)
  const y = fibonacci(n - 2)
  return x + y
}
