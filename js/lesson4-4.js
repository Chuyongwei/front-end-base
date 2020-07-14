/* const input = {
  a: 1,
  b: 2
}
const output = {
  ...input,
  c: 3
}

console.log(input, output) */

const input = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
}

const { a, b, ...rest } = input

console.log(a, b, rest)
