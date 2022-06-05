const NUM_DIGITS = 9;
const DISCOUNT = 0.2;

const count = n => String((Math.abs(n))).length;

function submitCode() {
    var code = document.getElementById('discount-code').value;
    var error = document.getElementById("discount-code-error");

    if (!code || !validateCode(code)) {
        // Display the error text
        error.style.display = "block";
    }
    else {
        // Get rid of the error text if it's still there
        error.style.display = "none";

        // Display confirmation
        let confirmation = document.getElementById('discount-confirmation');
        confirmation.style.display = "block";

        // Remove the alert after 3 seconds
        setTimeout(() => {
            confirmation.style.display = 'none';
        }, 3000);

        // applyDiscount(DISCOUNT);
        displayDiscount(DISCOUNT);
    }
}


function calcDiscount(original, discount) {
    return original * (1.0 - discount);
}

// Check that the coupon code is valid (9 digits)
function validateCode(code) {
    return count(code) === NUM_DIGITS;
}

// Make the discount appear in order summary section
function displayDiscount(discount) {
    showPriceRow(document.getElementById("discount-row"));
    var discountText = document.getElementById("discount")
    discountText.innerHTML = dollarUS.format(calcDiscount(100, discount));
}

// function applyDiscount(discount) {
//     var original = parseFloat(document.getElementById("cart-subtotal-text").innerHTML);
//     var discounted = original * (1.0 - discount);

//     updateCartSubtotal(discounted);
// }