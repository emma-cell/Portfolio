window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("siden vises");
    document.querySelector("#burger_menu").addEventListener("touched", menuOpenClose);
    document.querySelector("#burger_menu").addEventListener("click", menuOpenClose);
}

function menuOpenClose() {
    console.log("menu pressed");
    this.classList.toggle("burger_kryds");
    let x = document.querySelector("#mylinks");
    if (x.style.display === "block") {
        x.style.display = "none";

        document.querySelector("#burger_menu").textContent = "☰";
    } else {
        x.style.display = "block";
        document.querySelector("#burger_menu").textContent = "x";
    }
}
