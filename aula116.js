const long = document.getElementById("long")
const lati = document.getElementById("lati")

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarlocalizacao,errolocalizacao)
}else{
    console.log("Geolocalicao nao suportada")
}

function mostrarlocalizacao(pos){
    // console.log(pos)
    lati.innerHTML = `latitude:${pos.coords.latitude}`
    long.innerHTML = `longitude:${pos.coords.longitude}`
}

function errolocalizacao (){
    console.log("Erro ao obter a localizacao!");
}