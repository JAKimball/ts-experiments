// import * from "jest"
import { assert, describe, expect, it } from 'vitest'
import { fib, numWays, hailstone, hailstone2, gridTraveler, decodeStr, encodeStr, node, add, missing } from './fib.js'
// import * as fib from "./js"

const ϕ = (1 + Math.sqrt(5)) / 2

describe('fib function:', () => {
  it('the ratio of fib(n+1)/fib(n) should approach ϕ for higher values of n', () => {
    expect(Number(fib(41)) / Number(fib(40))).toBe(ϕ)
  })
})

describe('hailstone functions:', () => {
  it('hailstone(7) = 17', () => {
    expect(hailstone(7)).toBe(17)
  })
  it('hailstone2(n) === hailstone(n)', () => {
    for (let i = 1; i <= 100; i++)
      expect(hailstone2(i)).toBe(hailstone(i))
    // console.table(hailstone)
    // console.table(hailstone2)

  })
})

describe('decodeStr function:', () => {
  it('test case "a2z2r4"', () => {
    expect(decodeStr('a2z2r4')).toBe('aaazzzrrrrr')
  })
  it('test case 2', () => {
    expect(decodeStr('')).toBe('')
  })
  it('test case 3', () => {
    expect(decodeStr('abc0hij1klm11')).toBe('abchijjklmmmmmmmmmmmm')
  })
  it('test case 4', () => {
    expect(decodeStr('abc0hij1klm11r')).toBe('abchijjklmmmmmmmmmmmmr')
  })
})

describe('encodeStr function:', () => {
  it('test case "aaazzzrrrrr"', () => {
    expect(encodeStr('aaazzzrrrrr')).toBe('a2z2r4')
  })
  it('test case 2', () => {
    expect(encodeStr('')).toBe('')
  })
  it('test case 3', () => {
    expect(encodeStr('abchijjklmmmmmmmmmmmm')).toBe('abchij1klm11')
  })
  it('test case 4', () => {
    expect(encodeStr('abchijjklmmmmmmmmmmmmr')).toBe('abchij1klm11r')
  })
})

describe('Boundary method', () => {
  it('gives expected result', () => {
    expect(node.boundary()).toStrictEqual(['a', 'b', 'd', 'h', 'i', 'j', 'k', 'f', 'n', 'o', 'g', 'c'])
  })
})

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

describe('"missing" function', () => {
  it('should identify the missing integer given an arbitrary consecutive range with one integer missing', () => {
    expect(missing([4, 5, 7, 8])).toEqual(6)
    expect(missing([4, 5, 7, 8, 9])).toEqual(6)
    expect(missing([4, 5, 6, 7, 8, 9])).toEqual(0)
    expect(missing([4, 6, 7, 8, 9])).toEqual(5)
    expect(missing([9, 7, 6, 5, 4])).toEqual(8)
    expect(missing([4, 7, 8, 9])).toEqual(11)
    expect(missing([0, 2, 3, 4])).toEqual(1)
    expect(missing([-1, 1, 2])).toEqual(0)
    expect(missing([-3, -1, 1])).toEqual(-2)
    expect(missing([-3, -1, 0, 1, 3])).toEqual(0)
  })
})

import { digitCount } from './fib.js'
describe('digitCount(n)', () => {
  it('should return the number of digits in the given integer', () => {
    expect(digitCount(1)).toEqual(1)
    expect(digitCount(9)).toEqual(1)
    expect(digitCount(10)).toEqual(2)
    expect(digitCount(99)).toEqual(2)
    expect(digitCount(100)).toEqual(3)
    expect(digitCount(999)).toEqual(3)
    expect(digitCount(10000)).toEqual(5)
    expect(digitCount(99999)).toEqual(5)
    expect(digitCount(10000000000000)).toEqual(14)
    expect(digitCount(99999999999999)).toEqual(14)
    expect(digitCount(-1)).toEqual(1)
    expect(digitCount(0)).toEqual(1)
  })
})
