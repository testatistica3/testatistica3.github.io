//Acessando os elementos HTML.
let options = document.getElementById('primeira')
let qltOrdinal = document.getElementById('qltOrdinal');
let ordemQltOrdinal = document.getElementById('ordemQltOrdinal');
let porcentilShow = document.getElementById('porcentilShow');
let separatrizes = document.getElementById('separatrizes');
let quartilOptions = document.getElementById('quartilOptions');
let quintilOptions = document.getElementById('quintilOptions');
let decilOptions = document.getElementById('decilOptions');
let porcentilOptions = document.getElementById('porcentilOptions');
let amostraHelp = document.getElementById('amostraHelp');
let populacaoHelp = document.getElementById('populacaoHelp');
let varNameHelp = document.getElementById('varNameHelp');
let descritivaManualRadio = document.getElementById('descritivaManualRadio');
let uploadDescritivaRadio = document.getElementById('uploadDescritivaRadio');
let manualInput = document.getElementById('manualInput');
let fileInput = document.getElementById('fileInput');
//==================================================================================
//Listener que esconde ou mostra o input da opção qualitativa ordinal.
options.addEventListener('click', function () {
    if (qltOrdinal.checked) {
        ordemQltOrdinal.style.display = 'block'
    } else {
        if (!qltOrdinal.checked) ordemQltOrdinal.style.display = 'none'
    }
})
//===========================================================================================
//Listeners que mostram ao usuário dicas sobre o que representam cada campo.
amostraHelp.addEventListener('click', function () { alert('A amostra representa uma parte de um todo a ser analisado.') });
populacaoHelp.addEventListener('click', () => alert('A população representa uma totalidade de dados a serem analisados.'));
varNameHelp.addEventListener('click', () => alert('O nome da variável é o título de sua pesquisa.'))
//===========================================================================================
fileInput.style.display = 'none'

//Função que alterna a tela entre os inputs manuais e o upload de arquivo.
function showInputOptions() {
    if (descritivaManualRadio.checked) {
        manualInput.style.display = 'block'
        fileInput.style.display = 'none'

    }
    if (uploadDescritivaRadio.checked) {
        manualInput.style.display = 'none'
        fileInput.style.display = 'block'
    }
}

//Função que mostra na tela o valor selecionado no botão range da opção Porcentil.
function showValue(value) {
    porcentilShow.innerText = value
}

//Função que exibe as caixas de opções de acordo com a escolha do usuário na caixa de
//opções das separatrizes.
function showOptions() {
    if (separatrizes.value === 'Quartil') {
        quartilOptions.style.display = 'inline-block';
        quintilOptions.style.display = 'none';
        decilOptions.style.display = 'none';
        porcentilOptions.style.display = 'none';
        porcentilShow.style.display = 'none';
    } else if (separatrizes.value === 'Quintil') {
        quartilOptions.style.display = 'none';
        quintilOptions.style.display = 'inline-block';
        decilOptions.style.display = 'none';
        porcentilOptions.style.display = 'none';
        porcentilShow.style.display = 'none';
    } else if (separatrizes.value === 'Decil') {
        quartilOptions.style.display = 'none';
        quintilOptions.style.display = 'none';
        decilOptions.style.display = 'inline-block';
        porcentilOptions.style.display = 'none';
        porcentilShow.style.display = 'none';
    } else if (separatrizes.value === 'Porcentil') {
        quartilOptions.style.display = 'none';
        quintilOptions.style.display = 'none';
        decilOptions.style.display = 'none';
        porcentilOptions.style.display = 'inline-block';
        porcentilShow.style.display = 'inline-block';
    }
}

function limparDescritiva() {
    window.location.reload()
}