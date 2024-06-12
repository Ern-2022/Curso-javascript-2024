const btn_menuPrincipal = document.getElementById("btn_menuPrincipal")
const menuPrincipal = document.getElementById("menuPrincipal")

btn_menuPrincipal.addEventListener("click", (evt) => {
    menuPrincipal.classList.toggle("ocultar")
})