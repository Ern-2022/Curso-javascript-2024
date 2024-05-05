import { contatos } from "./bancoContatos.js";

let contato ={
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(i_cont){
        return contatos[i_cont]
    },
    addContato:function(novoContato,destinoDom){
        const cont = {
            nome:novoContato.nome,
            telefone:novoContato.telefone,
            email:novoContato.email
        }

        contatos.push({})
        const div =document.createElement("div")
        div.setAttribute("class","contato")
        const p_nome = document.createElement("p")
        p_nome.innerHTML=novoContato.nome
        const p_telefone = document.createElement("p")
        p_telefone.innerHTML=novoContato.telefone
        const p_mail = document.createElement("p")
        p_mail.innerHTML=novoContato.email
        div.appendChild(p_nome)
        div.appendChild(p_telefone)
        div.appendChild(p_mail)
        destinoDom.appendChild(div)
    }
}

export default contato