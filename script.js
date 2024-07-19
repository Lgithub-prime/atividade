let nome = "Luís Gabriel"
let idade = "18"
let estado_civil_C = false
let estado_civil_S = true
console.log(nome,idade,estado_civil_C,estado_civil_S)

let n1 = 3
let n2 = 7
let n3 = 2
let n4 = 5
let s = n1+n2+n3+n4
let m = (n1+n2+n3+n4)/4
console.log("A soma foi: ${s}",s, "A média é: ",m)
//COMENTÁRIO 
/*
o
t
a
r
i
o
*/

let n5 = 7
let S = n5+1
let A = n5-1
console.log("O número escolhido foi: ",n5, "O seu sucessor é: ", S, "E o antecessor é:", A) 

let n6 = 50
let d6 = n6-(n6*5)/100
console.log(d6)

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