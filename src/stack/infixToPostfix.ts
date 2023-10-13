/**************************************************************************/ /**
 * @file src\stack\infixToPostfix.ts
 * @desc 中缀表达式转后缀表达式
 *  1. 遇到非运算符，直接拼接
 *  2. 遇到 + - * /
 *    - 它的优先级比栈顶运算符高，入栈
 *    - 否则把栈里优先级 >= 它 的都出栈，它再入栈
 *  3. 遍历完成，栈里剩余运算符依次出栈
 *  4. 带()
 *    - 左括号直接入栈，左括号优先级设置为 0
 *    - 右括号就把栈中到左括号为止的所有的运算符出栈
 *
 * @author Mingjie Pi
 * @date 2023-10-12 23:27:26
 ******************************************************************************/

import { ArrayStack } from './arrayStack'

/**
 * 获取运算符优先级
 * @param c 运算符
 * @returns 返回优先级
 */
function priority(c: string): number {
  switch (c) {
    case '*':
    case '/':
      return 2
    case '+':
    case '-':
      return 1
    case '(':
      return 0
    default:
      throw new Error('Invalid Operator!')
  }
}

/**
 * 中缀表达式转后缀表达式
 * @param exp 中缀表达式
 * @returns 后缀表达式
 */
export function infixToPostfix(exp: string): string {
  const stack = new ArrayStack<string>(exp.length)
  let targetStr: string = ''

  for (const item of exp) {
    switch (item) {
      case ' ':
        break
      case '+':
      case '-':
      case '*':
      case '/': {
        if (stack.isEmpty()) {
          stack.push(item)
        } else {
          if (priority(item) > priority(stack.peek()!)) {
            stack.push(item)
          } else {
            while (!stack.isEmpty() && priority(stack.peek()!) >= priority(item)) {
              targetStr += stack.pop()
            }
            stack.push(item)
          }
        }
        break
      }
      case '(': {
        stack.push(item)
        break
      }
      case ')': {
        while (!stack.isEmpty() && stack.peek() !== '(') {
          targetStr += stack.pop()
        }
        stack.pop()
        break
      }
      default: {
        targetStr += item
        break
      }
    }
  }
  while (!stack.isEmpty()) {
    targetStr += stack.pop()
  }

  return targetStr
}
