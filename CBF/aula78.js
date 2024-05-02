// Aprendendo so data e hora em javascript
const data = new Date()
const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")
let dia = data.getDate()
dia = dia < 10 ? "0" + dia : dia

let mes = data.getMonth()
mes = mes < 10 ? "0" + mes : mes

const data_r = dia + "/" + mes + "/" + data.getFullYear()

div_data.innerHTML = data_r

const relogio = ()=>{
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10? "0" + hora:hora
    let minuto = data.getMinutes()
    minuto = minuto < 10? "0" + minuto:minuto
    let segundo = data.getSeconds()
    segundo = segundo <10? "0" + segundo:segundo

    const hora_org = hora +":"+minuto+":"+segundo
    div_relogio.innerHTML=hora_org
}

const intervalo = setInterval(relogio,1000)

// console.log(Date.now())//Timestamp

/*console.log(data)
console.log(data.toDateString())
console.log(data.getTime())
console.log(`Mes ${data.getDate()}`)*/

// getDate() = dia do mes
// getDay() = dia da semana (numero)
// getFullYear() = Ano com quatri digitos
// getHours() = horas
// getMilliseconds() = Millisecondos
// getMinutes() = Minutos
// getMonth() = Mes
// getSeconds() = Segundos
// getTime() = Timestamp (millisegundos desde 1 de janeiro de 1970, 00:00:00 UTC
// Date.now() = Timestamp(millisegundos desde 1 de janeiro de 1970, 00:00:00 UTC
// getTimezoneOffset() = Timezone da localidade
// setDate() = Define um dia do mes para a data
// setMonth() = Define um mes para a data
// setFullYear()= Define um ano para a data
// setHours() = Define horas
// setMinutes() = Define Minutos
// setSeconds() = Define Segundos
// setMilliseconds() = Define millisegundos
// toDatestring() = retorna somente a data