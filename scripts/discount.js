import {showPriceRow} from './checkout.js';
import {dollarUS} from './price.js';

const DISCOUNT = 0.2;

// Event listener for discount code submission
var discountSubmit = document.getElementById("submit-discount-code");
discountSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    submitCode(document.getElementById("discount-code").value);
})

function submitCode(code) {
    var error = document.getElementById("discount-code-error");

    if (!code || !validateCode(code)) {
        // Display the error text
        error.style.display = "block";
        document.getElementById("discount-code").removeAttribute("required")
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
        displayDiscount();
    }
}

function calcDiscount(original, discount) {
    return original * (1.0 - discount);
}

// Make the discount appear in order summary section
function displayDiscount() {
    showPriceRow(document.getElementById("discount-row"));
    var discountText = document.getElementById("discount")
    discountText.innerHTML = dollarUS.format(calcDiscount(100, DISCOUNT));
}

// function applyDiscount(discount) {
//     var original = parseFloat(document.getElementById("cart-subtotal-text").innerHTML);
//     var discounted = original * (1.0 - discount);

//     updateCartSubtotal(discounted);
// }

export {displayDiscount};
