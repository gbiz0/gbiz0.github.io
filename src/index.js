function init() {
    window.websiteSections = document.getElementsByClassName("menu")[0];
    window.sectionsText = document.getElementById("unline");
    window.menuBar = document.getElementById("menubt");
    
    window.loaded = true;
}
window.onload = init;

// this section toggles the menu's state on mobile
var menuState = false;
function toggleMenu(changesSection) {
    if (!window.loaded ||
        (changesSection && window.innerWidth >= 800))
        return null;

    // go down
    if (!menuState) {
        // slide menu down
        window.websiteSections.style.animationName = "slide-menu-down";
        window.websiteSections.style.animationDuration = "300ms";
        window.websiteSections.style.animationIterationCount = 1;
        window.websiteSections.style.animationTimingFunction = "ease-out";
        window.websiteSections.style.animationFillMode = "forwards";
        window.websiteSections.style.pointerEvents = "none";

        // fade in menu text
        window.sectionsText.style.animationName = "fade-in";
        window.sectionsText.style.animationDuration = "1s";
        window.sectionsText.style.animationIterationCount = 1;
        window.sectionsText.style.animationTimingFunction = "ease-in";
        window.sectionsText.style.animationFillMode = "forwards";
        window.sectionsText.style.pointerEvents = "all";
    } else {
        window.sectionsText.style.animationName = "fade-out";
        window.sectionsText.style.animationDuration = "0.2s";
        window.sectionsText.style.animationIterationCount = 1;
        window.sectionsText.style.animationTimingFunction = "ease-in";
        window.sectionsText.style.animationFillMode = "forwards";
        window.sectionsText.style.pointerEvents = "none";

        // slide menu up
        window.websiteSections.style.animationName = "menu-slide-up";
        window.websiteSections.style.animationDuration = "300ms";
        window.websiteSections.style.animationIterationCount = 1;
        window.websiteSections.style.animationTimingFunction = "ease-In";
        window.websiteSections.style.animationFillMode = "forwards";
    }
 
    menuState = !menuState;
}