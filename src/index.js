import './styles.css';
import createHomePage from "./home.js";
import createMenuPage from "./menu.js";
import createAboutPage from "./about.js";

function clearContent() {
    const content = document.getElementById("content");
    content.innerHTML = "";
}

createHomePage();

document.addEventListener("DOMContentLoaded", () => {
    const homeBtn = document.getElementById("home-btn");
    const menuBtn = document.getElementById("menu-btn");
    const aboutBtn = document.getElementById("about-btn");

    homeBtn.addEventListener("click", () => {
        clearContent();
        createHomePage();
    });

    menuBtn.addEventListener("click", () => {
        clearContent();
        createMenuPage();
    });

    aboutBtn.addEventListener("click", () => {
        clearContent();
        createAboutPage();
    });
})