/**
 * Exercício 5: Projeto A Batalha das 12 Casas
Criar uma página web completa (HTML, CSS, JS) tematizada com a jornada pelas 12 Casas do Zodíaco e hospedar no GitHub.
index.html
style.css
script.js
Entrada: prompt para nome e Cosmo Inicial (converter para número com operador unário +).
Decisão: confirm() para sacrificar sentido. Se sim, cosmo *= 2.
Batalha: Subtrair dano nas casas usando -=.
Validação: Avaliar se cosmoAtual >= 1000 && statusVida === Vivo.
Saída: Exibir relatório Parabéns, [Nome], você salvou Athena com [X] de cosmo restante!
> git init batalha-12-casas-js
 */

function iniciarBatalha() {
    // Entrada: Nome
    const nome = prompt("Qual é o seu nome, Cavaleiro?");
    if (!nome) return; // Cancela se o usuário não digitar nada

    // Entrada: Cosmo Inicial com operador unário (+)
    let cosmoInicial = prompt("Qual o seu Cosmo Inicial? (Recomendado: 3000+)");
    let cosmoAtual = +cosmoInicial; 

    // Decisão: Sacrificar sentido
    const sacrificarSentido = confirm("Você deseja sacrificar um de seus sentidos (ex: a visão) para despertar o Sétimo Sentido?");
    
    if (sacrificarSentido) {
        cosmoAtual *= 2;
        alert("Você perdeu um sentido, mas seu cosmo explodiu e foi duplicado! Cosmo atual: " + cosmoAtual);
    }

    // Batalha: Subtraindo dano das casas (simulando danos pesados das batalhas)
    alert("Iniciando a travessia das 12 Casas...");
    cosmoAtual -= 800;  // Dano na casa de Touro e Gêmeos
    cosmoAtual -= 1200; // Dano na casa de Câncer e Leão
    cosmoAtual -= 1500; // Dano de Virgem a Peixes

    // Definindo o status de vida
    let statusVida = cosmoAtual > 0 ? "Vivo" : "Morto";
    
    const divRelatorio = document.getElementById("relatorio");

    // Validação estrita conforme solicitado pelo exercício
    if (cosmoAtual >= 1000 && statusVida === "Vivo") {
        divRelatorio.innerHTML = `<span class="sucesso">Parabéns, ${nome}, você salvou Athena com ${cosmoAtual} de cosmo restante!</span>`;
    } else {
        divRelatorio.innerHTML = `<span class="derrota">Infelizmente, ${nome}, seu cosmo se apagou. Você não conseguiu salvar Athena. (Cosmo restante: ${cosmoAtual})</span>`;
    }
}

