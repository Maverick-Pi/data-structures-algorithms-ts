/**************************************************************************/ /**
 * @file __test__\stack\infixToPostfix.test.ts
 * @desc 测试中缀转后缀表达式
 *
 * @author Mingjie Pi
 * @date 2023-10-12 23:49:39
 ******************************************************************************/

import { infixToPostfix } from '@/stack/infixToPostfix'

test('Infix to postfix', () => {
  infixToPostfix('a%b+c')

  expect(infixToPostfix('a + b')).toBe('ab+')
  expect(infixToPostfix('a + b - c')).toBe('ab+c-')
  expect(infixToPostfix('a * b + c')).toBe('ab*c+')
  expect(infixToPostfix('a + b * c')).toBe('abc*+')
  expect(infixToPostfix('a + b * c - d')).toBe('abc*+d-')
  expect(infixToPostfix('(a + b) * c')).toBe('ab+c*')
  expect(infixToPostfix('(a + b * c - d) * e')).toBe('abc*+d-e*')
  expect(infixToPostfix('a * (b + c)')).toBe('abc+*')
})
