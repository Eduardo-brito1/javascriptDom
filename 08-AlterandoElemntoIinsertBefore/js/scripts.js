let novoElemento = document.createElement('p')
let elementoAlvo = document.querySelector('#titulo-principal')
let elementoPai = document.querySelector('#container-principal')

novoElemento.appendChild(texto);

elementoPai.insertBefore(novoElemento, elementoAlvo)

let texto = document.createTextNode('algum texto')