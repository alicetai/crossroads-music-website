function totalSum(numbers) {
    var total = 0;
    for (var i=0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

// Format price in USD
let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});
