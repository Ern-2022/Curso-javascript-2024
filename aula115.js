// Aprendendo sobre desestruturacao em javascript

let numeros = [10, 20, 30, 40,50,60,70,80,90]

let [a, b, c, ...d] = numeros

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let obj ={nome:"ERNICIO",canal:"cfbcursos"}

let {nome,canal}=obj

console.log(nome)
console.log(canal)

const cores = ()=>{
    return ["verde","amarelo","vermelho","preto"]
}

let [c1,c2,,c3]=cores()

console.log(c1)
console.log(c2)
console.log(c3)

let texto = "ERNICIO DOS CHILUNDO"
let[p1,,p2]=texto.split(" ")
console.log(p1)
console.log(p2)