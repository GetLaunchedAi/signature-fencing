//
//    Toggle Mobile Navigation
//
const navbarMenu = document.querySelector("#navigation #navbar-menu");
const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");
const serviceMenu = document.querySelector("#navigation .dropdown");
const pvcMenu = document.querySelector("#navigation .dropdown2");
const aluminumMenu = document.querySelector("#navigation .dropdown3");

const aluminum = document.querySelector('#Aluminum')
const about = document.querySelector('#About')
const contact = document.querySelector('#Contact')
const screenWidth = window.screen.width;



hamburgerMenu.addEventListener('click', function () {
    const isNavOpen = navbarMenu.classList.contains("open");
    if (!isNavOpen) {
        hamburgerMenu.setAttribute("aria-expanded", true);
        hamburgerMenu.classList.add("clicked");
        navbarMenu.classList.add("open");
    } else {
        hamburgerMenu.setAttribute("aria-expanded", false);
        hamburgerMenu.classList.remove("clicked");
        navbarMenu.classList.remove("open");
    }
});

serviceMenu.addEventListener('click', function () {
    const isServiceOpen = serviceMenu.classList.contains("open");
    if (!isServiceOpen) {
        serviceMenu.setAttribute("aria-expanded", true);
        serviceMenu.classList.add("open");
        if (screenWidth < 770) {
            about.style.display = 'none'
            contact.style.display = 'none'
        }


    } else {
        serviceMenu.setAttribute("aria-expanded", false);
        serviceMenu.classList.remove("open");
        if (screenWidth < 770) {
            about.style.display = 'block'
            contact.style.display = 'block'
        }



    }
})

pvcMenu.addEventListener('click', function () {
    const isServiceOpen = pvcMenu.classList.contains("open");
    if (!isServiceOpen) {
        pvcMenu.setAttribute("aria-expanded", true);
        pvcMenu.classList.add("open");
        if (screenWidth < 770) {
            about.style.display = 'none'
            contact.style.display = 'none'
            aluminum.style.display= 'none'
        }


    } else {
        pvcMenu.setAttribute("aria-expanded", false);
        pvcMenu.classList.remove("open");
        if (screenWidth < 770) {
            about.style.display = 'block'
            contact.style.display = 'block'
            aluminum.style.display= 'block'
        }



    }
});
aluminumMenu.addEventListener('click', function () {
    const isServiceOpen = aluminumMenu.classList.contains("open");
    if (!isServiceOpen) {
        aluminumMenu.setAttribute("aria-expanded", true);
        aluminumMenu.classList.add("open");
        if (screenWidth < 770) {
            about.style.display = 'none'
            contact.style.display = 'none'
        }


    } else {
        aluminumMenu.setAttribute("aria-expanded", false);
        aluminumMenu.classList.remove("open");
        if (screenWidth < 770) {
            about.style.display = 'block'
            contact.style.display = 'block'
        }



    }
});