function toggleBrandDropdown() {
    const dropdown = document.getElementById("brand-dropdown");
    toggleDisplay(dropdown);
}

function toggleColorDropdown() {
    const dropdown = document.getElementById("color-dropdown");
    toggleDisplay(dropdown);
}

function toggleMaterialDropdown() {
    const dropdown = document.getElementById("material-dropdown");
    toggleDisplay(dropdown);
}

function toggleSortDropdown() {
    const dropdown = document.getElementById("sort-dropdown");
    toggleDisplay(dropdown);
}

function toggleDisplay(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// function filterProducts() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     div = document.getElementById("myDropdown");
//     a = div.getElementsByTagName("a");
//     for (i = 0; i < a.length; i++) {
//       txtValue = a[i].textContent || a[i].innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         a[i].style.display = "";
//       } else {
//         a[i].style.display = "none";
//       }
//     }
// }