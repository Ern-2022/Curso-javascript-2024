import { Cxmsg } from "./cxmsg.js";


const callback_ok = () => { }

const callback_naook = () => {
    const config = {
        cor: "#800",
        tipo: "ok",
        testos: null,
        comando_sn:()=>{}
    }
    Cxmsg.mostrar(config, "Erro", "login nao efetuado! Usuario / senha incorretos.")

}

const configLogin = {
    cor: "048",
    img: "./logo-ern.png",
    endpoind: "https://replit.com/@Ernicio-Jermias/login-v1"
}

Login.login(callback_ok, callback_naook,configLogin);