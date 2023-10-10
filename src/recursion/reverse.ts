/**************************************************************************/ /**
 * @file src\recursion\reverse.ts
 * @desc 反向打印字符串
 *
 * @author Mingjie Pi
 * @date 2023-10-08 19:16:59
 ******************************************************************************/

function reversePrintString(n: number, str: string): void {
  if (n === str.length) return
  reversePrintString(n + 1, str)
  console.log(str[n])
}

reversePrintString(0, 'abcde')
