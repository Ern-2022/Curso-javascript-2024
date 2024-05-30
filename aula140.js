const tmp = document.querySelector("#tmp")
const nvl = document.querySelector("#nvl")
const prs = document.querySelector("#prs")

const endpoind = "https://c09f9997-81fc-4891-ba09-9c1748028ecb-00-2rmzlotflh28g.spock.replit.dev/"

let dados = {
    _temperatura: 0,
    _pressao: 0,
    _nivel: 0,
    set valores(val){
        this._temperatura = val.temperatura
        this._pressao = val.pressao
        this._nivel = val.nivel
        tmp.innerHTML=this._temperatura
        nvl.innerHTML=this._nivel
        prs.innerHTML=this._pressao
    },
    get valores(){
        return [this._temperatura,this._pressao,this._nivel]
    }
}

const buscarDados = () => {
    fetch(endpoind)
        .then(res => res.json())
        .then(res => {
            dados.valores=res
        }
        )
}

let intervalo = setInterval(buscarDados,1000)


console.log(dados.valores)