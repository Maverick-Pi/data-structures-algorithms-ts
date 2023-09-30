/***************************************************************************/ /**
 * @file binarySearch\modify.ts
 * @desc 二分查找改动版
 *
 * @author Mingjie Pi
 * @date 2023-09-29 15:14:17
 ******************************************************************************/

/**
 * 二分查找改动版，相比于基础版共有三处修改
 * @param arr 待查找的升序数组
 * @param target 待查找的目标值
 * @returns 找到返回索引，否则返回 -1
 */
export function binarySearchModify(arr: number[], target: number): number {
  // 设置指针初值 —— modify1
  let i = 0
  let j = arr.length
  // 在范围内查找 —— modify2
  while (i < j) {
    const m = (i + j) >>> 1
    // 目标在中间值的左边
    if (target < arr[m]) {
      j = m // modify3
    } else if (arr[m] < target) {
      i = m + 1
    } else {
      return m
    }
  }
  return -1
}
