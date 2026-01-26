// 어떤 값을 받으면 그 값을 출력해주는 함수

function print(data){
  console.log(data)
}

// 사용

print("홍길동")

// 성과 이름을 받아서 출력해주는 함수 선언 및 사용

function printFullName(lastName,firstName){
  console.log(lastName+firstName)  
}

printFullName("이", "규혁")

// 이름 + "님"을 붙여서 반환해주는 함수

function addNim(name){
  return name + "님"
}

