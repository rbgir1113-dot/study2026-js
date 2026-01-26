// 디폴트 파라미터(default parameter)

function add(num1,num2 = 0,num3 = 0) {
  return num1 + num2 + num3
}

// 함수의 응용
add(20,30,40) +20
console.log(add(20))
console.log(20)
console.log(add(20, 30, add(40)))

// 익명함수
// function(){}

// 즉시 실행함수
// ()()

// 화살표 함수(ES6)
// this 바인딩에서 차이가 있다
// () => {}
// const -> 화살표 함수
const printName = (name) => {
  console.log(name)
}

// ========================
function printName2(name){
  console.log(name)
}
