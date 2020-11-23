//Declaração de variáveis que receberão os resultados dos cálculos matemáticos,
//para uso posterior na demonstração de resultados para o usuário.
let inputed = {};
let uploaded = {};
//------------------------------------------------------------------------------

//Acessando os elementos HTML
let qltNominal = document.getElementById('qltNominal');
let qtDiscreta = document.getElementById('qtDiscreta');
let qtContinua = document.getElementById('qtContinua');
// let table = document.getElementById('table');
let table2 = document.getElementById('table2');
let table3 = document.getElementById('table3');
let amostra = document.getElementById('amostra');
let populacao = document.getElementById('populacao');
let graficoId = document.getElementById('grafico');
let canvas = document.getElementById('myChart');
let csvInputFile = document.getElementById('csv-file')
//------------------------------------------------------------------------------

//Quando um arquivo é escolhido através do botão, aciona o código abaixo, que aciona as 
//funções subsequentes, para gerar um vetor numérico para que seja possível fazer os cálculos.
csvInputFile.addEventListener('change' , () => {
    let files = csvInputFile.files
    const file = files[0]
    var reader = new FileReader();
    // Read file into memory as UTF-8      
    reader.readAsText(file);
    // Handle errors load
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
})
//Função que executa funções de cálculos matemáticos, e com os resultados
//executa funções que exibem os resultados e montam o gráfico correspondente.
function calcular() {
    
    if(descritivaManualRadio.checked){
        storeInputedObjectValues()

        if (qltNominal.checked) {
            storeInputedObjectValuesNominal()
            createHeader(inputed);
            createTable(inputed.countedElements, inputed.totalInputs, inputed.fac);
            createTable2(inputed.media, inputed.moda, inputed.mediana, inputed.totalInputs);
            createTable3(inputed.desvioPadrao, inputed.coeficienteVariacao, inputed.separatriz);
            createChart(inputed.noRepeats, inputed.researchName, inputed.countedFi, inputed.type, inputed.colors, inputed.options);
        };
        if (qltOrdinal.checked) {
            storeInputedObjectValuesOrdinal()
            console.log(inputed);
            createHeader(inputed);
            createTable(inputed.countedOrdinal, inputed.totalInputs, inputed.facOrdinal);
            createTable2(inputed.media, inputed.moda, inputed.mediana, inputed.totalInputs);
            createTable3(inputed.desvioPadrao, inputed.coeficienteVariacao, inputed.separatriz);
            createChart(inputed.noRepeats, inputed.researchName, inputed.countedFiOrdinal, inputed.type, inputed.colors, inputed.options);
        };
        if (qtDiscreta.checked) {
            storeInputedObjectValuesDiscreta()
            createHeader(inputed);
            createTable(inputed.countedElements, inputed.totalInputs, inputed.fac);
            createTable2(inputed.media, inputed.moda, inputed.mediana, inputed.totalInputs);
            createTable3(inputed.desvioPadrao, inputed.coeficienteVariacao, inputed.separatriz);
            createChart(inputed.noRepeats, inputed.researchName, inputed.countedFi, inputed.type, inputed.colors, inputed.options);
        }
        if (qtContinua.checked) {
            storeInputedObjectValuesContinua()
            createHeader(inputed);
            createTableContinua(inputed.noRepeats, inputed.intervalo, inputed.linhas, inputed.inputedValues, inputed.totalInputs, inputed.fac);
            createTable2(inputed.media, inputed.moda, inputed.mediana, inputed.totalInputs);
            createTable3(inputed.desvioPadrao, inputed.coeficienteVariacao, inputed.separatriz);
            createChart(inputed.labels, inputed.researchName, inputed.countedFi, inputed.type, inputed.colors, inputed.options);
        }
        console.log(inputed);
    }
    if(uploadDescritivaRadio.checked){
        storeUploadedObjectValues(variavelGlobalDescritiva)
        if (qltNominal.checked) {
            storeUploadedObjectValuesNominal()
            createHeader(uploaded);
            createTable(uploaded.countedElements, uploaded.totalInputs, uploaded.fac);
            createTable2(uploaded.media, uploaded.moda, uploaded.mediana, uploaded.totalInputs);
            createTable3(uploaded.desvioPadrao, uploaded.coeficienteVariacao, uploaded.separatriz);
            createChart(uploaded.noRepeats, uploaded.researchName, uploaded.countedFi, uploaded.type, uploaded.colors, uploaded.options);
        };
        if (qltOrdinal.checked) {
            storeUploadedObjectValuesOrdinal()
            console.log(uploaded);
            createHeader(uploaded);
            createTable(uploaded.countedOrdinal, uploaded.totalInputs, uploaded.facOrdinal);
            createTable2(uploaded.media, uploaded.moda, uploaded.mediana, uploaded.totalInputs);
            createTable3(uploaded.desvioPadrao, uploaded.coeficienteVariacao, uploaded.separatriz);
            createChart(uploaded.noRepeats, uploaded.researchName, uploaded.countedFiOrdinal, uploaded.type, uploaded.colors, uploaded.options);
        };
        if (qtDiscreta.checked) {
            storeUploadedObjectValuesDiscreta()
            createHeader(uploaded);
            createTable(uploaded.countedElements, uploaded.totalInputs, uploaded.fac);
            createTable2(uploaded.media, uploaded.moda, uploaded.mediana, uploaded.totalInputs);
            createTable3(uploaded.desvioPadrao, uploaded.coeficienteVariacao, uploaded.separatriz);
            createChart(uploaded.noRepeats, uploaded.researchName, uploaded.countedFi, uploaded.type, uploaded.colors, uploaded.options);
        }
        if (qtContinua.checked) {
            storeUploadedObjectValuesContinua()
            createHeader(uploaded);
            createTableContinua(uploaded.noRepeats, uploaded.intervalo, uploaded.linhas, uploaded.inputedValues, uploaded.totalInputs, uploaded.fac);
            createTable2(uploaded.media, uploaded.moda, uploaded.mediana, uploaded.totalInputs);
            createTable3(uploaded.desvioPadrao, uploaded.coeficienteVariacao, uploaded.separatriz);
            createChart(uploaded.labels, uploaded.researchName, uploaded.countedFi, uploaded.type, uploaded.colors, uploaded.options);
        }
        console.log(uploaded);
    }
    

    

    


    
    


    //==========================================================================================
/*     let noTitleArray = variavelEscopoGlobal.slice(0)
    noTitleArray.shift();

    uploadedarrayOptions.uploadedArray = variavelEscopoGlobal
    uploadedarrayOptions.notitle = noTitleArray;
    uploadedarrayOptions.inputedValues = parseArray(uploadedarrayOptions.notitle)
    uploadedarrayOptions.countedElements = countElements(uploadedarrayOptions.inputedValues);
    uploadedarrayOptions.noRepeats = [...new Set(uploadedarrayOptions.inputedValues)]
    uploadedarrayOptions.researchName = uploadedarrayOptions.uploadedArray[0]
    uploadedarrayOptions.order = parseArray(ordemQltOrdinal);
    uploadedarrayOptions.countedOrdinal = countOrdinal(uploadedarrayOptions.countedElements, uploadedarrayOptions.order);
    uploadedarrayOptions.countedFiOrdinal = countFi(uploadedarrayOptions.countedOrdinal)
    uploadedarrayOptions.totalInputs = calculateTotalInputs(uploadedarrayOptions.inputedValues);
    uploadedarrayOptions.countedFi = countFi(uploadedarrayOptions.countedElements)
    uploadedarrayOptions.moda = calculateModa(uploadedarrayOptions.countedElements);
    uploadedarrayOptions.fac = calculateFac(uploadedarrayOptions.countedElements, uploadedarrayOptions.countedFi);
    uploadedarrayOptions.facOrdinal = calculateFac(uploadedarrayOptions.countedOrdinal, uploadedarrayOptions.countedFiOrdinal);
    uploadedarrayOptions.mediana = calculateMediana(uploadedarrayOptions.totalInputs, uploadedarrayOptions.fac, uploadedarrayOptions.countedElements);
    if (qltNominal.checked) {
        uploadedarrayOptions.media = 'Não possui média'
        uploadedarrayOptions.type = 'pie';
    };

    if (qltOrdinal.checked) {
        uploadedarrayOptions.media = 'Não possui média'
        uploadedarrayOptions.moda = calculateModa(uploadedarrayOptions.countedOrdinal);
        uploadedarrayOptions.mediana = calculateMediana(uploadedarrayOptions.totalInputs, uploadedarrayOptions.facOrdinal, uploadedarrayOptions.countedOrdinal);
        uploadedarrayOptions.type = 'pie';

    };

    if (qtDiscreta.checked) {
        uploadedarrayOptions.media = calculateMediaDiscreta(uploadedarrayOptions.countedElements, uploadedarrayOptions.totalInputs)
        uploadedarrayOptions.type = 'bar'
    }

    if (qtContinua.checked) {
        let x = calculateContinua(uploadedarrayOptions.inputedValues, uploadedarrayOptions.totalInputs)
        uploadedarrayOptions.amplitude = x.amplitude;
        uploadedarrayOptions.linhas = x.linhas;
        uploadedarrayOptions.intervalo = x.intervalo;
        uploadedarrayOptions.type = 'bar';
        uploadedarrayOptions.pontoMedioContinua = calculatePontoMedioIntContinua(uploadedarrayOptions.noRepeats, uploadedarrayOptions.intervalo, uploadedarrayOptions.linhas);
        uploadedarrayOptions.countedFi = calculateFiContinua(uploadedarrayOptions.pontoMedioContinua.valor1, uploadedarrayOptions.linhas, uploadedarrayOptions.inputedValues, uploadedarrayOptions.intervalo);
        uploadedarrayOptions.media = calculateMediaContinua(uploadedarrayOptions.pontoMedioContinua.media, uploadedarrayOptions.countedFi, uploadedarrayOptions.totalInputs);
        uploadedarrayOptions.moda = calculateModaContinua(uploadedarrayOptions.pontoMedioContinua.valor1, uploadedarrayOptions.pontoMedioContinua.valor2, uploadedarrayOptions.countedFi);
        uploadedarrayOptions.fac = calculateFacContinua(uploadedarrayOptions.linhas, uploadedarrayOptions.countedFi);
        uploadedarrayOptions.mediana = calculateMedianaContinua(uploadedarrayOptions.totalInputs, uploadedarrayOptions.fac, uploadedarrayOptions.pontoMedioContinua.media, uploadedarrayOptions.countedFi, uploadedarrayOptions.intervalo);
        uploadedarrayOptions.labels = createChartLabels(uploadedarrayOptions.pontoMedioContinua.valor1, uploadedarrayOptions.pontoMedioContinua.valor2, uploadedarrayOptions.linhas);
    }
    if (qltOrdinal.checked) {
        createHeader(inputed);
        createTable(uploadedarrayOptions.countedOrdinal, uploadedarrayOptions.totalInputs, uploadedarrayOptions.facOrdinal);
        createTable2(uploadedarrayOptions.media, uploadedarrayOptions.moda, uploadedarrayOptions.mediana, uploadedarrayOptions.totalInputs);
        createChart(uploadedarrayOptions.noRepeats, uploadedarrayOptions.researchName, uploadedarrayOptions.countedFiOrdinal, uploadedarrayOptions.type);
    } else if (qtContinua.checked) {
        createHeader(inputed);
        createTableContinua(uploadedarrayOptions.noRepeats, uploadedarrayOptions.intervalo, uploadedarrayOptions.linhas, uploadedarrayOptions.inputedValues, uploadedarrayOptions.totalInputs, uploadedarrayOptions.fac);
        createTable2(uploadedarrayOptions.media, uploadedarrayOptions.moda, uploadedarrayOptions.mediana, uploadedarrayOptions.totalInputs);
        createChart(uploadedarrayOptions.labels, uploadedarrayOptions.researchName, uploadedarrayOptions.countedFi, uploadedarrayOptions.type);
    } else {
        createHeader(inputed);
        createTable(uploadedarrayOptions.countedElements, uploadedarrayOptions.totalInputs, uploadedarrayOptions.fac);
        createTable2(uploadedarrayOptions.media, uploadedarrayOptions.moda, uploadedarrayOptions.mediana, uploadedarrayOptions.totalInputs);
        createChart(uploadedarrayOptions.noRepeats, uploadedarrayOptions.researchName, uploadedarrayOptions.countedFi, uploadedarrayOptions.type);
    }

    console.log(uploadedarrayOptions);
*/
} 
    





























