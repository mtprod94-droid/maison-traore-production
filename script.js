// =========================================
// MAISON TRAORÉ PRODUCTION
// MAIN JAVASCRIPT
// =========================================


// MOBILE MENU

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("active");
});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

    });

});
