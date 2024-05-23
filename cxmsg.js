class Cxmsg {
    titulo=null
    texto=null
    cor=null
    destino=null
    divmsg=null

    constructor(config){
        this.titulo = config.titulo
        this. texto = config.texto
        this.cor = config.cor
        this. destino = document.body
    }
    mostrar = ()=>{
        this.divmsg=document.createElement("div")
        const estilo_divmsg =
        "display:flex;"+
        "justify-content:center;"+
        "align-items:center;"+
        "top:0px;"+
        "left:0px;"+
        "width:100%;"+
        "height:100vh;"+
        "position:absolute;"+
        "background-color:rbga(0,0,0,0.7);"

        this.divmsg.setAttribute("id","divmsg")
        this.divmsg.setAttribute("style",estilo_divmsg)
        this.destino.prepend(this.divmsg)
    }
    

    ocultar = ()=>{

    }
}