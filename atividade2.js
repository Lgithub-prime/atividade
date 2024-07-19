//IF E ELSE
let idade = 20
if (idade >= 18){
console.log(`A sua idade é maior de 18 ${idade}`)
    if(idade === 20){
        console.log("Olá vovô")
    }
} else if (idade>=11){
console.log(`Tu és jovem`)
} else if (idade < 10){
console.log("morra")
}
//Opções
let podio = 2
switch(podio){
    case 1:
        console.log(`Você ficou em ${podio}° lugar`)
        break;
    case 2:
        console.log(`Você ficou em ${podio}° lugar`)
        break;
    case 3:
        console.log(`Você ficou em ${podio}° lugar`)
        break;
    default: //Se não estiver no ponto desejado
        console.log(`Fracassado`)
        break;
}

let caso = "diretor"
switch (caso){
    case "comum":
        console.log(`Você é um ${caso}, volte ao trabalho`)
        break;
    case "gerente":
        console.log(`Você é: ${caso}, boa tarde senhor`)
        break;
    case "diretor":
        console.log(`Você é ${caso}, bom te ver`)
        break;
    default:
        console.log("Quem é você?")

}

let n1 = 20
let n2 = 9
if (n1 > n2){
    console.log(`O ${n1} é maior que ${n2}`)
}else{
    console.log(`O ${n1} é menor que ${n2}`)
} 

let senha = 2645
if (senha===2345){
    console.log("Senha válida")

} else {
    console.log("morra")
}