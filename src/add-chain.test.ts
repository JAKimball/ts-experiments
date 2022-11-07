// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { assert, describe, expect, it } from 'vitest'

import { add } from './median-two-sorted-arrays.js'
describe('"add" function', () => {
  // it.each([[[3], 3], [[], 0], [[1, 3], 3], [[2, 30, 10], 4]])(
  //   'Evaluate to the sum of arguments',
  //   (input, expected) => {
  //     expect(+add(...input)).toBe(expected)
  //   }
  // )// TODO: Report bug where vitest extension miscounts tests when it.each is used.
  it('return a function', () => {
    expect(add()).toBeInstanceOf(Function)
  })
  // it.each([[+add()()], 0])('Chaining partials work correctly', (input, expected) => {
  //   expect(input).toBe(expected)
  // })
  it('Evaluate to the sum of arguments', () => {
    expect(+add()).toEqual(0)
    expect(+add(10)).toEqual(10)
    expect(+add(10, 20)).toEqual(30)
    expect(+add(10)(20)).toEqual(30)
    expect(+add(10, 20, 6)).toEqual(36)
    expect(+add(10, 20, 6, 6)).toEqual(42)
    expect(+add(10, 20, 6)(6)).toEqual(42)
    expect(+add(10, 20)(6, 6)).toEqual(42)
    expect(+add(10)(20, 6, 6)).toEqual(42)
    expect(+add(10, 20)(6)(6)).toEqual(42)
    expect(+add(10)(20)(6)(6)).toEqual(42)
    expect(+add(10)(20)(6)(6)()).toEqual(42)
    expect(+add()(10)(20)(6)(6)).toEqual(42)
  })
})
