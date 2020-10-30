// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    navbarShadow()
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbarShadow() {
    if (window.pageYOffset > 0) {
        navbar.classList.add("drop-shadow")
    } else {
        navbar.classList.remove("drop-shadow");
    }
}
