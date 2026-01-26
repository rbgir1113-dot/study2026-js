// 1. 이름을 전달하면 이름을 다섯번 출력해주는 함수
function print(name){
  for(i = 0; i<5; i++){
    console.log(name)
  }
}
print("이규혁")

// 2. 3개를 전달하면 3개를 모두 더해서 반환해주는 함수
function add(num1,num2,num3) {
  if(num2 === undefined){
    return num1
  }

  if (num3 === undefined) {
    return num1 + num2
  }

  return num1 + num2 + num3
}

let total = add(1,2,3)

console.log(total)

// 3. 성과 이름을 받아서 풀네임을 출력해주는 함수
function printFullName(firstName,lastName) {
  return firstName + lastName
}
console.log(printFullName("이","규혁"))
console.log(printFullName("홍","길동"))

// 4. 2개를 전달 받아서 큰 값을 비교해서 결과를 반환해주는 함수
function compare(num1, num2) {
  if(num1 > num2){
    return num1
  } else if(num2 > num1){
    return num2
  } else {
    return "두 수가 같습니다"
  }
}
console.log(compare(3,2))

// 5. 1개를 전달 받아서 홀수인지 짝수인지 비교해서 결과를 반환해주는 함수
function oddEven(num) {
  return num % 2 ? "홀수" : "짝수"
}
console.log(oddEven(2))