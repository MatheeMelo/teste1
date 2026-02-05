let listaDeNumerosSorteados = [];
let numeroLimite = 20;
let numeroSecreto = gerarNumeroAleatorio();
let numeroDeTentativas = 0;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak( texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirTelaInicial(){
    exibirTextoNaTela('p', `escolha um numero entre 1 e ${numeroLimite}`);
    exibirTextoNaTela('h1', 'Jogo do numero secreto' );
}

function verificarChute(){
    numeroDeTentativas++;
    let chute = document.querySelector('input').value;
    if (chute>numeroSecreto){
        exibirTextoNaTela('p', `O numero secreto é menor que ${chute}`)
        limparCampo();
    } else if (chute<numeroSecreto){
        exibirTextoNaTela('p', `O numero secreto é maior que ${chute}`)
        limparCampo();
    } else{
        let palavraTentativa = numeroDeTentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', `ACERTOU`);
        exibirTextoNaTela('p', `Voce descobriu o numero secreto com ${numeroDeTentativas} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() *numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    numeroDeTentativas = 0;
    console.log(numeroSecreto);
    exibirTelaInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
exibirTelaInicial();
console.log(numeroSecreto);
