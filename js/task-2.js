// task 2: shippings to,

function getShippingMessage(country, price, deliveryFee) {
    let totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits.`;
}

console.log(getShippingMessage("Australia", 120, 50));// outputs: Shipping to Australia will cost 170 credits.
console.log(getShippingMessage("Germany", 80, 20)); //
console.log(getShippingMessage("Sweden", 100, 20)); //