const numMilho = document.getElementById("milho");
const clicador = document.getElementById("clickArea");
const clic = document.getElementById("clicador");
var contagemMilho = 0;      // Variável que intermedia as operações com o milho
var cont = 0;               // Contagem de clicks físicos (vou usar mais tarde)
var clique = 1;             // Numero de milho por click
var milhoPlayer = 0;        // Quantidade atual de milho do jogador

// MILHO
function gerarMilhoJogador() {
    contagemMilho = clique;
}

function atualizar() {
    numMilho.innerHTML = `Milho: ${milhoPlayer}`;
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

// UPGRADES E COMPRA
function comprar(preco) {
    milhoPlayer = milhoPlayer - preco;
    atualizar();
}

function adicionarClique() {
    var valor = 1;
    if(milhoPlayer >= valor) {
        comprar(valor);
        clique++;
    }
}

function bonusMilho() {
    let bonus = 100;
    var valor = 1;
    if(milhoPlayer >= valor) {
        comprar(valor);
        setInterval(() => {
            milhoPlayer += bonus;
            atualizar();
        }, 30 * 1000)
    }
}


function autoclick() {
    var valor = 1;
    if(milhoPlayer >= valor) {
        comprar(valor);
        setInterval(()=> {
            contar();
            atualizar();
            setInterval(() => {clic.classList.add('autoclick')}, 1000);
            setInterval(() => {clic.classList.remove('autoclick')}, 2000);
        }, 2000);
        
        
    }
}

// Contagem
function contar() {
    cont++;
    gerarMilhoJogador();
    milhoPlayer += contagemMilho;
    atualizar();

    const instancia = criarInstancia();
    destruirInstancia(instancia);
}
