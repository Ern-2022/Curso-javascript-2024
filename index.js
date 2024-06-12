const btn_menuPrincipal = document.getElementById("btn_menuPrincipal")
const menuPrincipal = document.getElementById("menuPrincipal")
const todosmenusprincipais = [...document.querySelectorAll(".menuItem")]

btn_menuPrincipal.addEventListener("click", (evt) => {
    menuPrincipal.classList.toggle("ocultar")
})

todosmenusprincipais.forEach(e => {
    e.addEventListener("click", (evt) => {
        menuPrincipal.classList.add("ocultar")
    })
});