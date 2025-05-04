const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    const currentTheme = document.getElementById("theme-stylesheet");
    const currentHref = currentTheme.getAttribute("href");

    // Cycle through the three themes
    let newTheme;
    if (currentHref === "resources/index.css") {
        newTheme = "resources/alternative1.css";
    } else if (currentHref === "resources/alternative1.css") {
        newTheme = "resources/alternative2.css";
    } else {
        newTheme = "resources/index.css";
    }
    
    currentTheme.setAttribute("href", newTheme);
});