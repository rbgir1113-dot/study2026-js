class Company {

  static totalIncome = 0;

  work(income){
    Company.totalIncome += income
  }

}

new Company('홍길동', 20).work(1000000)
new Company('김길동', 30).work(1000)
new Company('이규혁', 10).work(-1000000)
console.log(Company.totalIncome)

// 학교를 다니고 있는 학생의 총 수 구하기
// 학교(School) 클래스 하나 생성
// 필드(학번, 이름, 나이)

// 3명의 학생 객체화 후 static 필드의 학생 수 출력

class School {
  static studentNum = 0;

  constructor(schoolNum, name, age) {
    this.schoolNum = () => {
      if(!(schoolNum == false)){
        School.studentNum++
      }
    }
    this.name = name
    this.age = age
  }

}

new School(123456, "이규혁", 25).schoolNum(12345)
new School(4568,"홍길동",123)

console.log(School.studentNum)


