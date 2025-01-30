const listaAmigos=document.getElementById('lista_Amigos');//elemento  <ul> para la lista de amigos
const listaResultado=document.getElementById('resultado');//elemento <ul> para la lista de resultados
//declarar un array para almacenar los amigos
let nomrbresAmigos=[];

//funcion para limpiar la caja de texto input_nombre
function clearInput(){
    document.getElementById('input_nombre').value='';
}
//Funcion para agrar un amigo a la lista
function agregarAmigo(){
    // obtener el nombre del amigo
    const nombre=document.getElementById('input_nombre').value.trim();
    //validar que el nombre no este vacio
    if(nombre===''){
        alert('Por favor ingrese un nombre valido');
        return;
     //validar si el nombre esta repetido en la lista
    }else if (nomrbresAmigos.includes(nombre)){
        alert('El nombre ya existe en la lista');
        clearInput(nombre);
        return;
    //agregar el nombre al array
    }else{
        nomrbresAmigos.push(nombre);
        //crear un elemento <li> para el nombre del amigo
        const li=document.createElement('li');
        li.textContent=nombre;
        //agregar el elemento <li> a la lista <ul>
        listaAmigos.appendChild(li);
        //limpiar la caja de texto
        clearInput();
    }
};

//funcion para sortear un amigo
function sortearAmigo(){
    //validar que existan amigos en la lista
    if(nomrbresAmigos.length===0){
        alert('No hay amigos en la lista');
        return;
    }
    //obtener un indice aleatorio
    const indice=Math.floor(Math.random()*nomrbresAmigos.length);
    //obtener el nombre del amigo sorteado
    const amigoSorteado=nomrbresAmigos[indice];
    //mostrar el nombre del amigo sorteado
    listaResultado.innerText=`El amigo sorteado es: ${amigoSorteado}`;
    //eliminar el amigo sorteado de la lista
    nomrbresAmigos.splice(indice,1);
    //habilitar el boton reiniciar
    document.getElementById('boton_reiniciar').disabled=false;

}

//funcion para reiniciar el sorteo{
function reiniciarSorteo(){
    //eliminar todos los amigos de la lista
    listaAmigos.innerHTML='';
    //limpiar la lista de amigos
    nomrbresAmigos=[];
    //limpiar la lista de resultados
    listaResultado.innerText=''
    //limpiar la caja de texto
    clearInput();
    //limpiar el mnesaje de resultado
    listaResultado.innerText='';
    //desabilitar el boton reiniciar
    document.getElementById('boton_reiniciar').disabled=true;

}
