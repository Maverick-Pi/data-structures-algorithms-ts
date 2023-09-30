/**
 * @file 随机基准双边快速排序算法实现
 * @author Mingjie Pi
 * @date 2023-09-07
 */

/**
 * 快速排序
 */
function quickSort<T>(arr: T[], left: number, right: number): void {
  if (left >= right) return
  const p = partition(arr, left, right)
  quickSort(arr, left, p - 1)
  quickSort(arr, p + 1, right)
}

/**
 * 分区
 */
function partition<T>(arr: T[], left: number, right: number): number {
  // 随机基准值
  const idx = Math.floor(Math.random() * (right - left + 1)) + left
  swap(arr, idx, left)
  const pivot = arr[left]
  let i = left + 1
  let j = right
  while (i <= j) {
    // j 从右往左
    while (i <= j && arr[j] > pivot) {
      j--
    }
    // i 从左往右
    while (i <= j && arr[i] < pivot) {
      i++
    }
    if (i <= j) {
      // 交换位置
      swap(arr, i, j)
      i++
      j--
    }
  }
  // 基准值到相应位置
  swap(arr, left, j)
  return j
}

/**
 * 数组内两个数据交换
 * @param arr 数组
 * @param i 交换的索引号
 * @param j 交换的索引号
 */
function swap<T>(arr: T[], i: number, j: number): void {
  const intermediate = arr[i]
  arr[i] = arr[j]
  arr[j] = intermediate
}

// 待排数组
const a = [5, 8, 3, 3, 2, 1, 2, 6]
const names = ['Rose', 'Olivia', 'Dennis', 'Arthur', 'Apple', 'Baby']

/**
 * 排序
 * @param arr 数组
 */
function sort<T>(arr: T[]): void {
  console.log('排序前：', arr)
  quickSort(arr, 0, arr.length - 1)
  console.log('升序后：', arr)
}

// 开始排序
sort(a)
sort(names)
