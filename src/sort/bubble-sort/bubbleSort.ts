/**
 * @file 确定更合适的右边界的冒泡排序实现
 * @author Mingjie Pi
 * @date 2023-09-07
 */

/**
 * 冒泡排序
 */
function bubbleSort<T>(arr: T[]): void {
  let j = arr.length - 1
  do {
    let x = 0
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        const intermediate = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = intermediate
        x = i
      }
    }
    j = x
  } while (j !== 0)
}

// 待排数组
const arr1 = [98, 23, 1, 45, 6, 12, 33, 23, 89, 100, 101]
const arr2 = ['banana', 'pear', 'apple', 'watermelon', 'cherry', 'durian']

/**
 * 排序
 * @param arr 待排数组
 */
function mySort<T>(arr: T[]): void {
  console.log('排序前：', arr)
  bubbleSort(arr)
  console.log('排序后：', arr)
}

mySort(arr1)
mySort(arr2)
