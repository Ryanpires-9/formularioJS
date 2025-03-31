let campoNome = document.getElementById("nome");
let campoEmail = document.getElementById("txt_email");
let campoRgCPF = document.getElementById("RgCPF");
let campoCarteira = document.getElementById("carteira");
let campoCel = document.getElementById("cel");
let campoDataNasc = document.getElementById("dataNasc");
let campoCep = document.getElementById("cep");
let ms = document.getElementsByTagName('span');

function Campo() {

    let p = document.getElementsByTagName('p');
    let valido = true;

    if (campoNome.value.trim() === "") {
        ms[0].innerHTML = " * ";
        ms[0].style.color = "#ff0000";
        campoNome.style.border = "1px solid #ff0000";
        campoNome.placeholder = 'Preencha este campo!';
        valido = false;
    }

    if (campoEmail.value.trim() === "") {
        ms[1].innerHTML = " * ";
        ms[1].style.color = "#ff0000";
        campoEmail.style.border = "1px solid #ff0000";
        campoEmail.placeholder = 'Preencha este campo!';
        valido = false;
    }

    if (campoRgCPF.value.trim() === "") {
        ms[2].innerHTML = " * "
        ms[2].style.color = "#ff0000";
        campoRgCPF.style.border = "1px solid #ff0000";
        campoRgCPF.placeholder = 'Preencha este campo!';
        valido = false;
    }

    if (campoCarteira.value.trim() === "") {
        ms[3].innerHTML = " * "
        ms[3].style.color = "#ff0000";
        campoCarteira.style.border = "1px solid #ff0000";
        campoCarteira.placeholder = 'Preencha este campo!';
        valido = false;
    }

    if (campoCel.value.trim() === "") {
        ms[4].innerHTML = " * "
        ms[4].style.color = "#ff0000";
        campoCel.style.border = "1px solid #ff0000";
        campoCel.placeholder = 'Preencha este campo!';
        valido = false;
    }

    if (campoDataNasc.value.trim() === "") {
        ms[5].innerHTML = " * "
        ms[5].style.color = "#ff0000";
        campoDataNasc.style.border = "1px solid #ff0000";
        campoDataNasc.placeholder = 'Preencha este campo!';
        valido = false;
    }

    if (campoCep.value.trim() === "") {
        ms[6].innerHTML = " * "
        ms[6].style.color = "#ff0000";
        campoCep.style.border = "1px solid #ff0000";
        campoCep.placeholder = 'Preencha este campo!';
        valido = false;
    }

    if (valido) {
        p[0].innerHTML += campoNome.value;
        p[1].innerHTML += campoEmail.value;
        p[2].innerHTML += campoRgCPF.value;
        p[3].innerHTML += campoCarteira.value;
        p[4].innerHTML += campoCel.value;
        p[5].innerHTML += campoDataNasc.value;
        p[6].innerHTML += campoCep.value;
    }
}
function limpaErro() {

    for (let i = 0; i < ms.length; i++) {
        ms[i].innerHTML = "";
        ms[i].style.color = "";
        if (i < 7) {
            document.getElementsByTagName('input')[i].style.border = "1px solid #e2e3e5";
        }
    }      
}
