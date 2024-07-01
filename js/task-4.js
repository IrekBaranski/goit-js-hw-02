// task 4. Shipping cost to countries

function getShippingCost(country) {
    let price;

    switch (country) {
        case "China":
            price = 100;
            break;
        case "Chile":
            price = 250;
            break;
        case "Australia":
            price = 170;
            break;
        case "Jamaica":
            price = 120;
            break;
        default:
            return "Sorry there is no delivery to your country";
    }
    
    return `Shipping to ${country} will cost ${price} credits`;
}

console.log(getShippingCost("Australia")); // output: Shipping to Australia will cost 17 credits
console.log(getShippingCost("Germany")); // output: Sorry there is no delivery to your country
console.log(getShippingCost("China")); // Output: Shipping to China will cost 100 credits
console.log(getShippingCost("Chile")); // Output: Shipping to Chile will cost 250 credits
console.log(getShippingCost("Jamaica")); // Output: Shipping to Jamaica will cost 120 credits
console.log(getShippingCost("Sweden")); // Output: SSorry there is no delivery to your country
