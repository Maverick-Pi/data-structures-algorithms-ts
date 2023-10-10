/**************************************************************************/ /**
 * @file src\recursion\insertionSort.ts
 * @desc 递归实现插入排序
 *
 * @author Mingjie Pi
 * @date 2023-10-09 11:12:34
 ******************************************************************************/

function insertion(arr: number[], low: number): void {
  if (low >= arr.length) return
  const temp = arr[low]
  let i = low - 1 // 已排序区域
  while (arr[i] > temp && i >= 0) {
    arr[i + 1] = arr[i] // 空出插入位置
    i--
  }
  // 找到插入位置
  if (i + 1 !== low) {
    arr[i + 1] = temp
  }
  insertion(arr, low + 1)
}

export function insertionSort(arr: number[]): void {
  insertion(arr, 1)
}
