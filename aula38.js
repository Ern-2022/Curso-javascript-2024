// Entendo a relacao dos elementos do dom no javascript

const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]

console.log(btn_c[0].getRootNode())
console.log(btn_c[0].ownerDocument)

// console.log(caixa1.firstElementChild)
// console.log(caixa1.children)
// console.log(caixa1.lastElementChild)