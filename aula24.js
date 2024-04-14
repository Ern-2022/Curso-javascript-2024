//  funcoes anonimas

// exemplo 1
let f = function(n1=0,n2=0){
    return n1+n2
}

// console.log(f(4,6))

const e = function(...valores){
    let res=0
    for(let v of valores){
        res+= v
    }

    return res
}

// console.log(f(4,16))

const a = new Function("v1","v2","return v1+v2")  //funcao contrutor anonimo
console.log(a(15,25))