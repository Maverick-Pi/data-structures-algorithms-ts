/***************************************************************************/ /**
 * @file binarySearch\basic.ts
 * @desc 二分查找基础版
 *
 * @author Mingjie Pi
 * @date 2023-09-28 22:49:02
 ******************************************************************************/

/**
 * 二分查找基础版
 * @param arr 待查找的升序数组
 * @param target 待查找的目标值
 * @returns 找到返回索引，否则返回 -1
 */
export function binarySearchBasic(arr: number[], target: number): number {
  // 设置指针初值
  let i = 0
  let j = arr.length - 1
  // 在范围内查找
  while (i <= j) {
    const m = (i + j) >>> 1
    // 目标在中间值的左边
    if (target < arr[m]) {
      j = m - 1
    } else if (arr[m] < target) {
      i = m + 1
    } else {
      return m
    }
  }
  return -1
}

/**
 * Question1: 为什么 i <= j 意味着区间内有未比较的元素，而不是 i < j ?
 *    i === j 意味着 i, j 它们指向的元素也会参与比较
 *    i < j 只意味着 m 指向的元素参与比较
 * Question2: (i + j) / 2 有没有问题？
 * Question3: 都写成小于号有什么好处？
 */
