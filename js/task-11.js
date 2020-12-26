function calculateTotalPrice(orderedQuantity, pricePerItem) {
    const totalPrice = pricePerItem * orderedQuantity
    return totalPrice
}

console.log(calculateTotalPrice(8, 60))