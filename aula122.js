const endpoind ="https://replit.com/@Ernicio-Jermias/ERNdev"
fetch(endpoind)
.then(res=>res.json())
.then(dados=>(
    console.log(dados)
))
