class Login {
    static logando = false;
    static matlogando = null;
    static nomelogando = null;
    static acessologando = null;
    static endpoind = "https://0bf19043-19a4-409e-816c-f255443170a5-00-245sva18d8w82.spock.replit.dev/";

    static login = (mat,pas   ) => {
        this.endpoind+= `?matricula-${mat}&senha-${pas}`
        fetch(this.endpoind)
        .then(res=>res.json())
        .then(res=>{
            console.log(  res);
        })
    }
}

export { Login } 