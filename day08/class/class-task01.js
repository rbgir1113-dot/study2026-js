// 학생 추상화
// 학생 객체화

class Student {
  static age = 10
  constructor(name, age, grade, score){
    this.name = name
    this.age = age
    this.grade = grade
    this.score = score
  }
}

const hong = new Student("홍길동", 17, 1, 80)
const lee = new Student("이순신", 18, 2, 70)
const kim = new Student("김유신", 19, 3, 90)

console.log(hong)
console.log(lee)
console.log(kim)
console.log(Student.age)