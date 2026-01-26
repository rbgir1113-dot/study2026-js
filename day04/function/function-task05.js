// 사용자가 몇 개나 데이터를 입력할 지 모를 때
// number 타입과 string 타입을 분리해서 각각의 입력 갯수 구하기
// 단, 문자열에 정수가 포함되어있다면 number타입으로 취급한다.
// ex) myFun("a", "10", "a10", 20, "1")
// 결과: string: 1개, number 4개


// 문자열의 메서드
// 글자가 포함되어있는지의 여부를 true 또는 false 리턴
// "".includes("해당글자")
const user = (text) => {
  let typeNum = 0;
  let typeText = 0;
  for(let i = 0; i < text.length; i++){
    if(typeof(text[i]) === "number"){
      typeNum += 1
    }else if(typeof(text[i]) === ""+number) {
      typeNum += 1
    }else{
      typeText += 1
    }
  }
  return typeNum && typeText;
  
}
let myFun = user("a" , "10" , "a10" , 20 , "1")

console.log(myFun)