console.log("Welcome to Menisha M Portfolio!");


// Navigation smooth scrolling

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");

        const targetSection =
            document.querySelector(targetId);

        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Page loaded

window.addEventListener("load", function () {

    console.log("Portfolio successfully loaded.");

});