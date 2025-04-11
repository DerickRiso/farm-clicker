const numClicks = document.getElementById("contagem");
const clicador = document.getElementById("clickArea");
var cont = 0;

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
    }, 2000);
}

function contar() {
    cont++;
    numClicks.innerHTML = `Clicou ${cont} vezes`;
    const instancia = criarInstancia();
    destruirInstancia(instancia);
}