

let elementos = ["Piedra", "Papel", "Tijera"];
let elemPlayer;
let elemPc;

function generarElemento() {
    elemPc = elementos[Math.round(Math.random() * 2)];
  }

function esMejor(elemP,elemJ) {
    return (elemP === "Piedra" && elemJ === "Tijera") || (elemP === "Papel" && elemJ === "Piedra") || (elemP === "Tijera" && elemJ === "Papel")
}

function piedra() {
    elemPlayer = "Piedra";
    generarElemento();
    document.getElementById("imgP").src = "Piedra.png"
    document.getElementById("imgEp").src = elemPc + ".png"
    if (esMejor(elemPlayer, elemPc)) {
        document.getElementById("resultado").innerHTML = "Ganaste";
    } else if (esMejor(elemPc, elemPlayer)) {
        document.getElementById("resultado").innerHTML = "Perdiste";
    } else {
        document.getElementById("resultado").innerHTML = "Empataste";
    }
    setTimeout(restablecer,4000)
}

function tijera() {
    elemPlayer = "Tijera";
    generarElemento();
    document.getElementById("imgP").src = "Tijera.png"
    document.getElementById("imgEp").src = elemPc + ".png"
    if (esMejor(elemPlayer, elemPc)) {
        document.getElementById("resultado").innerHTML = "Ganaste";
    } else if (esMejor(elemPc, elemPlayer)) {
        document.getElementById("resultado").innerHTML = "Perdiste";
    } else {
        document.getElementById("resultado").innerHTML = "Empataste";
    }
    setTimeout(restablecer,4000)
}

function papel() {
    elemPlayer = "Papel";
    generarElemento();
    document.getElementById("imgP").src = "Papel.png"
    document.getElementById("imgEp").src = elemPc + ".png"
    if (esMejor(elemPlayer, elemPc)) {
        document.getElementById("resultado").innerHTML = "Ganaste";
    } else if (esMejor(elemPc, elemPlayer)) {
        document.getElementById("resultado").innerHTML = "Perdiste";
    } else {
        document.getElementById("resultado").innerHTML = "Empataste";
    }
    setTimeout(restablecer,4000)
}

function restablecer() {
    document.getElementById("imgP").src = "PLayaer 1.png"
    document.getElementById("imgEp").src = "Evil player 1.png"
    document.getElementById("resultado").innerHTML = ""
}



document.addEventListener("DOMContentLoaded", function(e){
});