let amigos = [] //Se crea la variable que almacenará los nombres que serán sorteados.

function agregarAmigo(){ //Se crea la función que almacenará los nombres que se ingresen.
    let nombreDelAmigo = document.getElementById('amigo').value;
    
//Se crea un if para validar que el campo no esté vacío.
    if(nombreDelAmigo === null || nombreDelAmigo === ""){
        alert("Por favor, inserte un nombre.");
    } else{
        amigos.push(nombreDelAmigo); //Agrega un nuevo nombre a la lista.
        console.log("Amigo agregado:", nombreDelAmigo);
        console.log("Lista actual de amigos:", amigos);
    }
    
    actualizaListaAmigos();
    limpiarCaja ();
}

//Se crea la función para limpiar caja de texto, y volver a ingresar otro nombre.
function limpiarCaja(){
    document.getElementById('amigo').value = '';
}
 
//Se crea la función para actualizar la lista de amigos.
function actualizaListaAmigos (){
    let lista = document.getElementById ("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach ((nombreDelAmigo) => {
        let li = document.createElement("li");
        li.textContent = nombreDelAmigo;
        lista.appendChild(li);
    });
}
//Se crea la función para sortear la lista de amigos.
function sortearAmigo(){
    if (amigos.length === 0){
        alert("Ingresa un amigo");
    
        return;
    }
    let indice = Math.floor(Math.random()* amigos.length);
    let seleccionado = amigos[indice];

    let listaSeleccionado = document.getElementById("resultado");
    listaSeleccionado.innerHTML="";
    let li = document.createElement ("li");
    li.textContent = "El ganador es: " + seleccionado;
    listaSeleccionado.appendChild(li);
}
