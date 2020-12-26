function checkForName(fullName, name) {
    const result = fullName.includes(name)
    return result;
}

console.log(checkForName('Вадим Некрасов', 'Вадим'))
console.log(checkForName('Вадим Некрасов', 'вадим'))