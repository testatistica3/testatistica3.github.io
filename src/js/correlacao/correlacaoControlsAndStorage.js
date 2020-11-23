//Acessando os elementos HTML
const valoresX = document.getElementById('valoresX')
const valoresy = document.getElementById('valoresY')
const regressao = document.getElementById('regressao')
const regressaoFormula = document.getElementById('regressaoFormula')
const valorCorrelacao = document.getElementById('valorCorrelacao')
const forcaCorrelacao = document.getElementById('forcaCorrelacao')
const regressaoResult = document.getElementById('regressaoResult')
const regressaoY = document.getElementById('regressaoY')
const regressaoX = document.getElementById('regressaoX')
const tableResult = document.getElementById('tableResult')
const csvFile = document.getElementById('csv-upload')
const inputsDiv = document.getElementById('correlacaoInputsDiv')
const correlacaoManual = document.getElementById('correlacaoManual')
const correlacaoUpload = document.getElementById('correlacaoUpload')
const csvUpload = document.getElementById('csvUpload')


csvUpload.addEventListener('change' , () => {
    let files = csvUpload.files
    const file = files[0]
    var reader = new FileReader();
    // Read file into memory as UTF-8      
    reader.readAsText(file);
    // Handle errors load
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
})


function limparCorrelacao(){
    window.location.reload()
}

csvFile.style.display = 'none'

//Função que alterna a tela entre os inputs manuais e o upload de arquivo.
function showInputs(){
    if(correlacaoManual.checked){
        csvFile.style.display = 'none'
        inputsDiv.style.display = 'block'
    }
    if(correlacaoUpload.checked){
        csvFile.style.display = 'block'
        inputsDiv.style.display = 'none'
    }
}


//Deixa escondido a área que conterá a equação de resposta. É mostrada quando o botão 
//calcular é clicado.
regressao.style.display = 'none'

//Declaração de variáveis globais para armazenamento
correlacaoOptions = {}//Objeto que guardará os resultados de todos os cálculos.
let xArray = []
let yArray = []
uploaded = {}

//Função que guarda os valores digitados em xArray, substituindo vírgulas(,) por pontos(.) e retirando os espaços em branco.
//Após isso invoca a função parseX
function storeX(value){
    let temp = value.replace(/ /g, "").replace(/,/g, ".").split(';');
    correlacaoOptions.x = parseX(temp)
}

//Função que guarda os valores digitados em xArray, substituindo vírgulas(,) por pontos(.) e retirando os espaços em branco.
//Após isso invoca a função parseY
function storeY(value){
    let temp = value.replace(/ /g, "").replace(/,/g, ".").split(';');
    correlacaoOptions.y = parseY(temp)
}

//Transforma em números caso possível, inserindo os valores no array, ou alerta erro em caso de digitação de valores não
// numéricos, limpando os campos e colocando o foco no campo com erro.
function parseX(array){
    xArray = []
    for(let i of array){
        if(isNaN(i)){
            alert('Erro!!! Os valores devem ser apenas números. Tente novamente.')
            valoresX.value = ''
            valoresX.focus()
            xArray = []
        }else{
            xArray.push(+i)
        }
    }
    return xArray 
}

//Transforma em números caso possível, inserindo os valores no array, ou alerta erro em caso de digitação de valores não
// numéricos, limpando os campos e colocando o foco no campo com erro.
function parseY(array){
    yArray = []
    for(let i of array){
        if(isNaN(i)){
            alert('Erro!!! Os valores devem ser apenas números. Tente novamente.')
            valoresY.value = ''
            valoresY.focus()
            yArray = []
        }else{
            yArray.push(+i)
        }
    }
    return yArray 
}

