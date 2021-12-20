window.onload = function () {
    console.log('dfdfsdf')
    window.onscroll = function () { myFunction() };

    var navbar = document.getElementById("navfix");
    console.log(navbar)
    var sticky = navbar.offsetTop;

    function myFunction() {
        console.log('here')
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("fixed-top")
        } else {
            navbar.classList.remove("fixed-top");
        }
    }
}