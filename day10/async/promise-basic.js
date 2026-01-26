const promise = new Promise((resolve, reject) => {
  check = true
  if(check) {
    resolve("성공")
  }else{
    reject("실패!")
  }
})

console.log(promise)
// .then() : 성공한 데이터(resovle)를 매개변수로 받는 메서드
// .catch() : 살패한 데이터(reject)를 매개변수로 받는 메서드

let data = ""
promise
  .then((result) => {
    console.log("then 메서드 실행", result)
  })
  .catch((err) => {
    console.log("catch 메서드 실행", err)
  })

  console.log("data 결과" , data)