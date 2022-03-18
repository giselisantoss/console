const input=require("readline-sync")




const animal= input.question("Fale um animal?")



switch (animal) {
    case 'Vaca':
    case 'Girafa':
    case 'cachorro':
    case 'Porco':
     console.log('Esse animal irá para Arca de Noé');
     break;
     case 'Dinoussauro':
    default:
        console.log('Esse animal não vai.');
}