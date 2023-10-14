/**************************************************************************/ /**
 * @file src\queue\queue.d.ts
 * @desc 队列接口
 *
 * @author Mingjie Pi
 * @date 2023-10-11 17:11:31
 ******************************************************************************/

export interface Queue<E> {
  /**
   * 向队列尾部插入值
   * @param value 待插入值
   * @returns 插入成功返回 true，失败返回 false
   */
  offer: (value: E) => boolean

  /**
   * 从队列头获取值并移除
   * @returns 如果队列非空返回队列头的值，否则返回 null
   */
  poll: () => E | null

  /**
   * 从队列头取值，不移除
   * @returns 如果队列非空返回队列头的值，否则返回 null
   */
  peek: () => E | null

  /**
   * 检查队列是否为空
   * @returns 空返回 true，否则返回 false
   */
  isEmpty: () => boolean

  /**
   * 检查队列是否已满
   * @returns 队列满了返回 true，未满返回 false
   */
  isFull: () => boolean
}
