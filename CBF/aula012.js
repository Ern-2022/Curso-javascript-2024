const jogador1 ={nome:"Ernicio",energia:100,vida:3,magia:150}
const jogador2 ={nome:"Ernicia",energia:100,vida:5,velocidade:80}
const jogador3 = {...jogador1,...jogador2}

//  console.log(jogador3)

const objs1 = document.getElementsByTagName("div")
const objs2 = [...document.getElementsByTagName("div")]

console.log(objs1)
console.log(objs2)

objs2.forEach(element => {
    console.log(element.innerHTML= "ernicio")
});