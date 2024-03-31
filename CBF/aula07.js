/*                                  OPERADORES LOGICOS                                   */


// && - and e
// || or ou
// ! not nao

let n1,n2,n3,n4

n1=2
n2=4
n3=6
n4=8

// exemplo 1
console.log((n1>n2)&&(n1<n2))

// exemplo 2
console.log((n2<n1)||(n2>n1))

// exemplo 3
console.log(!((n2<n1)||(n2>n1)))

// exemplo 4
if(n1<n3){
    console.log(n1 + ' maior que ' + n3)
}else{
    console.log(n1 +' menor que '+ n3)
}

// exemplo 5 
if((n2>n1) && (n1<n3)){
    console.log("VERDADEIRO")
}else{
    console.log("FALSO")
}
// exemplo 6
if((n2>n1) && !(n1<n3)){
    console.log("VERDADEIRO")
}else{
    console.log("FALSO")
}