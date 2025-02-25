const n = 3;
// const n = 3 -> Erro (Não pode declarar com mesmo nome)
// n = 5 -> Erro (Não pode alterar o valor de uma const)

console.log('n = ' + n)

var j = 3;
var j = 2;

console.log("j = " + j)

let i = 4;
// let i = 3 -> Erro (Não pode declarar com mesmo nome)

i = 5;

console.log("i = " + i)

let nome = "João"
cpf = '123'
telefone = '123123'

// JS não precisa de declaração explicita -> Ele assume ela como var

let tString = `Meu nome é ${nome}, meu cpf é ${cpf} e meu telefone é ${telefone}`

console.log(tString)
console.log(typeof tString)


let x = 5.0
console.log(typeof x)
x = .5 // mesmo que 0.5
console.log(typeof x)
x = 3
console.log(typeof x)

let verdadeiro = true;
let falso = false;

let conexao = null // Tem null -> valor vazio
let conexao2; // Undefined -> Valor indefinido
