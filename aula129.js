const timer = document.getElementById("timer")

const tmpni = Date.now()
console.log(tmpni)

const contador =()=>{
    const tmpatual = Date.now()
    let cont = tmpatual-tmpni
    let seg = Math.floor((tmpatual - tmpni)/1000)
    console.log(seg)
}

setInterval(contador,1000)

