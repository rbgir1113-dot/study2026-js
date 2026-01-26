//쇼핑몰이있다.
//상품이 있다.
//상품은 이름,가격을 가지고있다.
//쇼핑몰은 상품 등록, 상품 검색, 가격수정기능을 가지고 있다.
//쇼핑몰(검색(includes), 가격수정, 상품 등록)
//상품(이름, 가격)

function shop(){
  this.goods = null;

  this.registerGood = (good) => {
    this.goods[good.goodName] = good;
  }

  this.search = (includesString) => {
    for(let good of goods)
    {
      if(good.goodName.includes(includesString))
        console.log(`상품 명 ${good.goodName}, 가격 ${good.price}`);
    }
    //for의 of사용하여 상품 정보 출력 (상품명, 가격) => includeString값을 포함한 상품만 출력
  }

  this.alter = (goodsName, price) => {
    //goodsName과 정확한 이름을 가진 상품을 price가격으로 수정
    for(let good of goods)
    {
      if(good.goodName === goodsName)
        good.price = price;
    }
  }
}

function good(goodName, price){
  this.goodName = goodName;
  this.price = price;
}