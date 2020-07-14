/*
// 默认异步方法
 function loadScript (src, callback) {
  let script = document.createElement('script')
  script.src = src
  script.onload = () => { callback(src) }
  document.head.append(script)
}

function test (name) {
  console.log(name)
} */

// loadScript('./1.js', test)

// test 1

/* loadScript('./1.js', function (script) {
  console.log(script)
  loadScript('./2.js', function (script) {
    console.log(script)
    loadScript('./3.js', function (script) {
      console.log(script)
    })
  })
}) */
/*
 1
 ./1.js
 2
 ./2.js
 3
 ./3.js
*/

/*
// Promise方法
function loadScript (src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    script.onload = () => resolve(src)// fulfilled,result
    script.onerror = (err) => reject(err) // rejected,error
    document.head.append(script)
  })
}
loadScript('./1.js')
  .then(() => {
    return loadScript('./4.js')
  }, err => {
    console.log(err)
  })
  .then(() => {
    loadScript('./3.js')
  }, err => {
    console.log(err)
  }) */

// promise.then(onFulfilled,onRejected) 两个均是函数 不是函数就会返回空

/*
// resolve和reject方法
function test (bool) {
  if (bool) {
    return new Promise((resolve, reject) => {
      resolve(20)
    })
  } else {
    // return Promise.resolve(42) // 静态方法
    return Promise.reject(new Error('ss'))
  }
}

test(0).then(value => {
  console.log(value)
}, (err) => {
  console.log(err)
}) */

/*
// catch方法
function loadScript (src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    script.onload = () => resolve(src)// fulfilled,result
    script.onerror = (err) => reject(err) // rejected,error
    document.head.append(script)
  })
}
loadScript('./1.js')
  .then(() => {
    return loadScript('./2.js')
  })
  .then(() => {
    return loadScript('./3.js')
  })
  .catch((err) => {
    console.log(err)
  }) */

/*
const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3)

Promise.all([p1, p2, p3]).then((value) => {
console.log(value)
}) // 并行运行 将业务放进数组接受结果 */

/*
const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () { // 定时器
      resolve(1)
    }, 1000)
  })
}

const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(2)
    }, 0)
  })
}
Promise.race([p1(), p2()]).then((value) => {
  console.log(value)
})
 */
