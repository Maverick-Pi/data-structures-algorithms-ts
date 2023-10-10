/**************************************************************************/ /**
 * @file src\recursion\factorial.ts
 * @desc 递归算法实现阶乘
 *
 * @author Mingjie Pi
 * @date 2023-10-08 19:00:07
 ******************************************************************************/

function factorial(n: number): number {
  if (n === 1) {
    return 1
  }
  return n * factorial(n - 1)
}

console.log(factorial(5))
