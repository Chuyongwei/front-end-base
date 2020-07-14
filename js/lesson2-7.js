const a = 20
const b = 10
const c = 'javascript'

// const str = 'my age is ' + (a + b) + ' i love ' + c
const str = `my age is ${a + b} i love ${c}`
console.log(str)

function Price (strings, type) {
  let s1 = strings[0]
  const retailPrice = 20
  const wholeSalePrice = 16
  let showTxt
  if (type === 'retail') {
    showTxt = '购买单价是：' + retailPrice
  } else {
    showTxt = '购买的批发价是：' + wholeSalePrice
  }
  // console.log(s1) // 您此次的
  return `${s1}${showTxt}`
}

let showTxt = Price`您此次的${'retail'}`
console.log(showTxt)

let g = `我是第一行
换行了`
console.log(g) 
