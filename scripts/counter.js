
function increment(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10); 
    console.log(value);
    value = isNaN(value)? 0 : value;
    value++;
    input.value = value;
}

function decrement(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10); 
    console.log(value);
    if (value > 1) {
        value = isNaN(value)? 0 : value;
        value--;
        input.value = value;
    }
}