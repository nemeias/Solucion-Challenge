const btnE = document.getElementById("btnEnc");
const btnD = document.getElementById("btnDesenc");
const btnC = document.getElementById("btnCop");
const textIngresado = document.getElementById("texto");

textIngresado.addEventListener("input", () => {
    textIngresado.value = textIngresado.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
})

function img() {
    var textoVacio = "";
    let textoT = document.getElementById("tArea").value;
    textoT;
    if (textoVacio !== textoT) {
        document.getElementById("tapa").style.display = "none";
    } else document.getElementById("tapa").style.display = "";
}

function limpiar() {
    document.getElementById("texto").value = "";
    document.getElementById("tArea").value = "";
}

function foco() {
    document.getElementById("texto").focus();
}

function encriptar() {
    let nuevoTexto = document.getElementById("texto").value;
    nuevoTexto;
    nuevoTexto = nuevoTexto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    nuevoTexto;

    document.getElementById("tArea").value = nuevoTexto;
    document.getElementById("tArea").style.color = "#495057";
    img();
}

function desencriptar() {
    let nuevoTexto = document.getElementById("texto").value;
    nuevoTexto;
    nuevoTexto = nuevoTexto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    nuevoTexto;

    document.getElementById("tArea").value = nuevoTexto;
    document.getElementById("tArea").style.color = "#495057";
    img();
}

function copiar() {
    document.getElementById("texto").placeholder = "";
    let textCopi = document.getElementById("tArea");
    textCopi.select();
    document.execCommand("copy");
    document.getElementById("texto").value = "";
    document.getElementById("tArea").value = "";

    foco();
    Swal.fire({
        
        position: "center",
        icon: "success",
        title: "Texto copiado",
        showConfirmButton: false,
        timer: 1000,
    });
}

foco();
btnE.addEventListener("click", encriptar);
btnD.addEventListener("click", desencriptar);
btnC.addEventListener("click", copiar);
