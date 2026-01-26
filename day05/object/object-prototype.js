// 프로토타입
// 일반 함수 O
// 화살표 함수 X
function Employee(name, age, position){
  // 이름
  // 나이
  // 직책
  this.name = name
  this.age = age
  this.position = position
}

const user1 = new Object()
user1.name = "홍길동"
user1.age = 20
user1.position = "사원"
const user2 = new Employee("이순신", 30, "대리")
const user3 = new Employee("장보고", 40, "사원")

console.log(user1)
console.log(user2)
console.log(user3)
