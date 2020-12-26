function formatMessage(message, maxLength) {
    let result
    if (message.length <= maxLength) {
      result = message
    } else {
      result = message.slice(0, maxLength) + '...'
    }
    return result
}

console.log(formatMessage('Curabitur ligula sapien', 16))
console.log(formatMessage('Curabitur ligula sapien', 23))