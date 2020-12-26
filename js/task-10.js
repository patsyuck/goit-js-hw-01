function makeMessage(name, price) {
     const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`
    return message
}

console.log(makeMessage('Радар', 6150))