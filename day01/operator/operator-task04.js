// 시험 성적 문제 구하기
// 국어, 영어, 수학 점수를 받아서
// 총점과 평균을 구하고
// 평균이 90점 이상이라면 A등급,
// 80점 이상이라면 B등급,
// 70점 이상이라면 C등급,
// 70점 미만이라면 F등급

const koran = 80
const english = 90
const math = 60

const total = koran+english+math
const avg = total/3

const A = avg >= 90
const B = avg >= 80
const C = avg >= 70

const Agrade = "A등급"
const Bgrade = "B등급"
const Cgrade = "C등급"
const Fgrade = "F등급"

const grade = A ? Agrade
  : B ? Bgrade
    : C ? Cgrade
      : Fgrade


console.log(grade);
