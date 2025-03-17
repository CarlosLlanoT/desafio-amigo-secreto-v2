// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [] //array amigos

function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmig.value.trim();
    if(nombreAmigo == ""){ //verificar
        alert("Por favor inserte un nombre.");
        return;
    }
    if(amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya esta en la lista`);
        return
    }
    amigos.push(nombreAmigo)
    inputAmigo.value= ""; // verificar
    
    actualizarLista();
}
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for( let i=0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
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