const numClicks = document.getElementById("numClicks")
const milho = document.getElementById("milho")

function criarInstancia() {
    var milhoPeque = document.createElement("img")
    milhoPeque.setAttribute('src', 'img/milho.png')
    milho.appendChild(milhoPeque)
    
    milhoPeque.classList.add('animacao')

    return milhoPeque;
}

function destruirInstancia(instancia) {
    // Destrói instância
    setTimeout(() => {
        instancia.remove();
    }, 2000)
}

var cont = 0

function addElement() {
    cont++;
    numClicks.innerHTML = `Clicou ${cont} vezes`;

    const instancia = criarInstancia();
    destruirInstancia(instancia);
}