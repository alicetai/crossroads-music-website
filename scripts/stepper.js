window.onload = function() {
    showStep(0); // Display the first form step
};

function showStep(n) {
    var steps = document.getElementsByClassName("form-step");
    steps[n].style.display = "flex";
}
