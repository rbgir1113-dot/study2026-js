// 매개변수의 타입, 리턴 타입
// 1. 정수를 전달하면 5의 배수의 유무를 확인하고 출력
const multipleBy5 = (number, callback) => (
  callback(!(number % 5) ? "5의 배수입니다" : "5의 배수가 아닙니다")
)

multipleBy5(10, console.log)

// 2. 2개의 정수를 전달해서 큰 값과 작은 값을 반환해주는 함수

const compare = (num1, num2, callback) => {
  // 방어코드
  // early return
  if(typeof(num1) !== "number" || typeof(num2) !== "number") {
    return callback("잘못 입력하셨습니다")
  }
  if(num1 === num2) {
    return callback("두 수가 같습니다.")
  }else if(num1 > num2){
    return callback(`큰 값 : ${num1}, 작은 값 : ${num2}`)
  }else {
    return callback(`큰 값 : ${num2}, 작은 값 : ${num1}`)
  }
}

compare(10,20,console.log)