// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [] //array amigos

function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.ariaValueMax.trim();
    if(nombreAmigo == ""){ //verificar
        alert("Por favor inserte un nombre.");
        return;
    }
    if(amigos.includes(nombreAmigo)) {
        alert('El nombre ${nombreAmigo} ya esta en la lista');
        return
    }
    amigos.push(nombreAmigo)
    inputAmigo.value= ""; // verificar
    
    actualizarlista();
}
