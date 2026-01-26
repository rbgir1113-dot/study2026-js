// 성과 이름을 더한 결과 값을 출력해주는 함수

function myName(fristName, lastName, callback){
  callback(fristName + lastName)
}

myName("이","규혁", (result) => {console.log(result)} )

const print = (data) => {
  console.log(data)
}

const add = (lastname, firstname, callback) => {
  callback(lastname + firstname)
}

add("홍","길동", print)

// 두 정수의 곱셈 결과를 출력

const multiply = (num1, num2, callback) => {
  callback(num1 * num2)
}

multiply(10, 30, print)

// 두 정수를 받아서 큰 값의 결과를 출력해주는 콜백함수 로직

const compare = (number1, number2, callback) => {
  let pare = number1 > number2 ? number1 : number2
  callback(pare)
}
compare(30,20,print)

