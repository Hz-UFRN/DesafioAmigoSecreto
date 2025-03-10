//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// app.js
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    
    if (!nome) {
        alert('Por favor, digite um nome válido!');
        return;
    }
    
    amigos.push(nome);
    input.value = '';
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        resultado.innerHTML = '';
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceSorteado];
    
    resultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${amigoSecreto}</strong></li>`;
}