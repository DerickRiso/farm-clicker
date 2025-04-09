const numClicks = document.getElementById("numClicks")
var cont = 0
function addElement() {
    cont++;
    numClicks.innerHTML = `Clicou ${cont} vezes`
}