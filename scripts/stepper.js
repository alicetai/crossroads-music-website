let currentStep = 0;

window.onload = function() {
    showStep(currentStep); // Display the first form step
};

function showStep(n) {
    // Display the elements of the form
    var steps = document.getElementsByClassName("form-step");
    steps[n].style.display = "flex";

    // Display the active step on the stepper
    var stepperNumbers = document.getElementsByClassName("step-number");
    stepperNumbers[n].style.backgroundColor = "#493722"
    var stepperLabels = document.getElementsByClassName("step-label");
    stepperLabels[n].style.color = "#493722"
}

// Display the next step of the form
function toggleStep(n) {
    var steps = document.getElementsByClassName("form-step");
    // if (n == 1 && !validateForm()) return false;
    steps[currentStep].style.display = "none";
    currentStep = n;

    if (currentStep==steps.length) {
        // End of form reached
        document.getElementById("checkout-form").submit();
        return;
    }

    showStep(currentStep);
}

function validateForm() {
    return true;
}
