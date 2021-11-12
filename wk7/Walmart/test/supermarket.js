const checkout = require('../walmart')
const assert = require('chai').assert

describe('Checkout', () => {
  it('creates Checkout instance', () => {
    let cart = new checkout()
    assert.isDefined(cart.items, '[]')
  })

  it('can add item', () => {
    let cart = new checkout()
    assert.deepEqual(cart.addItem('milk'), {name: 'milk'})
  })

  it('can add price', () => {
    let cart = new checkout()    
    cart.addItem('milk')
    assert.deepEqual(cart.addPrice('milk', 3), [{name: 'milk', price: 3}])
  })

  it('can total', () => {
    let cart = new checkout()
    cart.addItem('milk')
    cart.addItem('bread')
    cart.addPrice('milk', 3)
    cart.addPrice('bread', 2)
    assert.equal(cart.addTotal(),5)
  })

  it('add mult and total', () => {
    let cart = new checkout()
    assert.equal(cart.addMultAndTotal('a', 'b', 5, 5), 10)
  })

  it('can add discount rule', () => {
    let cart = new checkout()
    assert.equal(cart.addDiscountRule(10), 10)
  })

  it('can apply discount', () => {
    let cart = new checkout()
    cart.addItem('milk')
    cart.addPrice('milk', 5)
    cart.addDiscountRule(3)
    assert.equal(cart.applyDiscount(), 2)
  })
})