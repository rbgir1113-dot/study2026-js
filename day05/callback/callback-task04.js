// 1. 문자열을 받아서 반대로 순서를 바꾸고 출력
const text = (data, callback) => {
  let result = ""
  for(i = 0 ; i < data.length; i++){
    result += data[data.length - i -1]
  }
  callback(result)
}
const print = (text) => {
  console.log(text)
}
text("abcd",print)
// 2. 사용자가 입력한 값까지 누적 합한 후 결과값에 5를 곱하고 반환

const number = (...numbers) => {
  let result2 = 0;
  for(let i = 0; i<numbers.length; i++){
    result2 += numbers[i]
  }
  callback(result2)
}

let result2 = number(20,30,40,10)
console.log(result2)

const multiply = (result2, callback) =>{

}