var current = 0; // Current form-step is set to be the first form-step (0)
showStep(current); // Display the current form-step

function showStep(n) {
  // This function will display the specified form-step of the form...
    var steps = document.getElementsByClassName("form-step");
    steps[n].style.display = "flex";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
    } else {
    document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (steps.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
    document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which form-step to display
    var steps = document.getElementsByClassName("form-step");
    // Exit the function if any field in the current form-step is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current form-step:
    steps[current].style.display = "none";
    // Increase or decrease the current form-step by 1:
    current = current + n;
    // if you have reached the end of the form...
    if (current >= steps.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
    }
    // Otherwise, display the correct form-step:
    showStep(current);
}

function validateForm() {
    // This function deals with validation of the form fields
    var steps, y, i, valid = true;
    steps = document.getElementsByClassName("form-step");
    y = steps[current].getElementsByTagName("input");
    // A loop that checks every input field in the current form-step:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false
        valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[current].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, steps = document.getElementsByClassName("step");
    for (i = 0; i < steps.length; i++) {
        steps[i].className = steps[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    steps[n].className += " active";
}
