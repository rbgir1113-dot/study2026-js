// forEach 
// 배열에 1~10까지 값을 넣고 짝수만 콘솔에 출력하기
new Array(10).fill(0).forEach((data, i, arr) => {
  let num = i + 1
  arr[i] = num
  if(!(num % 2)){
    // continue, break 키워드 사용불가
    console.log(num)
  }
})

const phone = "010-1234-5678"
// array map 이용해서 문자열을 12345678로 만들기

const arr1 = phone
//   .replace("010-", "")
//   .split("-")
//   .join("")
//   .split("")
//   .map((c) => c)
//   .join("")
// const str1 = arr1.map((c) => c).join("")
// console.log(str1)


// .filter()
const str2 = "abcdefghijk".split("").filter((c,i) => i < 6 ).join("")
// "abcdefghijk" 
// ex) 최종결과 "abcdef"

// console.log(str2)

// a의 개수구하기
// "abaacadeaqdtrascaqqaqadrtasqa"

const str3 = "abaacadeaqdtrascaqqaqadrtasqa"
const str4 = str3
  .split("")
  .filter((data) => data === "a" )
  .length
console.log(str4)