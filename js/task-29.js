function getShippingCost(country) {
    let message
    switch (country) {
      case 'Китай': message = `Доставка в ${country} будет стоить 100 кредитов`; break
      case 'Чили': message = `Доставка в ${country} будет стоить 250 кредитов`; break
      case 'Австралия': message = `Доставка в ${country} будет стоить 170 кредитов`; break
      case 'Ямайка': message = `Доставка в ${country} будет стоить 120 кредитов`; break
      default: message = 'Извините, в вашу страну доставки нет'
    }
    return message
}

console.log(getShippingCost('Австралия'))
console.log(getShippingCost('Германия'))
console.log(getShippingCost('Китай'))
console.log(getShippingCost('Чили'))
console.log(getShippingCost('Ямайка'))
console.log(getShippingCost('Швеция'))