// 문자열의 메서드
// "" .indexof()

// 해당 문자의 index 번호를 리턴하는 메서드
// console.log("abcdefg".indexOf("c"))

// "".chartAt()
// 해당 인덱스의 값을 리턴하는 문자열의 메서드
// ""[]
// console.log("abcd".charAt(2))

// .length
// 문자열 또는 배열의 길이

// * 값은 모두 변수에 담을 것
// 브론즈
// 1. 3개의 정수를 받아서 3개를 모두 빼주는 함수
const subtract = () => {}
// 2. 어떤 값을 받으면 값을 출력해주는 함수
// 3. 이름과 나이를 전달하면 이름, 나이, 만나이를 출력해주는 함수

// 실버
// 1. 홍길동을 n번 출력해주는 함수
// 2. 어떤 값을 전달하면 그 값까지 모두 더해주는 함수

// 골드
// 1. 1~n까지 중 홀수만 출력해주는 함수
// 2. 1~n까지 중 짝수의 합을 더하고 
// 만약 n값이 100이 넘는다면 100까지만 더한 값을 반환해주는 함수
// 3. 문자열과 찾을 문자를 입력 받고
// 문자열에서 문자의 개수를 반환해주는 함수

// 플레티넘
// 1. 값을 3개 입력받아서 제일 큰 값과 작은 값을 알려주는 함수 
const compare = (num1,num2,num3) => {
  if(num1 > num2 && num1 > num3){
    if(num2 > num3) {
    return `${num1}이 제일 큼, ${num3} 제일 작음`
    }else if(num3 > num2) {
      return `${num1}이 제일 큼, ${num2} 제일 작음`
    }else {
      return `${num1}이 제일큼, ${num2},${num3}이 작음`
    }
  }
  if(num2 > num1 && num2 > num3){
    if(num1 > num3) {
    return `${num2}이 제일 큼, ${num3} 제일 작음`
    }else if(num3 > num1) {
      return `${num2}이 제일 큼, ${num1} 제일 작음`
    }else {
      return `${num2}이 제일큼, ${num1},${num3}이 작음`
    }
  }
  if(num3 > num2 && num3 > num1) {
    if(num1 > num2) {
    return `${num3}이 제일 큼, ${num2} 제일 작음`
    }else if(num2 > num1) {
      return `${num3}이 제일 큼, ${num1} 제일 작음`
    }else {
      return `${num3}이 제일큼, ${num1},${num2}이 작음`
    }
  }
}
console.log(compare(10,20,30))
// 2. 문자열을 입력하고, 문자열에서 지울 문자를 입력받아 지워주는 함수
// ex) myFuc("apple", a) 
// 결과: pple


// 다이아
// 1. 한글을 정수로 바꿔주는 함수 (일공이사 -> 1024)
const textInt = (str) => {
  let resultDia ="";
  for(let i =0; i < str.length; i++) {
    if(str[i] === "일"){resultDia +="1"}
    if(str[i] === "이"){resultDia +="2"}
    if(str[i] === "삼"){resultDia +="3"}
    if(str[i] === "사"){resultDia +="4"}
    if(str[i] === "오"){resultDia +="5"}
    if(str[i] === "육"){resultDia +="6"}
    if(str[i] === "칠"){resultDia +="7"}
    if(str[i] === "팔"){resultDia += "8"}
    if(str[i] === "구"){resultDia += "9"}
    if(str[i] === "공"){resultDia += "0"}
  }
  return resultDia
}
let resultDia = textInt("일공이사")
console.log(resultDia)


// 2. 정수를 한글로 바꿔주는 함수 (1024 -> 일공이사)

const intText = (num) => { 
  let stringNum = String(num)
  let resultDia2 = ""
  for(let i = 0; i < stringNum.length; i++) {
    if(stringNum[i] === "1"){resultDia2 +="일"}
    if(stringNum[i] === "2"){resultDia2 +="이"}
    if(stringNum[i] === "3"){resultDia2 +="삼"}
    if(stringNum[i] === "4"){resultDia2 +="사"}
    if(stringNum[i] === "5"){resultDia2 +="오"}
    if(stringNum[i] === "6"){resultDia2 +="육"}
    if(stringNum[i] === "7"){resultDia2 +="칠"}
    if(stringNum[i] === "8"){resultDia2 +="팔"}
    if(stringNum[i] === "9"){resultDia2 +="구"}
    if(stringNum[i] === "0"){resultDia2 +="공"}
  }
  return resultDia2
}
let resultDia2 = intText(1024)
console.log(resultDia2)


// 두번째 방식
const intText2 = num => {
  let stringNum = String(num)
  let newResultDia = "";
  for(i=0; i< stringNum.length; i++){
    switch(stringNum[i]){
      case "1":
        newResultDia += "일" 
        break
      case "2":
        newResultDia += "이" 
        break
      case "3":
        newResultDia += "삼" 
        break
      case "4":
        newResultDia += "사" 
        break
      case "5":
        newResultDia += "오" 
        break
      case "6":
        newResultDia += "육" 
        break
      case "7":
        newResultDia += "칠" 
        break
      case "8":
        newResultDia += "팔" 
        break
      case "9":
        newResultDia += "구" 
        break
      case "0":
        newResultDia += "공" 
        break
    }
  }
  return newResultDia
}
let newResultDia = intText2(1024)
console.log(newResultDia)
// 세번째 방식
