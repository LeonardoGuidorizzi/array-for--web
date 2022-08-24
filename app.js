'use strict'

const numeros = [2, 5, 7, 25, 48, 23, 80, 120, 30]
const nomes =['joao', 'maria', 'alexandre', 'bola', 'chico']
const frutas = ['mamao', 'morango', 'manga']

//Problema: Exibir os elementos do array no console.log
//solucao imperativa
//const ultimoIndice = numeros.length -1
//let contador = 0
//while(contador <= ultimoIndice){
//    console.log(numeros[contador])
//    contador++
//}


//solucao imperativa(FOR)
//const ultimoIndice = numeros.length - 1
//for(contador = 0;contador<= ultimoIndice; contador++){
//    console.log(numero[contador])
//}

//Solucao declarativa(forEach)(arrow function)
const mostrarElementos = (numero)=> console.log(numero)
//function mostrarElementos(numero){
//    console.log(numero)
//}
numeros.forEach(mostrarElementos)

// //Problema: Exibir os elementos do array no layout

// const criarItems = (items)=> {
//     const ul= document.querySelector('ul')
//     const div = document.createElement('div')
//     div.classList.add('items')
//     div.textContent = items
    
//     ul.appendChild(div)
// }

// numeros.forEach(criarItems)

const criarContainer = (titulo, array) => {
    const main = document.querySelector('main')
    const div = document.createElement('div')
    div.classList.add('array-container')
    div.innerHTML= `
    <h2>${titulo}</h2>
    <ul>
        <li class="items">
            ${array.join("</li><li class='items'>")}
        </li>    
    </ul>    
    `

    main.appendChild(div)
}

criarContainer('problema 1 ', numeros)
criarContainer('Clientes', nomes)
criarContainer('frutas', frutas)