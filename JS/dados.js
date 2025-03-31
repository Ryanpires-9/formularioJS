const params = new URLSearchParams(window.location.search);

document.getElementById('nome').textContent = params.get('nome');
document.getElementById('txt_email').textContent = params.get('email');
document.getElementById('RgCPF').textContent = params.get('Rg_CPF');
document.getElementById('carteira').textContent = params.get('carteira');
document.getElementById('cel').textContent = params.get('cel');
document.getElementById('sexo').textContent = params.get('sexo');
document.getElementById("dataNasc").textContent = params.get('dataNasc');
document.getElementById('escola').textContent = params.get('escola');
document.getElementById('estado').textContent = params.get('estado');
document.getElementById('cep').textContent = params.get('cep');
document.getElementById('estadoCiv').textContent = params.get('estadoCiv');
document.getElementById('filhos').textContent = params.get('filhos');
document.getElementById('emprego').textContent = params.get('emprego');
document.getElementById('banco').textContent = params.get('banco');