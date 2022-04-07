let header = document.querySelector(".header");
let mobileMenu = document.querySelector(".mobile-menu");
let hamburger = document.querySelector("#hamburger");
let closeMenus = document.querySelectorAll(".close-menu");



closeMenus.forEach(closeMenu => {
    closeMenu.addEventListener('click', (e)=> {
        if (header.classList.contains("click-hamburger")) {
            header.classList.remove("click-hamburger");
            mobileMenu.classList.remove("show-navigation");
            mobileMenu.classList.add("hide-navigation");
        }
    })
})

hamburger.addEventListener("click", function() {
    if (header.classList.contains("click-hamburger")) {
        header.classList.remove("click-hamburger");
        mobileMenu.classList.remove("show-navigation");
        mobileMenu.classList.add("hide-navigation");
    } else {
        header.classList.add("click-hamburger");
        mobileMenu.classList.remove("hide-navigation");
        mobileMenu.classList.add("show-navigation");
    }
})