const menu = document.getElementById("nav-list");
const toogle = document.getElementById("menu");
const close = document.getElementById("close");

if(toogle) {
    toogle.addEventListener("click", () => {
        menu.classList.add("show");
    })
}

if(close) {
    close.addEventListener("click", () => {
        menu.classList.remove("show");
    })
}