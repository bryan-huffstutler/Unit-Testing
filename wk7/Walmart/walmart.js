class Checkout {
  constructor () {
    this.items = []
    this.discount = 0
  }

  addItem (name) {
    this.items.push({name: name})
    return this.items[0]
  }

  addPrice (name, price) {
    let errMsg = 'Must enter a price!'
    if(price === null){
      throw new Error(errMsg)
    }
    //DOES NOT WORK WITH A MAP FUNCTION
    // this.items.map((item) => {
    //   if(item.name == name){
    //     item.price = price;
    //   }
    //   return this.items
    // })
    for(var i = 0; i < this.items.length; i++) {
      if(this.items[i].name == name) {
        this.items[i].price = price
        return this.items;
      }
    }
  }

  addTotal () {
    let total = 0
    this.items.map((item) => {
      total += item.price
    })
    return total
  }

  addMultAndTotal (name1, name2, price1, price2) {
    this.addItem(name1)
    this.addItem(name2)
    this.addPrice(name1, price1)
    this.addPrice(name2, price2)
    return this.addTotal()
  }

  addDiscountRule(discount) {
    return this.discount = discount
  }

  applyDiscount() {
    for(var i = 0; i < this.items.length; i ++) {
      this.items[i].price -= this.discount 
    }
    return this.items[0].price
  }
}

module.exports = Checkout