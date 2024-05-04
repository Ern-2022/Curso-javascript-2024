const url = document.getElementById("url")
const btn_url = document.getElementById("btn_url")

btn_url.addEventListener("click",(evt)=>{
    // window.location="aula86.html"
    // window.location.replace("aula86.html") // O repleace deleta a URL corrent do historico
    // window.location.assign("aula86.html") // O assign e o inverso do repleace
    // window.location.reload()
    // window.history.forward()
    // window.history.go(1)
    // console.log(window.history.length)
    console.log(url.value)
    // window.location=url.value
    window.location=url.value
    window.location.url=url.value

})