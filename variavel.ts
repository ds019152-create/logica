const tela = require('prompt-sync')()

// declarando as variaveis 
let nome:string
let idade:number

// setando os valores 
nome = tela('qual é o seu nome? ')
idade = Number(tela('qual é a sua idade? ')) 

//saida das infomações 
console.log("Nome: "+nome+" idade: "+idade)


