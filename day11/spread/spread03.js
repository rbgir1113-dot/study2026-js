const arr1 = Array.of(10,20,30,40,50)
const arr2 = Array.of(10,20,30,40,50,60,70,80,90)

// 값을 몇개나 전달할 지 모를 때, 전달한 값들을 모두 출력
// const print = (...datas) => {
//   for(let data of datas) {
//     console.log(data)
//   }
// }
// print(...arr2)

// 몇 개를 전달할지 모르지만 최댓값과 최솟값을 구해주는 메서드

// const getMinAndMax = (...numbers) => {
//   let min = numbers[0]
//   let max = numbers[0]
//   for(let num of numbers) {
//   if(min > num) {
//     num = num
//   }
//   if(max > num) {
//     max = num
//   }
//   }
//   return {
//     min : min,
//     max : max
//   }
// }

// const {min, max} = getMinAndMax(10,20,30,40,60,80,100)
// console.log(min)
// console.log(max)


const randomNumbers = new Array(1000).fill(0).map((_) => Math.floor(Math.random() * 10000))
console.log(randomNumbers)


const getMinAndMax = (...numbers) =>{
  return {
    min : Math.min(...numbers),
    max : Math.max(...numbers)
  }
}
const {min,max} = getMinAndMax(...randomNumbers)
console.log(min)
console.log(max)