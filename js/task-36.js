function checkForSpam(message) {
    let result
    result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale') ? true : false
    return result
}

console.log(checkForSpam('Latest technology news'))
console.log(checkForSpam('Get best sale offers now!'))
console.log(checkForSpam('Amazing SalE, only tonight!'))