import fs from 'fs'

// Synchronously read our data file
// const input = fs.readFileSync('assets/aoc/2022/aoc2022-d4-sample.txt', 'utf8')
const input = fs.readFileSync('assets/aoc/2022/aoc2022-d4.txt', 'utf8')

type Range = {
  lo: number
  hi: number
}

const parseRange = (raw: string): Range => {
  const range = { lo: 0, hi: 0 }
  const [lo, hi] = raw.split('-')
  range.lo = parseInt(lo)
  range.hi = parseInt(hi)
  return range
}

const aFullyInB = (a: Range, b: Range) => {
  if (a.lo < b.lo) return false
  if (a.hi > b.hi) return false
  return true
}

const part1 = () => {
  let total = 0
  input.split('\n').forEach(pair => {
    const [elf1, elf2] = pair.split(',')
    const r1 = parseRange(elf1)
    const r2 = parseRange(elf2)
    if (aFullyInB(r1, r2) || aFullyInB(r2, r1)) total++
  })
  return total
}

const overlaps = (a: Range, b: Range) => {
  if (a.hi < b.lo) return false
  if (a.lo > b.hi) return false
  return true
}

const part2 = () => {
  let total = 0
  input.split('\n').forEach(pair => {
    const [elf1, elf2] = pair.split(',')
    const r1 = parseRange(elf1)
    const r2 = parseRange(elf2)
    if (overlaps(r1, r2)) total++
  })
  return total
}

console.log('In how many assignment pairs does one range fully contain the other?', part1())
console.log('In how many assignment pairs do the ranges overlap?', part2())
//
