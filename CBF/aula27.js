// funcoes geradoras
function* cores(){
    yield "red"
    yield "yellow"
    yield "green"
}

const itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

function* question(){
    const name = yield "whats is your name?"
    const sport = yield "whats is your favorite sport?"
    return "your name is: "+name+ ", your favorite sport is " + sport
}

const itp = question()
console.log(itp.next().value)
console.log(itp.next("Ernicio").value)
console.log(itp.next("Box").value)


function* contador(){
    let i = 0
    while(true){
        yield i++
        if(i>5)
            break
    }
}

const itr = contador()
// for(let i = 0; i< 11; i++){
// console.log(itr.next().value)
// }

for(let c of itr){
    console.log(c)
}