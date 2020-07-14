/* const s = 'aaa_aa_a'
const r1 = /a+/g // ^ $
const r2 = /a+/y // 粘连紧跟着查找

console.log(r1.exec(s)) // aaa
console.log(r2.exec(s)) // aaa

console.log(r1.exec(s)) // aaa
console.log(r2.exec(s)) // aaa
 */
// sticky
// unicode编码

let s2 = '\uD842\uDFB7'

// console.log(/^\uD842/.test(s2))
// console.log(/^\uD842/u.test(s2))
// console.log(/^.$/u.test(s2))
// \u将编码装换成字符
console.log(/\u{61}/u.test('a'))
