/**************************************************************************/ /**
 * @file src\recursion\binarySearch.ts
 * @desc 递归实现二分查找
 *
 * @author Mingjie Pi
 * @date 2023-10-08 22:49:11
 ******************************************************************************/
function func(arr: number[], target: number, i: number, j: number): number {
  if (i > j) {
    return -1
  }
  const m = (i + j) >>> 1
  if (target < arr[m]) {
    return func(arr, target, i, m - 1)
  } else if (arr[m] < target) {
    return func(arr, target, m + 1, j)
  } else {
    return m
  }
}

export function binarySearch(arr: number[], target: number): number {
  return func(arr, target, 0, arr.length - 1)
}
