// 학생의 클래스를 만들고
// 수학, 국어, 영어 점수를 입력 받아 학생의 총점과 평균을 출력하시오.
class Student{
  constructor(name, math, korean, eng) {
    this.total = math + korean + eng
    this.avg = (this.total/3).toFixed(2)
    this.name = name;
    this.math = math;
    this.korean = korean;
    this.eng = eng;
  }

  getTotalOfStudent() {
    console.log(`${this.name}님의 총점은 ${this.total}점이고 평균은 ${this.avg}입니다`)
  }

}

const lee = new Student("이규혁", 50, 60 ,70)
const hong = new Student("홍길동",20,80,90)
hong.getTotalOfStudent()