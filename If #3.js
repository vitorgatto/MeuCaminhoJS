
const imprimirResultado = function(nota) {
    if(nota >= 7)  {
        console.log('Aprovado')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10) //cuidado com linguagem fracamente tipada.

