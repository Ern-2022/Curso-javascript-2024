// loops for in e for of

//exemplo 1
const objs = document.getElementsByTagName("div")
let num = [10, 20, 30, 40, 50]
for(o of objs){
    console.log(o.innerhtml="business")
}

for(o in objs){
    console.log(objs[o].innerHTML)
    console.log(o)
}

for(let i=0; i<objs.length; i++){
    console.log(i)
}
// for(let i=0;i<num.length;i++){
//     console.log(num[i])
//}

// for(n in num){
//     console.log(num[n])

// }

// for(n of num){
//     console.log(n)
// }