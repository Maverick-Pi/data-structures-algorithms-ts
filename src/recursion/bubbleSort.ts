/**************************************************************************/ /**
 * @file src\recursion\bubbleSort.ts
 * @desc 递归实现冒泡排序
 *
 * @author Mingjie Pi
 * @date 2023-10-08 23:32:40
 ******************************************************************************/

function bubble(arr: number[], j: number): void {
  if (j === 0) return
  let x = 0
  for (let i = 0; i < j; i++) {
    if (arr[i] > arr[i + 1]) {
      const temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
      x = i
    }
  }
  bubble(arr, x)
}

export function bubbleSort(arr: number[]): void {
  const j = arr.length - 1
  bubble(arr, j)
}
