// {
//     let a = 1
//     console.log(a)
// }

// console.log(a)

const arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
  const element = arr[i]
  if (element === 2) {
    // break
    continue
  }
  // console.log(element)
}

// arr.forEach(function(item){

//     console.log(item)
// })

arr.every(function (item) {
  if (item === 2) {
    return false
  }
  // console.log(item)
  return true
})

for (let index in arr) {
  // eslint-disable-next-line eqeqeq
  if (index == 2) {
    continue
  }

  // console.log(index,arr[index])
}

// for of
/*
for (let item of arr) {
  console.log(item)
}

const Price = {
  A: [1.5, 2.3, 4.5],
  B: [3, 4, 5],
  C: [0.5, 0.8, 1.2]
}

for (const key in Price) {
  console.log(key, Price[key])
}
*/

// 生成数组
// let args = [].slice.call(arguments)
// let imgs = [].slice.call(document.querySelectorAll('img'))
// console.log(args)

// Array.prototype.from
// let args = Array.from(arguments)
// let imgs = Array.from(document.querySelectorAll('img'))
// imgs.forEach()

// let array = Array(5)
// array.forEach(function (item) {
//   item = 1
// })

// for (let i = 0; i < array.length; i++) {
//   array[i] = 1
// }
// console.log(array)

// let array = Array.from({ length: 5 }, function () { return 1 })
// console.log(array)

// 生成数组
// Array.prototype.of
// let array = Array.of(1, 2, 3, 5, 5)
// console.log(array)
// Array.prototype.fill
// let array = Array(5).fill(1)
// console.log(array)
// // Array.fill(value, start, end)
// console.log(array.fill(8, 2, 4))

let array = [1, 2, 3, 4]
let find = array.filter(function (item) {
  return item % 2 === 0
})
console.log(find)

find = array.find(function (item) {
  return item % 2 === 0
})
console.log(find)

// Array.protoype.findIndex
find = array.findIndex(function (item) {
  return item % 2 === 0
})
console.log(find)
