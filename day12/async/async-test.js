// 몇 초마다 실행
// setInterval(() => {},1000)
// 1000 === 1초
console.log("동기 1")
setInterval(() => {
  console.log("💩")
}, 1000)
console.log("동기 2")

// 몇 초 뒤에 실행
// 제거