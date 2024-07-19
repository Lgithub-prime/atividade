//WHILE

/*let contador = 0;
while (contador < 10) {
    console.log ("OI")
    contador = contador +1
}

// DO
do {
    console.log(contador)
    contador++ //<-- É igual a contador + 1
} while (contador < 10)

// FOR WHILE
for (let i = 0; i <10; i++);{
    console.log(i)
}
    
let m5 = 0
while(m5 < 51){
    console.log("5 X",m5+1, '=', m5)
    m5 = m5 + 5
}
console.log("///////////////////////////////////////")
for(let i = 0; i < 10; i++){
    console.log(i,"X 5 =" ,i * 5)
}
 
let notas = [5,8,3];
let media = (notas[0] + notas[1] + notas[2])/3
console.log(media)
 */

let ns = [1,2,3,10000,5,6]
for(let i = 0; i < ns.length; i++){
    console.log(ns[i])
    if ((ns[i]) < 3 ) {
        console.log("baixo")
    } else{
        console.log("alto")
    }
}
