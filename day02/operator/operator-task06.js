// 1번 문제 
// 배송비 구하기
// 1. 기본 배송비는 3,000원
const defaultDeliveryFee = 3000
const productPrice = 45000
let deliveryFee = 0
let totalFee = 0
let totalPrice = 0
const isMember = true
const memberMessage = isMember ? "회원" : "비회원"
let result = ""
// 2. 상품 금액이 50,000원 이상이면 배송비 무료 
deliveryFee = productPrice >= 50000 ? 0 : defaultDeliveryFee

// 3. 회원이면 배송비 20% 할인 적용
isMember && (deliveryFee *= 0.8)
totalFee = productPrice + deliveryFee

// 4. 최종 배송비를 계산하여 출력한다
totalPrice = productPrice + deliveryFee
result = `홍길동님의 구매 가격은 ${productPrice}원 이고,\n${memberMessage}이므로 배송비는 ${deliveryFee}원입니다.\n총 가격은: ${totalFee}원 입니다.`
console.log(result)
