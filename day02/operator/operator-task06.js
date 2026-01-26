// 1번 문제 
// 배송비 구하기
// 1. 기본 배송비는 3,000원
// 2. 상품 금액이 50,000원 이상이면 배송비 무료 
// 3. 회원이면 배송비 20% 할인 적용
// 4. 최종 배송비를 계산하여 출력한다

let deliverPay = 3000

const membership = "member"
const pay = membership ==="member" ? deliverPay*0.8 : deliverPay
let price = 45000



const item = price>=50000 ? price : price+pay

console.log(item)




// 2번 문제 (형변환 사용)
// 사용자의 거스름돈의 최소 동전 개수 구하기
// 동전의 종류 500, 100, 10
// 4790원
let coinStart = 4790

let coin500 = 500
let coin100 = 100
let coin10 = 10

let count500 = parseInt(coinStart / coin500)
coin = coinStart -= (count500*coin500)

let count100 = parseInt(coin/coin100)
coin -=(count100*coin100)

let count10 = parseInt(coin/coin10)
coin -=(count10*coin10)

const result = `동전 500원에 갯수는 ${count500}개,\n동전 100원에 갯수는 ${count100}개,\n동전 10원에 갯수는 ${count10}개이다.`

console.log(result)

