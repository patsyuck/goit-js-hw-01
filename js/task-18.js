function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message
    const totalPrice = pricePerDroid * orderedQuantity
    if (totalPrice > customerCredits) {
      message = 'Недостаточно средств на счету!'
    } else {
      message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits - totalPrice} кредитов`
    }
    return message
}

console.log(makeTransaction(1000, 3, 15000))
console.log(makeTransaction(5000, 10, 8000))