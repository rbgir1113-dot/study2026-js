// 다음과 같이 정보가 있을 때
// 각 학생들의 평균을 구하여
// 성적 1등과 성적 꼴등 출력하기
// + 꼴등에게 응원메세지도 출력

const students = [
   {name: "감대훈", math: 88, kor: 60, eng: 70},
   {name: "김세횐", math: 15, kor: 40, eng: 35},
   {name: "김유종", math: 84, kor: 80, eng: 40},
   {name: "김세중", math: 92, kor: 35, eng: 100},
   {name: "엄석태", math: 75, kor: 60, eng: 86},
   {name: "오규오", math: 100, kor: 80, eng: 80},
   {name: "노만균", math: 65, kor: 100, eng: 40},
   {name: "문윤섬", math: 76, kor: 75, eng: 58},
   {name: "신민철", math: 59, kor: 100, eng: 96},
]

for(let key of students.entries()){
   console.log(key)
   // let total = students[key].math+students[key].kor+students[key].eng
   // let avg = total/3
   console.log(key.math)
}
