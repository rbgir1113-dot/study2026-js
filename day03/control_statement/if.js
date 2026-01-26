// if문
// if(조건문){조건식}
// 지각, 결석, 병결

// 삼항 : 조건식이 1개일때
// if ~ else : 조건식이 여러개 일 때

let attendance = "병결"

if(attendance === "지각"){
  console.log("지각생")
}

if(attendance === "지각"){
  console.log("지각")
}

// if ~ else 
// 조건식이 1개이면서, 비즈니스 로직을 작성할 때 사용
if(attendance === "지각"){
  console.log("지각 싫어요.")
} else{
  console.log("정상 출결")
}
// if ~ else if~else
// 다중 조건식일 때
if(attendance === "지각"){
  console.log("지각 싫어요.")
} else if(attendance ==="병결"){
  // attendace !== "지각" && attendace === "병결"
  console.log("아프지 마요")
} else if(attendance === "잠수"){
  // attendace !== "지각" && attendace !== "병결" && attendace === "잠수"
  console.log("연락은 소중히")
}else {
  // 위에 모든 조건식을 만족하지 않을 때
  console.log("결석자")
}

