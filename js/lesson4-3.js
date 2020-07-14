// for (let i = 1; i < 32; i++) {
//   if (i < 10) {
//     console.log(`0${i}`)
//   } else {
//     console.log(i)
//   }
// }

for (let i = 1; i < 32; i++) {
  console.log(i.toString().padEnd(5, 'X$'))
}
