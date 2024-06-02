class Login {
    static logando = false;
    static matlogando = null;
    static nomelogando = null;
    static acessologando = null;
    static estilocss = null
    static endpoind = "https://0bf19043-19a4-409e-816c-f255443170a5-00-245sva18d8w82.spock.replit.dev/";
    static config = {
        cor:"#048",
        img:"./logo-ern.png"
    }

    static login = (mat, pas,config=null) => {
        this.endpoind += `?matricula-${mat}&senha-${pas}`
        if(config!=null){
            this.config=config
        }

        this.estilocss = 
        ".fundoLogin { display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px; background-color: rgba(0, 0, 0, 0.75); box-sizing: border-box;}"+
        ".baseLogin { display: flex; justify-content: center; align-items: stretch; width: 50%; box-sizing: inherit;}"+
        ".elementosLogin { display: flex; justify-content: center; flex-direction: column; align-items: flex-start;  width: 50%; background-color: #eee; padding: 10px; border-radius: 10px 0px 0px 10px; box-sizing: inherit;}"+
        ".logoLogin { display: flex; justify-content: center; align-items: center;  width: 50%; background-color: #bbb; padding: 10px; border-radius: 0px 10px 10px 0px; box-sizing: inherit;}"+
        ".logoLogin img { width: 50%; box-sizing: inherit;}"+
        ".campoLogin { display: flex; justify-content: flex-start; align-items: flex-start; flex-direction: column; box-sizing: inherit; margin-bottom: 10px;}"+
        ".campoLogin label{ font-size: 18px; }"+
        ".campoLogin input{ font-size: 18px; padding: 5px; background-color: #fff; border-radius: 5px; }"+
        ".botoesLogin { display: flex; justify-content: space-around; align-items: center; width: 100%; box-sizing: inherit; }"+
       `.botoesLogin button { cursor: pointer; color: #fff; background-color: ${this.config.cor}; padding: 10px; border-radius: 5px; width: 100px; box-sizing: inherit;}`

        const styleEstilo =document.createElement("style")

        styleEstilo.setAttribute("id","id_estiloLogin")
        styleEstilo.innerHTML=this.estilocss;
        document.head.appendChild(styleEstilo)


        const corpo = document.body;

        const fundoLogin = document.createElement("div")
        fundoLogin.setAttribute("id","fundoLogin")
        fundoLogin.setAttribute("class","fundoLogin")
        document.body.prepend(fundoLogin)

        const baseLogin = document.createElement("div")
        baseLogin.setAttribute("id","baseLogin")
        baseLogin.setAttribute("class","baseLogin")
        fundoLogin.appendChild(baseLogin)

        const elementosLogin = document.createElement("div")
        elementosLogin.setAttribute("id","lementosLogin")
        elementosLogin.setAttribute("class","elementosLogin")
        baseLogin.appendChild(elementosLogin)

        const campoLoginUserName = document.createElement("div")
        campoLoginUserName.setAttribute("id","campoLoginUserName")
        campoLoginUserName.setAttribute("class","campoLogin")
        elementosLogin.appendChild(campoLoginUserName)

        const labelUserName =document.createElement("label")
        labelUserName.innerHTML = "UserName"
        campoLoginUserName.appendChild(labelUserName)

        const inputUserName = document.createElement("input")
        inputUserName.setAttribute("id","f_username")
        inputUserName.setAttribute("type","text")
        inputUserName.setAttribute("name","f_username")
        campoLoginUserName.appendChild(inputUserName)

        const campoLoginSenha = document.createElement("div")
        campoLoginSenha.setAttribute("id","campoLoginSenha")
        campoLoginSenha.setAttribute("class","campoLogin")
        elementosLogin.appendChild(campoLoginSenha)

        const labelSenha =document.createElement("label")
        labelSenha.innerHTML="Senha"
        campoLoginSenha.appendChild(labelSenha)

        const inputSenha = document.createElement("input")
        inputSenha.setAttribute("id","f_senha")
        inputSenha.setAttribute("type","password")
        inputSenha.setAttribute("name","f_senha")
        campoLoginSenha.appendChild(inputSenha)

        const botoesLogin = document.createElement("div")
        botoesLogin.setAttribute("id","botoesLogin")
        elementosLogin.appendChild(botoesLogin)

        const btn_login = document.createElement("button")
        btn_login.setAttribute("id","btn_login")
        btn_login.innerHTML = "Login"
        botoesLogin.appendChild(btn_login)

        const btn_cancelar = document.createElement("button")
        btn_cancelar.setAttribute("id","btn_cancelar")
        btn_cancelar.innerHTML = " Cancelar"
        botoesLogin.appendChild(btn_cancelar)

        const logoLogin = document.createElement("div")
        logoLogin.setAttribute("id","logoLogin")
        logoLogin.setAttribute("class","logoLogin")
        baseLogin.appendChild(logoLogin)

        const imgLogoLogin = document.createElement("img")
        imgLogoLogin.setAttribute("src",this.config.img)
        imgLogoLogin.setAttribute("alt","ERN")
        logoLogin.appendChild(imgLogoLogin)




            // < div id = "fundoLogin" class="fundoLogin" > ok
            //     <div id="baseLogin" class="baseLogin"> ok
            //         <div id="elementosLogin" class="elementosLogin"> ok
            //             <div class="campoLogin"> ok
            //                 <label>UserName</label> OK
            //                 <input type="text" name="f_username" id="f_username"> OK
            //             </div> 

            //             <div class="campoLogin"> ok
            //                 <label>Senha</label>ok
            //                 <input type="password" name="f_senha" id="f_senha"> ok
            //             </div> 

            //             <div class="botoesLogin"> ok
            //                 <button id="btn_login">Login</button> ok
            //                 <button id="btn_cancelar">Cancelar</button> ok
            //             </div>
            //         </div>
            //         <div id="logoLogin" class="logoLogin"> ok
            //             <img src="./logo-ern.png" alt="ERN"> ok
            //         </div>
            //     </div>
            // </div >




        // fetch(this.endpoind)
        // .then(res=>res.json())
        // .then(res=>{
        //     if(res){
        //         this.logando=true;
        //         this.matlogando=mat;
        //         this.nomelogando= res.nome;
        //         this.acessologando = res.acesso;
        //         console.log(res);
        //     }else{
        //         console.log("usuario nao encontrado");
        //     }
        // })
    }
}

export { Login } 