/* function Gen (time) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(time)
    }, time)
  })
}

// function Gen (time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve(time)
//     }, time)
//   })
// }

async function test () {
  let arr = [Gen(2000), Gen(1000), Gen(3000)]
  for (let item of arr) {
    console.log(Date.now(), await item.then(console.log)) // 同时运行但是执行完要等到前一个任务完成
  }
}

test() 

async function test () {
  let arr = [Gen(2000), Gen(1000), Gen(3000)]
  for await (let item of arr) {
    console.log(Date.now(), item) // 只有前一个任务完成才能运行后面的操作
  }
}

test() */

const obj = {
  count: 0,
  Gen (time) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve({ done: false, value: time })
      }, time)
    })
  },
  [Symbol.asyncIterator] () {
    let self = this
    return {
      next () {
        self.count++
        if (self.count < 4) {
          return self.Gen(Math.random() * 1000)
        } else {
          return Promise.resolve({
            done: true,
            value: ''
          })
        }
      }
    }
  }
}

async function test () {
  for await (let item of obj) {
    console.log(Date.now(), item)
  }
}
test()
