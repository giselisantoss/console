const input=require("readline-sync")




console.log("===Bem vinda ao meu cardapio digital")
const porduto = cinput.question("De qual produto deseja saber o preço?")


switch(produto){
    case "laranja":
        console.log("laranja custa 30 centavos")
        break;
    case "manga":
        console.log("A manga é tres reais")
        break;
    case "mamão":
        console.log("O mamão custa  2.99")
        break;
    case "limão":
        console.log("O limão custa 1 real")
        break;
    default:
        console.log("O temos essa fruta no mercado")
}