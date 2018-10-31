class Restaurant {
  constructor(props) {
    this.comboDiscount = props.discount
    this.menu = props.menu
    this.name = props.name
    this.address = props.address
    this.hourOpen = props.hourOpen
    this.hourClosed = props.hourClosed
  }

  get comboPrice() {
    let cost = 0
    for (const item in this.menu) {
      cost += this.menu[item]
    }
    return `${(cost * this.comboDiscount).toFixed(2)}`
  }

}
const hotDogStand = {
  discount: .75,
  menu: {
    hotDog: 3.00,
    soda: 1.50,
    chips: .75
  }

}
const hotDogs = new Restaurant(hotDogStand)
console.log(hotDogs.comboPrice)