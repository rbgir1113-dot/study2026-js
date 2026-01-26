// 배열(array)의 선언
const array1 = []
const array2 = new Array() // 프로토타입으로 생성

// 칸 수를 알고 있을 때
const array3 = new Array(10) // 프로토타입으로 생성

// 값을 알고 있을 때
const array4 = Array.of("10",20,30)

// ====================================================
// length : 배열의 길이를 확인하는 프로퍼티
const arr1 = [10,20,30,40]
// console.log(arr1.length)
// console.log(arr1[arr1.length - 1])

// string의 메서드
// .split() : **기준이 되는 문자를 전달하면, 문자를 기준으로 잘라 [새로운 배열]로 리턴
const phone = "010-9595-1234"
const phoneArr = phone.split("-")
// console.log(phone.split("-"))

// .join()
// console.log(phoneArr)
// console.log(phoneArr.join())
// console.log(phoneArr.join(""))
// console.log(phoneArr.join("*"))

// 전화번호 파싱
// "010-9595-1234" -> "010-****-1234"
// const temp = phoneArr[1]
// phoneArr[1] = "****"

// console.log(phoneArr.join("-"))

// "010-9595-1234" -> "95951234"

// const phoneArr1 = phone.split("-")

// const phoneA = phoneArr1[phoneArr1.length - 2]
// const phoneB = phoneArr1[phoneArr1.length - 1]
// console.log(phoneA + phoneB)

// phoneArr1[phoneArr1.length - 3] = "";
// console.log(phoneArr1.join(""));



phoneArr[0] = ""

// console.log(phoneArr.join(""))


// string의 메서드
// .replace(찾을 값, 대체할 값) : 
// console.log("홍길동".replace("홍","김"))
// console.log("홍홍홍홍길동".replaceAll("홍","김"))

// let name = "홍길동"
// name[0] = "김" // 원시타입은 불변성의 법칙으로 성이 변경되진 않는다
// console.log(name)

// .push()
// 기존의 배열에 값을 추가하는 메서드
const arr2 = ["김길동","홍길동","장길동"]
let newLength = arr2.push("박길동")

// console.log(arr2)
// console.log(newLength)

// .concat()
// **두 개 또는 더 많은 배열을 연결하여 [새로운 배열]로 반환
const arr3 = [30,40]
const arr4 = [50,60,70,80]

const arr5 = arr3.concat([10],[10],[10],[10], 10,30)
// console.log (arr5)

// .pop()
// 마지막 요소를 제거
const arr6 = [1,2,3,4,5,6]
const last = arr6.pop()

// console.log(last)
// console.log(arr6)

// 실습
const arrTask1 = [10,20,30,40,50,60,70,80]
// arrTask1를 이용하여 987654321

// const arrTaskArr = arrTask1.concat(90)

// let result = ""
// for(let i in arrTaskArr){
//   result += String(arrTaskArr[arrTaskArr.length -1 - i]/10)

// }
// console.log(result)

// .unshift()
// 배열의 맨 앞에 요소를 추가하는 메서드

const arr7 = [50,60,70,80,90]
let newLength2 = arr7.unshift(100)
// console.log(arr7)
// console.log(newLength2)

// .shift()
// 배열의 맨 앞에 요소를 삭제하는 메서드
const removedE1 = arr7.shift()
// console.log(arr7)
// console.log(removedE1)

// .slice(startIndex, endIndex)
// ** start부터 end 직전까지 복사해서 [새로운 배열]로 반환한다.

const arr8 = Array.of(10,20,30,40,50,60,70)
// console.log(arr8.slice(2))
// end의 인덱스를 포함하지 않는다.
// ex) 5 -> 4까지의 인덱스 번호를 가져온다
// console.log(arr8.slice(2,4))
// console.log(arr8)
// 마지막 2개부터 끝까지
// console.log(arr8.slice(-2))


// .splice(startIndex, deleteCount, ...insertValue) : 원본 배열을 수정하고, 자른 값을 돌려주는 메서드
const arr9 = [10,20,30,40,50,60]
const arr10 = arr9.splice(1,2)
console.log(arr9)
console.log(arr10)

// 수정으로 사용
// arr9.splice(3,1,400,500,[10],[20])
// console.log(arr9)

// console.log(arr9[6][0])
// arr9.splice(3,1,400)
// console.log(arr9)

// .sort()
// 배열의 값을 정렬해주는 메서드
// const arr10 = [100,150,15,250,600,700,80,25]
// 오름차순
// arr10.sort((a, b) => a-b)
arr10.sort((a, b) => {return a-b})
// 내림차순
// arr10.sort((a, b) => b-a)
// console.log(arr10)

// .reverse()
// 배열의 값을 뒤집어주는 메서드
// console.log(arr10.reverse())
// console.log(arr10)

// .includes(value)
// 문자열, 배열의 메서드
const arr11 = [10,20,30,10,20,30]
console.log(arr11.includes(10))

// .indexOf()
// 문자열, 배열의 메서드
console.log(arr11.indexOf(20))
console.log(arr11.lastIndexOf(20))

