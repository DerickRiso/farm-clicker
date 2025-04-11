const numMilho = document.getElementById("milho");
const clicador = document.getElementById("clickArea");
var cont = 0;
var escalar = 1;
var milho = 0;

// MILHO
function gerarMilhoJogador() {
    milho = (escalar * cont);  
}

function contar() {
    cont++
    gerarMilhoJogador();

    numMilho.innerHTML = `Milho: ${milho}`;

    const instancia = criarInstancia();
    destruirInstancia(instancia);
}   

// INSTANCIAS
function criarInstancia() {
    var instance = document.createElement("img");
    instance.setAttribute('src', 'img/milho.png');
    clicador.appendChild(instance);
    instance.classList.add('instanciaMilho');

    return instance;
}

function destruirInstancia(instancia) {
    setTimeout(() => {
        instancia.remove();
    }, 1500);
}

