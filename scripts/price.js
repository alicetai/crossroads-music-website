function totalSum(numbers) {
    var total = 0;
    for (var i=0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

function applyCode() {
    // Calculate discounted price

    // Display confirmation
    let confirmation = document.getElementById('discount-confirmation');
    confirmation.style.display = "block";

    // Remove the alert after 3 seconds
    setTimeout(() => {
        confirmation.style.display = 'none';
    }, 3000);
}
