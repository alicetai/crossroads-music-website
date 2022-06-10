import { addShippingPrice, removeShippingPrice } from "./price.js";

// Event listeners for billing address input

var useShippingAddress = document.getElementById("use-shipping-address").parentElement;
useShippingAddress.addEventListener("click", function() {
    document.getElementById("billing-address").style.display = "none";
});

var useBillingAddress = document.getElementById("use-billing-address").parentElement;
useBillingAddress.addEventListener("click", function() {
    document.getElementById("billing-address").style.display = "block";
});


// Event listeners for express shipping option

var standardShipping = document.getElementById("standard-shipping").parentElement;
standardShipping.addEventListener("click", function() {
    removeShippingPrice();
});

var expressShipping = document.getElementById("express-shipping").parentElement;
expressShipping.addEventListener("click", function() {
    
    addShippingPrice();
});


// Change the appearance of written input Values when focused

let inputElements = document.getElementsByClassName("text-input bottom-border-light");

for (var element of inputElements) {

    let inputValue = element.getElementsByTagName("input")[0];

    if (inputValue) {
        inputValue.addEventListener("focusin", function() {
            // Remove light border and replace with tan
            inputValue.parentElement.classList.replace("bottom-border-light", "bottom-border-tan");
        });
        inputValue.addEventListener("focusout", function() {
            // Remove tan border and replace with light
            inputValue.parentElement.classList.replace("bottom-border-tan", "bottom-border-light");
        });
    }
};


// Ensure that when the whole checkbox area is clicked, the input registers

let checkboxElement = document.getElementsByClassName("checkbox-option");

for (var element of checkboxElement) {

    // If the checkbox div is clicked, toggle the checked value
    element.addEventListener("click", function() {
        // Ensure other options are cleared
        selectOne(this, this.parentElement.getElementsByClassName("checkbox-option"));
    });
};


// Ensure single select for a list of checkbox options
function selectOne(selected, list) {
    let checkBoxValue = selected.getElementsByTagName("input")[0];

    // Unselect everything except for the selected element
    for (let i=0; i < list.length; i++) {
        list[i].getElementsByTagName("input")[0].checked = false;
    }
    checkBoxValue.checked = true;
    // No ability to uncheck - everything in the form is required
}


document.getElementById("continue-to-shipping-btn").addEventListener("click", submitContactDetails);

function submitContactDetails() {
    var email = document.getElementById("contact-email").value;
    var phone = document.getElementById("contact-phone").value;

    if (validateContactDetails(email, phone)) {
        // Save contact details

        // Go to the next step
        toggleStep(currentStep + 1);
    }
}


document.getElementById("continue-to-payment-btn").addEventListener("click", submitShippingDetails);

function submitShippingDetails() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var country = document.getElementById("country").value;
    var street = document.getElementById("street-address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var postcode = document.getElementById("postcode").value;
    var phone = document.getElementById("shipping-phone").value;


    if (validateShippingDetails(firstName, lastName, country, street, city, state,
        postcode, phone)) {
        
        // Go to the next step
        toggleStep(currentStep++);
    }
}


document.getElementById("confirm-purchase-btn").addEventListener("click", submitCardDetails);

function submitCardDetails() {
    var cardName = document.getElementById("card-name").value;
    var cardNumber = document.getElementById("card-number").value;
    var expiryDate = document.getElementById("card-expiration-date").value;
    var securityCode = document.getElementById("card-cvv").value;

    if (validateCardDetails(cardNumber, cardName, expiryDate, securityCode)) {
        toggleStep(currentStep++);
    }
}

// function saveDetails() {
//     orderDetails['contactEmail'] = email;
// }

export {submitContactDetails, submitShippingDetails, submitCardDetails}
