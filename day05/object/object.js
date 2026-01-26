// 객체의 선언
const user1 = new Object();
const user2 = {}

console.log(user1)
console.log(user2)

const user3 = {
  name: "유진",
  age : 27,
  color : "노랑"
}


// 1. 대괄호 접근법
// 객체["key이름"]
let age = "age"
console.log(user3["age"])

// 2. 닷 접근법
// . (주소에 접근하는 연산자)

console.log(user3.age)

// user3의 이름을 본인의 이름으로 변경
// **객체의 가장 큰 특징
// key가 있으면 수정
// key가 없으면 추가

user3.name = "규혁"
user3.hobby = "영화 관람"
console.log(user3)
