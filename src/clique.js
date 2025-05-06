const numMilho = document.getElementById("milho");
const clicador = document.getElementById("clickArea");
const clic = document.getElementById("clicador");

const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const valor3 = document.getElementById("valor3");

var contagemMilho = 0;      // Variável que intermedia as operações com o milho
var cont = 0;               // Contagem de clicks físicos (vou usar mais tarde)
var clique = 1;             // Numero de milho por click
var milhoPlayer = 0;        // Quantidade atual de milho do jogador


// MILHO
function gerarMilhoJogador() {
    contagemMilho = clique;
}

function atualizar() {
    numMilho.innerHTML = `${milhoPlayer}`;
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
    if(milhoPlayer < preco) {
        negarCompra();
    } else {
        milhoPlayer = milhoPlayer - preco;
    }
    
    atualizar();
}

// Adiciona e escala clicks
let valorClique = 15;
function adicionarClique() {
    
    if(milhoPlayer >= valorClique) {
        comprar(valorClique);

        clique++;

        var novoValor = aumentarPreco(valorClique);
        valorClique = novoValor;
        valor1.innerHTML = `${novoValor} milhos`;
    }
    atualizar()
    
}

// Adiciona e escala o bonus
let valorBonus = 30;
let bonus = 10;
function bonusMilho() {
    
    if(milhoPlayer >= valorBonus) {
        comprar(valorBonus);
        setInterval(() => {
            milhoPlayer += bonus;
            atualizar();
        }, 30 * 1000)
        var novoValor = aumentarPreco(valorBonus);
        valorBonus = novoValor;
        valor2.innerHTML = `${valorBonus} milhos`;
        bonus += bonus;
    }
}

// Adiciona e escala o autoclick
let valorAutoclick = 20;
let vel = 2000;
function autoclick() {
    
    if(milhoPlayer >= valorAutoclick) {
        comprar(valorAutoclick);
        setInterval(()=> {
            contar();
            atualizar();
            setInterval(() => {clic.classList.add('autoclick')}, 1000);
            setInterval(() => {clic.classList.remove('autoclick')}, 2000);
        }, vel);
        vel += 15;
        var novoValor = aumentarPreco(valorAutoclick);
        valorAutoclick = novoValor;
        valor3.innerHTML = `${valorAutoclick} milhos`;

    }
}

// Variação de preço
function aumentarPreco(valorInicial) {
    return valorInicial * 2;
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

// Negar compra
function negarCompra() {
    const negacao = document.getElementById('tela-negacao');
    const fechar = document.getElementById('fechar');
    const body = document.querySelector('body');

    negacao.classList.remove('hidden');
    
    fechar.addEventListener('click', function(){
        negacao.classList.add('hidden');
    })
}
