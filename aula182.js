const btn_menuPrincipal = document.getElementById("btn_menuPrincipal")
const menuPrincipal = document.getElementById("menuPrincipal")
const todosmenusprincipais = document.getElementById("btn_menuItem")

btn_menuPrincipal.addEventListener("click",(evt)=>{
    menuPrincipal.classList.toggle("ocultar");
})