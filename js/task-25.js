function checkStorage(available, ordered) {
    let message
    message = ordered > available ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер'
    return message
}

console.log(checkStorage(100, 50))
console.log(checkStorage(100, 130))