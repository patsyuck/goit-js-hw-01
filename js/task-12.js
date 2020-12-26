function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    let message = `Вы заказали дроидов на сумму ${pricePerDroid * orderedQuantity + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`
    return message
}

console.log(makeOrderMessage(2, 100, 50))