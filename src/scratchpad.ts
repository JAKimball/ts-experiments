export function solution(str: string, ending: string): boolean {
  return str.substring(str.length - ending.length) === ending
}

console.log(solution('abcde', 'cde'))
console.log(solution('abcde', 'abc'))
console.log(solution('abc', ''))

console.log('abc'.slice(-5))
console.log('abcde'.endsWith('cde'))
