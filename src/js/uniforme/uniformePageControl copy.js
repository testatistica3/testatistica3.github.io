//Acessando os elementos HTML
const uniformeSelect = document.getElementById('uniformeSelect');
const uniformeMinimo = document.getElementById('uniformeMinimo');
const uniformeMaximo = document.getElementById('uniformeMaximo');
const uniformeMaiorOuMenorQue = document.getElementById('uniformeMaiorOuMenorQue');
const uniformeValor1 = document.getElementById('uniformeValor1');
const uniformeValor2 = document.getElementById('uniformeValor2');
const divMaiorMenorQue = document.getElementById('divMaiorMenorQue');
const divEntreDoisValores = document.getElementById('divEntreDoisValores');
const uniformeProbabilidade = document.getElementById('uniformeProbabilidade');
const uniformeVariancia = document.getElementById('uniformeVariancia');
const uniformeDesvioPadrao = document.getElementById('uniformeDesvioPadrao');
const tableResult = document.getElementById('tableResult');
const uniformeMedia = document.getElementById('uniformeMedia');

//Esses dois inputs começam escondidos, e são exibidos dependendo da escolha do usuário
//na caixa de opções.
divMaiorMenorQue.style.display = 'none'
divEntreDoisValores.style.display = 'none'

//Objeto que guardará todos os resultados das funções matemáticas. Posteriormente
//suas propriedades são usadas como parâmetro para as funções que exibem resultados
//na tela do usuário.
let uniformeOptions = {}


//Função que mostra dinamicamente os inputs para o usuário dependendo de sua escolha
//na caixa de opções.
function showInputs(){
    if(uniformeSelect.value == 'Maior que'){
        divMaiorMenorQue.style.display = 'block'
        divEntreDoisValores.style.display = 'none'
        uniformeMaiorOuMenorQue.value = ''
        uniformeValor1.value = ''
        uniformeValor2.value = ''
        uniformeMaiorOuMenorQue.focus()
    }
    if(uniformeSelect.value == 'Menor que'){
        divMaiorMenorQue.style.display = 'block'
        divEntreDoisValores.style.display = 'none'
        uniformeMaiorOuMenorQue.value = ''
        uniformeValor1.value = ''
        uniformeValor2.value = ''
        uniformeMaiorOuMenorQue.focus()
    }
    
    if(uniformeSelect.value == 'Entre dois valores'){
        divEntreDoisValores.style.display = 'block'
        divMaiorMenorQue.style.display = 'none'
        uniformeMaiorOuMenorQue.value = ''
        uniformeValor1.focus()
    }
}
//Função que guarda o valor informado no input referente ao valor mínimo
function storeMinimo(value){
    let temp = value.replace(/,/g,'.')
    let result = +temp
    if(isNaN(result)){
        alert('Erro! Valor precisa ser um número válido.')
        uniformeMinimo.value = ''
        uniformeMinimo.focus()
    }
    uniformeOptions.minimo = result
}
//Função que guarda o valor informado no input referente ao valor máximo
function storeMaximo(value){
    let temp = value.replace(/,/g,'.')
    let result = +temp
    if(isNaN(result)){
        alert('Erro! Valor precisa ser um número válido.')
        uniformeMaximo.value = ''
        uniformeMaximo.focus()
    }
    uniformeOptions.maximo = result
}
//Função que guarda o valor informado no input referente ao valor menor que
function storeMaiorMenorQue(value){
    let temp = value.replace(/,/g,'.')
    let result = +temp
    if(isNaN(result)){
        alert('Erro! Valor precisa ser um número válido.')
        uniformeMaiorOuMenorQue.value = ''
        uniformeMaiorOuMenorQue.focus()
    }
    uniformeOptions.maiorMenorQue = result
}
//Função que guarda o valor informado no input referente ao valor primeiro número.
function storeValor1(value){
    let temp = value.replace(/,/g,'.')
    let result = +temp
    if(isNaN(result)){
        alert('Erro! Valor precisa ser um número válido.')
        uniformeValor1.value = ''
        uniformeValor1.focus()
    }
    uniformeOptions.uniformeValor1 = result
}
//Função que guarda o valor informado no input referente ao valor segundo número.
function storeValor2(value){
    let temp = value.replace(/,/g,'.')
    let result = +temp
    if(isNaN(result)){
        alert('Erro! Valor precisa ser um número válido.')
        uniformeValor2.value = ''
        uniformeValor2.focus()
    }
    uniformeOptions.uniformeValor2 = result
}