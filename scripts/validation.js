const count = n => String((Math.abs(n))).length;

// Input validation functions

// Check that the coupon code is valid and 9 digits
function validateCode(code) {
    var regex = /[^A-Za-z0-9]*$/; // Letters and numbers only
    return (regex.test(code)) && (count(code) === 9);
}

function validateContactDetails(email, phone) {
    // Check if null
    // if (!email || !phone) {
    //     return false;
    // }
    if (!validateEmail(email)) {
        showError(document.getElementById("contact-email-error"))
        return false;
    }
    if (!validatePhone(phone)) {
        clearError(document.getElementById("contact-email-error"))
        showError(document.getElementById("contact-phone-error"))
        return false;
    }
    // clearError(document.getElementById("contact-phone-error"))
    return true;
}

function validateEmail(email) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

function validatePhone(phone) {
    var regex = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/; // Regex for North American phone numbers
    return regex.test(phone);
}

function showError(error) {
    error.style.display = "block";
}

function clearError(error) {
    error.style.display = "none";
}

function clearErrors() {
    let errors = document.getElementsByClassName("error-text");
    console.log(errors.length);
    if (!errors) {
        for (var error in errors) {
            error.style.display = "none";
        };
    }
}

function validateShippingDetails(firstName, lastName, country, street, city, state,
    postcode, phone) {
    if (!validateName(firstName)) {
        showError(document.getElementById("first-name-error"))
        return false;
    }
    if (!validateName(lastName)) {
        showError(document.getElementById("last-name-error"))
        return false;
    }
    if (!validateName(country)) {
        showError(document.getElementById("country-error"))
        return false;
    }
    if (!validateName(city)) {
        showError(document.getElementById("city-error"))
        return false;
    }
    if (!validateName(state)) {
        showError(document.getElementById("state-error"))
        return false;
    }
    if (!validatePostcode(postcode)) {
        showError(document.getElementById("postcode-error"))
        return false;
    }
    if (!validatePhone(phone)) {
        showError(document.getElementById("shipping-phone-error"))
        return false;
    }
    return true;
}

function validateName(name) {
    var regex = /^[A-Za-z]+$/ // Alphebet letters only (lowercase and uppercase)
    return regex.test(name);
}

function validatePostcode(postcode) {
    return (postcode > 0) && (count(postcode) === 5)
}
