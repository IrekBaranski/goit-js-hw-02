//Task 1: Ordering droids

function makeTransaction(quantity, pricePerDroid) {
    let totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000)); // Outputs: "You ordered 5 droids worth $1500 credits!"
console.log(makeTransaction(3, 1000)); // Outputs: "You ordered 3 droids worth $3000 credits!"
console.log(makeTransaction(10, 500)); // Outputs: "You ordered 10 droids worth $5000 credits!"
