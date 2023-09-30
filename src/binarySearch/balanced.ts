/***************************************************************************/ /**
 * @file binarySearch\balanced.ts
 * @desc 二分查找平衡版
 *
 * @author Mingjie Pi
 * @date 2023-09-30 13:18:13
 ******************************************************************************/

/**
 * 二分查找平衡版 —— θ(log(n))
 * 循环内的平均比较次数减少
 * @param arr 待查数组
 * @param target 待查目标值
 * @returns 找到了返回对应索引值，没找到返回 -1
 */
export function binarySearchBalanced(arr: number[], target: number): number {
  // 左闭右开的区间，i 指向的可能是目标，而 j 指向的不是目标
  let i = 0
  let j = arr.length
  // 不在循环内找出，等范围内只剩 i 时，退出循环
  while (j - i > 1) {
    const m = (i + j) >>> 1
    if (target < arr[m]) {
      j = m
    } else {
      i = m
    }
  }
  // 在循环外比较 a[i] 与 target
  if (arr[i] === target) {
    return i
  } else {
    return -1
  }
}
