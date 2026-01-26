// 1. 10 ~ 1까지 Array에 담은 후 짝수만 출력하기
const arr1 = new Array()
for(let i = 0 ; i< 10; i++){
  arr1.push(10-i)
}
console.log(arr1.filter((i) => i%2 === 0))

// 2. 한글을 숫자로
// ex) "일이삼사" -> "1234"
const korean = "일이삼사"

const textInt = korean
  .split("")
  .map((data) => data === "일" ? 1 
  : data === "이" ? 2  
  : data === "삼" ? 3  
  : data === "사" ? 4  
  : data === "오" ? 5 
  : data === "육" ? 6 
  : data === "칠" ? 7 
  : data === "팔" ? 8 
  : data === "구" ? 9 : 0)
  .join("")
console.log(textInt)
// 3. 숫자를 한글로
// ex) "1234" -> "일이삼사"
const number = "1234"

const intText = number
  .split("")
  .map((data) => data === "1" ? "일" 
  : data === "2" ? "이"  
  : data === "3" ? "삼"  
  : data === "4" ? "사"  
  : data === "5" ? "오" 
  : data === "6" ? "육" 
  : data === "7" ? "칠" 
  : data === "8" ? "팔" 
  : data === "9" ? "구" : "공")
  .join("")
console.log(intText)

// 1~100까지 합을 출력
let num = 0
new Array(100).fill(0).forEach((data,i,arr) => {
  num += i + 1
})
console.log(num)

const sum100 = new Array(100).fill(0).map((_,i) => i+1 )
const result = sum100.reduce((accumlate, current, i ,arr) => accumlate + current)
console.log(result)

// 4. 문자열을 반대로 출력하기
// ex) "apple" -> "elppa"
const str1 = "apple".split("").reverse().join("")

console.log(str1)


// 5. 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1224-1225
// result) 010-****-1225

