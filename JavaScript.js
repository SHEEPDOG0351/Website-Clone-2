    //Waits until HTML is loaded
    document.addEventListener("DOMContentLoaded", function() {
        
        const nav = document.querySelector("nav");

        
        window.addEventListener("scroll", function() {
            // Check if the user has scrolled past the height of the nav
            if (window.scrollY > navHeight) {
                nav.classList.add("scrolled");
            } else {
                nav.classList.remove("scrolled");
            }
        });
    });