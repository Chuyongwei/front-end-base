const input = {
  a: 1,
  b: 2,
  c: 3,
  d: 5
}

const output = {
  ...input,
  c: 3
} // 数组嵌套

console.log(input, output)

const { a, b, ...rest } = input // 将必填项找到，其余的做成数组

console.log(a, b, rest)
