import { Login } from "./login149.js";


const callback_ok = ()=>{
    alert("ok");
}

const callback_naook = ()=>{
    alert("nao ok")
}

Login.login(callback_ok,callback_naook);