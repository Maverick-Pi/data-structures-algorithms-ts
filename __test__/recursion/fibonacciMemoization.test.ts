/**************************************************************************/ /**
 * @file __test__\recursion\fibonacciMemoization.test.ts
 * @desc 测试记忆法优化斐波那契
 *
 * @author Mingjie Pi
 * @date 2023-10-09 14:37:38
 ******************************************************************************/

import { fibonacci } from '@/recursion/fibonacciMemoization'

test('multi-recursion fibonacci', () => {
  const fibonacciArr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
  expect(fibonacci(0)).toBe(fibonacciArr[0])
  expect(fibonacci(1)).toBe(fibonacciArr[1])
  expect(fibonacci(2)).toBe(fibonacciArr[2])
  expect(fibonacci(3)).toBe(fibonacciArr[3])
  expect(fibonacci(4)).toBe(fibonacciArr[4])
  expect(fibonacci(5)).toBe(fibonacciArr[5])
  expect(fibonacci(6)).toBe(fibonacciArr[6])
  expect(fibonacci(7)).toBe(fibonacciArr[7])
  expect(fibonacci(8)).toBe(fibonacciArr[8])
  expect(fibonacci(9)).toBe(fibonacciArr[9])
  expect(fibonacci(10)).toBe(fibonacciArr[10])
})
