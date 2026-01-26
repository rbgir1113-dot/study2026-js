// 함수 문자열을 뒤집어주는 함수
// reverse

// "abcd" -> "dcba"
const reverse = (str) => {
  let result =""
  // 문자열의 길이
  for(let i =0; i<str.length; i++) {
    result +=str[str.length - i - 1]
  }
  return result
}
let result = reverse("abcd")
console.log(result)

// 가변 매개변수를 이용해서,
// 전달 받은 모든 값을 더해서 반환 해주는 함수

const addAll = (...numbers) => {
  let result2 = 0;
  for(let i = 0; i<numbers.length; i++) {
    result2 += numbers[i]
  }
  return result2
}
let result2 = addAll(10,20,30,40)

console.log(result2)

