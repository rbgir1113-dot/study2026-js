// 별 찍기
//     *
//    ***
//   *****
//  *******
// *********
// let star = "*"
// let num1 = "    "
// let num2 = "   "
// let num3 = "  "
// let num4 = " "
// let num5 = ""
// for(j = 0; j<1; j++){
//   num1 += star
// }
// for(j = 0; j<3; j++){
//   num2 += star
// }
// for(j = 0; j<5; j++){
//   num3 += star
// }
// for(i = 0; i<7; i++){
//   num4 += star
// }
// for(i = 0; i<9; i++){
//   num5 += star
// }

// console.log(num1)
// console.log(num2)
// console.log(num3)
// console.log(num4)
// console.log(num5)

const n = 5
for(let i = 0 ; i < n ; i++) {
  let line = "" 
  for(let j = 0; j< n - i - 1; j++){
    line += " "
  }
  for(let k = 0; k < 2*i+1; k++){
    line += "*"
  }
  console.log(line)
}

// 구구단
// 이중 for문 2단 ~ 9단 구구단 만들기
// for(let i = 0; i < 9; i++){
//   let num = i + 1
//   console.log(`2 * ${num} = ${2 * num}`)
// }




// 구구단
let num = 0
for(let i=0; i<8; i++){
  let dan = i+2;
  
  for(let j=num; j<9; j++){
    let num = j+1
    result = `${dan}단 : ${dan} * ${num} = ${num * dan}`
    console.log(result)
  }
}