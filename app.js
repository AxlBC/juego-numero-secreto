let secretNumber = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//Funcion para asignar elementos 
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

//Verifica la cantidad de intentos y si el numero ingresado es el correcto
function verificarIntento() {
    //Obtener un elemento por una id en concreto usando un metodo especifico.
   let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
 
   //console.log(numeroIntentos);
   //console.log(secretNumber);
   if (numeroUsuario === secretNumber) { 
    asignarTextoElemento('p', `Acertaste el numero en ${numeroIntentos} ${(numeroIntentos === 1) ? 'vez' : 'veces'}.`);
    document.getElementById('reiniciar').removeAttribute('disabled'); 
   }
   //El usuario no acerto
   else {
    if (numeroUsuario > secretNumber) {
        asignarTextoElemento('p', 'El numero secreto es menor.');
    } else {
        asignarTextoElemento('p', 'El numero secreto es mayor.');
    }
    numeroIntentos++;
    clean();
   }
}

//Limpia el cuadro de texto para ingresar un nuevo numero.
function clean() {
    //De esta forma podemos obtener un objeto directamente con el ID desde un metodo general.
    document.querySelector('#valorUsuario').value = '';
}

//Genera un numero aleatorio.
function randomSecretNumber() {
    let secretNumber = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(secretNumber);
    console.log(listaNumerosSorteados);
    //Si ya se alcanzo el maximo de numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se asignaron todos los numeros posibles.');
    } else {
        //si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(secretNumber)) {
            return randomSecretNumber();
        } else {
            listaNumerosSorteados.push(secretNumber);
            return secretNumber;
        }
    }
}

//Mensajes
function initialConditions() {
    //Colocando el titulo llamando a la etiqueta 'h1'
    asignarTextoElemento('h1', 'Juego de numero secreto');

    //Colocando un parrafo llamando a la etiqueta 'p'
    asignarTextoElemento('p', `Ingrese un numero del 1 al ${numeroMaximo}`);

    //Estableciendo el numero de intentos
    numeroIntentos = 1;

    //Generando el numero aleatorio
    secretNumber = randomSecretNumber();
}

//Reiniciar juego
function reiniciarJuego() {
    // limpiar la caja
    clean();

    // reiniciar mensaje
    initialConditions();

    // deshabilitar el boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

initialConditions();