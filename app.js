let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto =  gerarNumeroAleatorio();
let tentativas = 1


function exibirtextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
}    

function exibirMensagemInicial() {
    exibirtextoNaTela('h1', 'Jogo do número secreto');
    exibirtextoNaTela('p', 'Escolha um número entre 1 e 10');

}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirtextoNaTela('h1', 'Acertou!')
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentaivas = `Você descobriu o núumero secreto com ${tentativas} ${palavratentativa}`;
        exibirtextoNaTela('p', mensagemTentaivas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto) {
            exibirtextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirtextoNaTela('p', 'O número secreto é maior');
        }

        tentativas++;
        limparCampo();
    }
    
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite+ 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}