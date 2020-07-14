// async function firstAsunc () {
//   return 27
// }

// console.log(firstAsunc().then(val => {
//   console.log(val)
// }))

async function firstAsync () {
  let promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('now it is done')
    }, 1000)
  })

  let result = await promise
  console.log(result)
  console.log(await 30) // 等价于console.log(await Promise.resolve(30))
  console.log(2)
  return Promise.resolve(3)
}

firstAsync().then(val => {
  console.log(val)
})
