// 겨울 간식 테스트
// 붕어빵 먹는 부위
// "머리", "몸통", "꼬리"
// 머리 : 한입에 먹기 좋아서
// 몸통 : 팥부터 먹고 싶어서
// 꼬리 : 바삭바삭함이 좋아서

// 이유 출력하기

let eat = "머리"

if(eat === "머리"){
  reason = "한입에 먹기 좋아서"
}else if(eat === "몸통") {
  reason = "팥부터 먹고 싶어서"
}else if(eat === "꼬리") {
  reason = "바삭바삭함이 좋아서"
}else{
  reason = "다른 간식을 더 좋아서"
}

const result = `나는 ${eat}부터 먹는걸 좋아해 그 이유는 ${reason}야`
console.log(result)