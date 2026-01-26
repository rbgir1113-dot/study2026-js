// https://jsonplaceholder.typicode.com/todos
// 1. todos데이터를 요청 후 값으로 가져온 데이터를 제목: title로 변경 후 출력
// ex) 
// 제목: title1~
// 제목: title2~
// 제목: title3~
// const getTodos = async() => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos")
//   const datas = await response.json()
//   const titles = datas.map((todo) => todo.title)
//   return titles
// }
// getTodos()
//   .then((titles) => {
//     for(i = 0; i< titles.length; i++){
//       console.log(`제목 : ${titles[i]}`)
//     }
//   })

// https://jsonplaceholder.typicode.com/comments
// 2. comments데이터를 요청 후 값으로 가져온 데이터 중 email의 아이디만 변경 후 출력
// ex) Eliseo@gardner.biz -> Eliseo

const getComments = async() => {
  const response1 = await fetch("https://jsonplaceholder.typicode.com/comments")
  const comments = await response1.json()
  const emails = comments.map((comment) => comment.email)
  return emails
}
getComments()
  .then((emails) => {
    for(i = 0; i < emails.length; i++) {
      const mails = emails[i].indexOf("@")
      const commentId = emails[i].slice(0,mails)
      console.log(commentId)
    }
  })

// https://jsonplaceholder.typicode.com/comments
// 3.  comments데이터를 요청 후 값으로 가져온 데이터 중 name을 뒤집어서 가져온 후 출력
// const getComments = async() => {
//   const response2 = await fetch("https://jsonplaceholder.typicode.com/comments")
//   const comments = await response2.json()
//   const names = comments.map((comment) => comment.name)
//   return names
// }
// getComments()
//   .then((names) => {
//     for(i = 0; i < names.length; i++) {
//       const reversName = names[i].split("").reverse().join("")
//       console.log(reversName)
//     }
//   })