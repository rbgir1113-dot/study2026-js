// 회사원1
// 이름: 홍길동
// 나이: 20
// 직책: 사원
const user1 = {
  name: "홍길동",
  age: 20,
  class: "사원"
}

// 회사원2
// 이름: 이순신
// 나이: 30
// 직책: 대리
const user2 = {
  name: "이순신",
  age: 30,
  class: "대리"
}

// 회사원3
// 이름: 장보고
// 나이: 25
// 직책: 사원
const user3 = {
  name: "장보고",
  age: 25,
  class: "사원"
}

// 회사원 3명을 모두 객체로 선언 후
// 사원들의 정보가 몇 명이라도 직책이 사원인 회사원의 이름만 출력해주는 함수
// ex) myFunc(user1, user2, user3, ...)
// 출력결과
// 홍길동
// 장보고

const info = (...numbers) => {
  for(i = 0; i < numbers.length; i++) {
    let employee = numbers[i]
    if(employee.class === "사원") {
      console.log(employee.name)   
    }
  }
}

info(user1,user2,user3)