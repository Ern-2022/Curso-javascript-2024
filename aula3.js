const {texto} = require('./base');

// * (opicionais) 0 ou n
// + (obrigatorio) 1 ou n
// ? (opcionais) 0 ou 1

console.log(texto);

const regExp1 = /Joao/gi

console.log(texto.match(regExp1));