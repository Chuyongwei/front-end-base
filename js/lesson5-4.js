// console.log(/foo.bar/us.test('foo\nbar')) // s匹配换行符，u匹配unicode编码
// const re = /foo.bar/sugi
// console.log(re.dotAll) // 验证正则是否有s模式
// console.log(re.flags) // 显示开启的模式

/*
// match
const t = '2019-06-07'.match(/(\d{4}-(\d){2})-(\d{2})/) // "2019-06-07", "2019-06", "6", "07", index: 0, input: "2019-06-07", group: undefine
console.log(t[1]) // 2019-06
console.log(t[2]) // 6
console.log(t[3]) // 07 */

// groups 是什么？
// const t = '2019-06-07'.match(/(?<year>\d{4}-(?<mouth>\d){2})-(?<day>\d{2})/) // "2019-06-07", "2019-06", "6", "07", index: 0, input: "2019-06-07",groups: {year: "2019-06", mouth: "6", day: "07"}
// console.log(t)
// console.log(t.groups.year) // 2019

// 先行断言
let test = 'hello world'
console.log(test.match(/hello(?=\sworld)/)) // 先行断言 先找到hello然后看后面是否有world
console.log(test.match(/(?<=hello\s)world/))// 后行断言 先找到world然后看前面面是否有hello
console.log(test.match(/(?<!hello\s)world/)) // 先找到world然后看前面面是否不是hello
