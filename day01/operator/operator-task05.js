// * 모든 값을 변수로 선언

// 1번 문제
// 1. 키, 나이를 입력
// 2. 놀이공원에서 어린이 놀이기구 탑승 여부 확인하기
// 3. 130cm 이하만 탑승 가능 그리고 성인은 탑승 불가
// 4. 나머지는 탑승 가능
// 사람의 정보에 따라 탑승 여부를 출력하기
const name = "이규혁"
let height = 170;
let age = 25;
const ok = "탑승 가능"
const notOk = "탑승 불가" 
const agree = height <=130 && age <20 ? ok : notOk

const result1 = `${name}님은 ${height}cm, ${age}살이므로 ${agree}합니다`
console.log(result1)

// 2번 문제
// 1. 주차 시간, 요일 여부 입력(월, 화, 수, 목, 금, 토, 일)
// 2. 기본 주차 요금은 시간당 1,000원
// 3. 주말이면 총 요금의 20% 추가 요금이 붙는다
// 4. 이용 시간이 5시간 초과이면 총 요금에서 10% 할인
// 5. 최종 요금을 계산
// 최종 주차 요금 출력하기


let hour = 8

let day = "일"
const isWeekend = day ==="토" || day === "일"
const pay = 1000
let total = hours*pay
// const monBill = mon < 5 ? mon*1000 : (mon*1000)*0.9
// const thuBill = thu < 5 ? thu*1000 : (thu*1000)*0.9
// const wedBill = wed < 5 ? wed*1000 : (wed*1000)*0.9
// const thrBill = thr < 5 ? thr*1000 : (thr*1000)*0.9
// const friBill = fri < 5 ? fri*1000 : (fri*1000)*0.9
// const satBill = sat < 5 ? sat*1000*1.2 : (sat*1000*1.2)*0.9
// const sunBill = sun < 5 ? sun*1000*1.2 : (sun*1000*1.2)*0.9

const mon = hour < 5 ? hour*1000 : (hour*1000)*0.9 
const thu = hour < 5 ? hour*1000 : (hour*1000)*0.9 
const wed = hour < 5 ? hour*1000 : (hour*1000)*0.9 
const thr = hour < 5 ? hour*1000 : (hour*1000)*0.9 
const fri = hour < 5 ? hour*1000 : (hour*1000)*0.9 
const sat = hour < 5 ? hour*1000*1.2 : (hour*1000*1.2)*0.9 
const sun = hour < 5 ? hour*1000*1.2 : (hour*1000*1.2)*0.9 

const bill = day === "월" ? mon 
  : day === "화" ? thu
  : day === "수" ? wed
  : day === "목" ? thr
  : day === "금" ? fri
  : day === "토" ? sat
  : sun

const result2 = `${day}요일 ${hour}시간 주차하셨으므로 ${bill}원입니다`
console.log(result2)  
// const result2 = `월요일 요금 :${monBill}원 \n화요일 요금: ${thuBill}원\n수요일 요금: ${wedBill}원\n목요일 요금: ${thrBill}원 \n금요일 요금: ${friBill}원 \n토요일 요금: ${satBill}원\n일요일 요금: ${sunBill}원\n일주일 총 요금: ${weekBill}원`
// console.log(result2)


