/**************************************************************************/ /**
 * @file src\binarySearch\rightmost.ts
 * @desc 二分查找重复元素取最右侧
 *
 * @author Mingjie Pi
 * @date 2023-09-30 18:08:37
 ******************************************************************************/

/**
 * 二分查找重复元素取最右侧值
 * @param arr 待查数组
 * @param target 目标值
 * @returns 小于等于目标值的最靠右的索引
 */
export function binarySearchRightmost(arr: number[], target: number): number {
  let i = 0
  let j = arr.length - 1
  while (i <= j) {
    const m = (i + j) >>> 1
    if (target < arr[m]) {
      j = m - 1
    } else {
      i = m + 1
    }
  }
  return i - 1
}
