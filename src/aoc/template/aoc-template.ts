import fs from 'fs'
import * as lib from '../lib/index.js'

const [year, day] = ['2022', '6']

const rawInput = fs.readFileSync(`assets/aoc/${year}/aoc${year}-${day}-sample.txt`, 'utf8')
// const rawInput = fs.readFileSync(`assets/aoc/${year}/aoc${year}-${day}.txt`, 'utf8')
// const [raw1, raw2] = rawInput.split('\n\n')
const input = rawInput.split('\n')

const part1 = () => {
  // eslint-disable-next-line prefer-const
  let total = 0
  input.forEach(line => {
    const [n, f, t] = lib.ints(line)
  })
  return total
}

const part2 = () => {
  // eslint-disable-next-line prefer-const
  let total = 0
  input.forEach(line => {
    const [n, f, t] = lib.ints(line)
  })
  return total
}

console.log('part1:', part1())
console.log('part2:', part2())
