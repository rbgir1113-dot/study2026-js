// 동물
// 강아지, 고양이, 고라니, 호랑이


// 강아지라면 "멍멍"을 출력
// 고양이라면 "야옹"을 출력
// 고라니라면 "빼앵"을 출력
// 호랑이라면 "어흥"을 출력

const animal = "고라니"
const blink = ""

const dog = "강아지"
const dogHowl = "멍멍"

const cat = "고양이"
const catHowl = "야옹"

const gorani = "고라니"
const goraniHowl = "커어어어어억"

const tiger = "호랑이"
const tigerHowl = "떡 하나주면 안잡아먹지"
const isDog = animal === dog 
const isCat =animal === cat 
const isGorani = animal === gorani 
const isTiger = animal === tiger

const result = isDog ? dogHowl 
  : isCat ? catHowl
    : isGorani ? goraniHowl
      : isTiger ? tigerHowl
        : blink



console.log(result)