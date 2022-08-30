// import * from "jest"
import { fib, numWays, hailstone, hailstone2, gridTraveler, decodeStr, encodeStr, node } from "./fib.js"
// import * as fib from "./js"

const ϕ = (1 + Math.sqrt(5)) / 2

describe("fib function:", () => {
  it("the ratio of fib(n+1)/fib(n) should approach ϕ for higher values of n", () => {
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
    console.log(hailstone)
    console.log(hailstone2)

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