// 이름 : 여러분들의 성함 // 변수 또는 상수
// 국어: 80점
// 수학: 70점
// 영어: 90점
// 과학: 20점

// 평균, 학점, 구하기

// if문을 사용해서 평균 60점 이상은 합격, 60점 미만은 불합격 출력하기

// 최종 문장
// OOO님의 이번 총점은 OO, 평균은 OO점으로 (합격 또는 불합격)입니다.

const kor = 80
const math = 70
const eng = 90
const science = 20
const name = "홍길동"
const total = kor + math + eng + science

const avg = total / 4

if(avg >= 60){
  result = "합격"
} else {
  result = "불합격"
}
const sentence = `${name}님의 이번 총점은 ${total}점, 평균은 ${avg}점으로 ${result}입니다`
console.log(sentence)