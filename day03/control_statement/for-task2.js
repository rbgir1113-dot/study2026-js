// for(초기화; 조건식; 증감식){ 
   
//    조건식이 참일 경우 실행할 문장 
// }

// 1번 문제: 1~100까지 짝수만 출력해보기

// for(i=0; i< 100; i++){
//   let num = i+1
//   let isInt = !((i +1)%2)
//   let result = isInt ? "짝수" : "홀수"
//   if(result ==="짝수"){
//     console.log(`${num}는 ${result}`)
//   }
// }


// 2번 문제: 0~9까지 반복 후 "12345678910" 출력하기
// let result = ""
// for(i = 0; i < 10; i++){
//   result += i+1 
// }
// console.log(result)

// 3번 문제: 1~10까지 반복후 i값이 홀수면 "홀수", 짝수만 "짝수" 출력하기
// for(i=0; i<=10; i++){
//   let num = (i+1) % 2 == 0 ? "짝수" : "홀수"
//   console.log(num)
// }

// 4번 문제: 1~20까지 중 3의 배수 출력하기
// for(i=0; i<20; i++){
//   let num = i+1
//   if( num % 3 === 0){
//     console.log(num)
//   }
// }

// 5번 문제: 1~100까지 누적합 구하기
// let result = 0
// for(let i =0; i < 100 ; i++) {
//   let num = i + 1
//   result += num
// }
// console.log(result)

// 6번 문제: 1~100까지 홀수만 모두 더해서 출력
// let total = 0;
// for(let i =0; i<100; i++) {
//   let num = i + 1
//   let isOdd = num % 2=== 1
//   if(isOdd){
//     total += num
//   }
// }
// console.log(total)
// 7번 문제: 1~77까지 수 중 홀수의 개수 구하기
let count = 0;
for(let i =0; i < 77; i++){
  let num = i+1;
  let isOdd = num % 2 === 1
  isOdd && count++
  if(isOdd) {
    count++
  }
}

console.log(count)