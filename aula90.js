// Aprendendo sobre objetos literais

const objetos = document.getElementById("objetos")

const computador ={
    cpu:"i9",
    ram:"64GB",
    hd:"2tb",
    info:function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD:${this.hd}`)
    }
}

computador["Monitor"]="22pol"
computador.placaVideo="rtx"

 console.log(computador["cpu"])

const computadores =[
    {
        cpu: "i9",
        ram: "64GB",
        hd: "2tb"
    },

    {
        cpu: "i7",
        ram: "32GB",
        hd: "2tb"
    },

    {
        cpu: "i5",
        ram: "16GB",
        hd: "1tb"
    }



]

computadores.forEach((c)=>{
    const div =document.createElement("div")
    div.setAttribute("class", "computador")
    div.innerHTML=c.cpu+"<br/>"+c.ram+"<br/>"+c.hd
    objetos.appendChild(div)
})

// computador.info()
//  console.log(computadores)
//  objetos.innerHTML=JSON.stringify(computadores)

