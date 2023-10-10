/**************************************************************************/ /**
 * @file src\recursion\fibonacciMemoization.ts
 * @desc 记忆法优化递归斐波那契
 *
 * @author Mingjie Pi
 * @date 2023-10-09 14:28:02
 ******************************************************************************/

export function fibonacci(n: number): number {
  const cache: number[] = new Array(n + 1).fill(-1)
  cache[0] = 0
  cache[1] = 1
  return f(n, cache)
}

function f(n: number, cache: number[]): number {
  if (cache[n] !== -1) return cache[n]

  const x = f(n - 1, cache)
  const y = f(n - 2, cache)
  cache[n] = x + y
  return cache[n]
}
