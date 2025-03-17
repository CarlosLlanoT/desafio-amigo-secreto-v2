// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [] //array amigos

function agregarAmigo(){
    const entradaAmigo = document.getElementById('amigo');
    const nombreAmigo = entradaAmigo.value.trim();
    if(nombreAmigo == ""){ //verificar
        alert("Por favor inserte un nombre.");
        return;
    }
    if(amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya esta en la lista`);
        return
    }
    amigos.push(nombreAmigo)
    entradaAmigo.value= ""; // verificar
    
    actualizarLista();
}
function sortearAmigo(){
    if(amigos.length == 0){
        alert("no hay amigos disponibles para sortear. Agrega l menos uno.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random()*amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML= `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for( let i=0; i < amigos.length; i++){
        const list = document.createElement('list');
        list.textContent = amigos[i];
        listaAmigos.appendChild(list);
    }
}