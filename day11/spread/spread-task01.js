// 1~10까지
// 20~30까지
// 50~60까지 
// 각각 들어가있는 배열을 만들고,
// 3개의 배열을 스프레드 문법으로 합치기

const arr10 = new Array(10).fill(0).map((_,i) => i+1)
// console.log(arr10)

const arr20 = new Array(11).fill(0).map((_,i) => i+20)
// console.log(arr20)

const arr60 = new Array(11).fill(0).map((_,i) => i+50)
// console.log(arr60)

const arr4 =[...arr10, ...arr20, ...arr60]
console.log(arr4)