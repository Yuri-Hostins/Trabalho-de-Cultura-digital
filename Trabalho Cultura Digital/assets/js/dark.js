const toggle = document.querySelector('.theme-switch input[type="checkbox"]');

const icon = document.querySelector('.icon');

var storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

if(storedTheme) {
 document.documentElement.setAttribute('data-theme', storedTheme)
}

toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";
    icon.setAttribute("name", "sunny");

    if (currentTheme === "light") {
        targetTheme = "dark";
        icon.setAttribute("name", "moon");
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};