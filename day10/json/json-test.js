const file = require('fs')

// JSON 파일 읽어오기

// file.readFile("./user.json","utf-8", (error, data) => {
//   // JSON -> JS
  
//   const users = JSON.parse(data)
//   console.log(users)
// })

// file이라는 요소가 값
const usersJSON = file.readFileSync("./user.json",'utf-8')
const users = JSON.parse(usersJSON)
// console.log(users)

// users 데이터에서 이름만 출력하기
// users.forEach(user => {
//   console.log(user.name)
// })

// JSON 파일 생성
const user = {
  name : "홍길동",
  age : 20,
  phone : "010-1234-5678",
  address: "서울시 강남구",
  email : "test123@gmail.com"
}

const userJSON = JSON.stringify(user)

// writeFile(파일경로, 데이터, 인코딩, 콜백함수)
file.writeFile('./user2.json',userJSON,'utf-8', (err) => {
  if(err) {
    console.log(err)
  }else {
    console.log("파일 생성 완료")
  }
  
})
