// 문자열 메서드
// 문자열에서 문자를 찾아서 포함되어 있다면 true, 아니라면 false를 반환
// "문자열".includes("문자")

// 유저1
// 이름: "홍길동"
// 나이: 20
// 지역: "경기도 하남"
// 전화번호: "010-7856-1547"

// 이름: "장보고"
// 나이: 30
// 지역: "경기도 안산"
// 전화번호: "010-2467-8663"

// 이름: "이순신"
// 나이: 45
// 지역: "서울시 종로"
// 전화번호: "010-1762-4872"

// 이름: "김철수"
// 나이: 25
// 지역: "서울시 강남"
// 전화번호: "010-7521-4874"

// 이름: "김영희"
// 나이: 35
// 지역: "경기도 오산"
// 전화번호: "010-8784-1875"
// 1. users 프로토타입
// ex)
// function Users(...user){}
// ex)
// users.user1 = user1
// users.user2 = user2

// 2. users 배열
// const users = [user1, user2, user3]

// 3. 함수로 처리
// const myFunc = (...users) => {}

// 1. 경기도에 거주하는 사람의 이름을 출력하기
// 2. 30대 유저만 출력하기
// 3. 모든 유저의 정보 출력하기
// 출력 결과
// ex) 이름은 김영희, 나이는 35살, 만나이 34살, 사는 곳 경기도 오산
// ...
// "문자열".includes("문자")
// ex) 이름은 김영희, 나이는 35살, 만나이 34살, 사는 곳 경기도 오산

function User(name, age, city, phoneNumber) {
  this.name = name
  this.age = age
  this.city = city
  this.phoneNumber = phoneNumber
}

function Users() {}

const hong = new User("홍길동", 20 , "경기도 하남", "010-7856-1547")
const jang = new User("장보고", 30 , "경기도 안산", "010-2467-8663")
const lee = new User("이순신", 45 , "서울시 종로", "010-1762-4872")
const kimCheol = new User("김철수", 25 , "서울시 강남", "010-7521-4874")
const kimYoung = new User("김영희", 35 , "경기도 오산", "010-8784-1875")

const users = new Users()

users.hong = hong
users.jang = jang
users.lee = lee
users.kimCheol = kimCheol
users.kimYoung = kimYoung

for(let data in users){
  if(users[data].city.includes("경기도")) {
    console.log(users[data].name)
  }
  
}

for(let data in users){
  if(users[data].age >= 30 && users[data].age < 40) {
    console.log(users[data])
  }
  
}

for(let data in users){
    console.log(`이름은 ${users[data].name}, 나이는 ${users[data].age}, 만나이 ${users[data].age - 1}, 사는 곳 ${users[data].city}`)
  }
  