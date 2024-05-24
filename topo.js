const body = document.body
const topo = document.createElement("div")

const estilotopo =
    "display: flex;" +
    "justify-content: space-between;" +
    "background-color: #48f;" +
    "align-items: center;"


const estilo_img_logo = "width:100px;"


topo.setAttribute("id", "topo")
topo.setAttribute("style", estilotopo)
body.prepend(topo)

const logo =
    " <div id='logo' class='logo'>" +
    " <img src='logo-ern.png' title='kosmo' style='"+estilo_img_logo+"'>" +
    "</div>"

topo.innerHTML += logo

const login =
    " <div id='login' class='login' style='color:aqua;>" +
    " <p id='matricula'> Matricula:<span></span></p>" +
    " <p id='nome'> Nome:<span></span></p>" 
    "</div>"

topo.innerHTML += login

