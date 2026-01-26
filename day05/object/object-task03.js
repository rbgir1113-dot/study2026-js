// 회사에 회사원이 3명 존재한다.
// 회사원1
// 이름: 홍길동
// 나이: 20
// 직책: 사원
// 월급: 2_000_000

// 회사원2
// 이름: 이순신
// 나이: 30
// 직책: 대리
// 월급: 2_500_000

// 회사원3
// 이름: 장보고
// 나이: 25
// 직책: 사원
// 월급: 2_100_000

// 추상화
function Employee(name, age, position, salary) {
  this.name = name
  this.age = age
  this.position = position
  this.salary = salary
  this.deal = () => {
    console.log(this.salary = salary*1.1)
  }
}

function Company () {}

const employee1 =  new Employee("홍길동", 30, "사원", 2_000_000)
const employee2 =  new Employee("이순신", 22, "대리", 2_500_000)
const employee3 =  new Employee("장보고", 66, "사원", 2_100_000)

const company = new Company()

company.employee1 = employee1
company.employee2 = employee2
company.employee3 = employee3

for(let key in company) {
  console.log(company[key].name)
  // console.log(company[key].salary)
  company[key].deal()
}

// 프로토타입, 객체 실습
// 회사의 연봉 협상
// 회사의 deal 메서드를 사용하면,
// 각자 회사원마다 월급을 10%로씩 증가시켜준다.
// 월급이 10% 증가한 회사원의 이름과 월급을 출력하시오. 