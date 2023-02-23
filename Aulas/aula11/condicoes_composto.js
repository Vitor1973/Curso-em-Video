var pais = 'Brasil';
console.log(`Vivendo em ${pais}`);

if(pais != 'Brasil') {
    console.log('Você é Estrangeiro')
}else {
    console.log('Você é Brasileiro')
}
//Exemplo 1º
//utilizar a tecla F5 para depurar.

//const semaforo = "verde"

//if (semaforo == "verde") {
//    console.log("Pode Passar");
//}

/**  
// Exemplo 2º 
const semaforo = "verde"

if (semaforo == "verde") {
    console.log("Pode Passar")
} else {
    console.log("Pare")
}*/

//Exemplo 3º

const semaforo = 'amarelo'

if (semaforo == "verde") {
    console.log('Pode Passar')
} else if (semaforo == 'vermelho') {
    console.log(`Semaforo ${semaforo} PAREEEE !!!`)
} else {
    console.log('Atenção')
}