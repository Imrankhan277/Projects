const toggleBtn = document.getElementById("toggle-btn");
const body = document.body;
const root = document.documentElement;
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const projectsLink = document.getElementById("projects-link");
const contactLink = document.getElementById("contact-link");

const homePage = document.getElementById("home-page");
const aboutPage = document.getElementById("about-page");
const projectsPage = document.getElementById("projects-page");
const contactPage = document.getElementById("contact-page");


toggleBtn.addEventListener("click", () => {
    const isLightMode = body.classList.contains("light-mode");
    if (isLightMode) {
        // Switch to dark mode
        body.classList.remove("light-mode");
        root.style.setProperty("--bg", "#0c0b10");
        root.style.setProperty("--txt", "#eef0f1");
        lightIcon.style.display = "inline";
        darkIcon.style.display = "none";
    } else {
        // Switch to light mode
        body.classList.add("light-mode");
        root.style.setProperty("--bg", "#eef0f1");
        root.style.setProperty("--txt", "#0c0b10");
        lightIcon.style.display = "none";
        darkIcon.style.display = "inline";
    }
});

homeLink.addEventListener("click", () => {
    homePage.style.display = "flex";
    aboutPage.style.display = "none";
    projectsPage.style.display = "none";
    contactPage.style.display = "none";
});

aboutLink.addEventListener("click", () => {
    homePage.style.display = "none";
    aboutPage.style.display = "flex";
    projectsPage.style.display = "none";
    contactPage.style.display = "none";
});

projectsLink.addEventListener("click", () => {
    homePage.style.display = "none";
    aboutPage.style.display = "none";
    projectsPage.style.display = "flex";
    contactPage.style.display = "none";
});

contactLink.addEventListener("click", () => {
    homePage.style.display = "none";
    aboutPage.style.display = "none";
    projectsPage.style.display = "none";
    contactPage.style.display = "flex";
});