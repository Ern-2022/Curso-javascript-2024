// (... ( () ) )(...)(...)
const { texto} = require ('./base');
const regExp1 = /Joao|Maria/gi;

//.log(texto);
//console.log(texto, math(regExp1));
//console.log(texto.replace(/(Joao|Maria)/gi, '<b>$1</b>'));
console.log(texto.replace(/(Joao|Maria)/gi, function(input){
    return '$$$$$$$$$$$' + input.toUpperCase() + '$$$$$$$$$$$$$';
}));


