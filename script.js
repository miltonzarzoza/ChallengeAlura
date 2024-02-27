var botonEncriptar = document.querySelector(".botonEncriptar");
var botonDesencriptar = document.querySelector(".botonDesencriptar");
var contenedorMuneco = document.querySelector(".contenedorMuneco");
var contenedorParrafo = document.querySelector(".contenedorParrafo");
var textoResultado = document.querySelector(".textoResultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    var cajatexto = recuperartexto();
    textoResultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
    ocultarAdelante();
    var cajatexto = recuperartexto();
    textoResultado.textContent = desencriptarTexto(cajatexto);
}

function recuperartexto() {
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

function ocultarAdelante() {
    contenedorMuneco.classList.add("ocultar");
    contenedorParrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai";
        } else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter";
        } else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes";
        } else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober";
        } else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat";
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje.replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    
    return texto;
}

const botonCopiar = document.querySelector(".botonCopiar");
botonCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".textoResultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("si sirvo");
});