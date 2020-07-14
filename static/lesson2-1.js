// var abc = 1234
// abcd = 1453
// function test(){
//     var ab = 45
// }
// test()


// function test(){
//     var a = 3
//     function test2(){
//         var b = 2
//         return a+b //test2没找到a就向上找a
//     }
//     return test2 //提供访问test2的口子
// }
// console.log(test());
// console.log(a)

// function test(){
//     var a = 3
//     if(a===3){
//         let b = 4
//         console.log('abc')
//     }else{
//         console.log('abcd')
//     }
//     return a+b
// }

window.a = 3
function test(){
    console.log(this.a)
}

test()
test.bind({a:100})()