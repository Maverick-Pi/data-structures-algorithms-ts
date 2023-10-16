/**************************************************************************/ /**
 * @file src\sort\heapSort\heapSort.ts
 * @desc 堆排序
 *
 * @author Mingjie Pi
 * @date 2023-10-16 21:13:05
 ******************************************************************************/

import { MaxHeap } from '../../heapify/maxHeap'

const arr = [2, 3, 1, 7, 6, 4, 5]
const maxHeap = new MaxHeap(arr)

while (maxHeap.getSize() > 1) {
  maxHeap.swap(0, maxHeap.getSize() - 1)
  maxHeap.decSize()
  maxHeap.sink(0)
}

console.log(maxHeap.getArray())
