/***************************************************************************/ /**
 * @file binarySearch\leftmost.ts
 * @desc 二分查找重复元素取最左边的
 *
 * @author Mingjie Pi
 * @date 2023-09-30 14:34:01
 ******************************************************************************/

/**
 * 二分查找重复元素取最左侧值
 * @param arr 待查数组
 * @param target 目标值
 * @returns 大于等于目标值的最靠左的索引
 */
export function binarySearchLeftmost(arr: number[], target: number): number {
  let i = 0
  let j = arr.length - 1
  while (i <= j) {
    const m = (i + j) >>> 1
    if (target <= arr[m]) {
      j = m - 1
    } else if (arr[m] < target) {
      i = m + 1
    }
  }
  return i
}
