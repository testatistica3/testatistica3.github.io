//Função que guarda os valores informados no input de valores.
function storeInputedData(value) {
    let result = value.replace(/ /g, "").replace(/,/g, ".").split(';');
    inputed.inputedValues = parseArray(result)
}

//Função que guarda os valores informados no input de nome da pesquisa.
function storeResearchName(value) {
    inputed.researchName = value
}

//Função que guarda os valores informados no input de ordem dos elementos.
function storeOrderOrdinal(value) {
    let result = value.replace(/; /g, ';').replace(/,/g, ".").split(';');
    if(descritivaManualRadio.checked){
    inputed.ordinalOrder = parseArray(result)
    }
    if(uploadDescritivaRadio.checked){
    uploaded.ordinalOrder = parseArray(result)
    }
}

//Função que realiza cálculos e guarda os valores no objeto de referência.
function storeInputedObjectValues() {
    inputed.countedElements = countElements(inputed.inputedValues);
    inputed.noRepeats = [...new Set(inputed.inputedValues)]
    inputed.totalInputs = calculateTotalInputs(inputed.inputedValues);
    inputed.countedFi = countFi(inputed.countedElements)
    inputed.frPercent = calculateFrPercent(inputed.countedFi, inputed.totalInputs);
    inputed.fac = calculateFac(inputed.countedElements, inputed.countedFi);
    inputed.mediana = calculateMediana(inputed.totalInputs, inputed.fac, inputed.countedElements);
}

function storeUploadedObjectValues(arr){
    uploaded.researchName = arr[0]
    uploaded.inputedValues = arr.slice(1)
    uploaded.countedElements = countElements(uploaded.inputedValues);
    uploaded.noRepeats = [...new Set(uploaded.inputedValues)]
    uploaded.totalInputs = calculateTotalInputs(uploaded.inputedValues);
    uploaded.countedFi = countFi(uploaded.countedElements)
    uploaded.frPercent = calculateFrPercent(uploaded.countedFi, uploaded.totalInputs);
    uploaded.fac = calculateFac(uploaded.countedElements, uploaded.countedFi);
    uploaded.mediana = calculateMediana(uploaded.totalInputs, uploaded.fac, uploaded.countedElements);
}

//Função que realiza cálculos e guarda os valores no objeto de referência quando
//a opção nominal é escolhida.
function storeInputedObjectValuesNominal() {
    inputed.media = 'Não possui média'
    inputed.type = 'pie';
    inputed.colors = createHexCodeArray(inputed.countedFi);
    inputed.moda = calculateModa(inputed.countedElements);
    inputed.desvioPadrao = 'Não possui desvio';
    inputed.coeficienteVariacao = 'Não possui coeficiente de variação';
    inputed.quartil = calculateQuartil(inputed.totalInputs, quartilOptions.value, inputed.fac, inputed.noRepeats);
    inputed.quintil = calculateQuintil(inputed.totalInputs, quintilOptions.value, inputed.fac, inputed.noRepeats);
    inputed.decil = calculateDecil(inputed.totalInputs, decilOptions.value, inputed.fac, inputed.noRepeats);
    inputed.porcentil = calculatePorcentil(inputed.totalInputs, porcentilOptions.value, inputed.fac, inputed.noRepeats);

    if (separatrizes.value === 'Quartil') {
        inputed.separatriz = inputed.quartil.quartil
    } else if (separatrizes.value === 'Quintil') {
        inputed.separatriz = inputed.quintil.quintil
    } else if (separatrizes.value === 'Decil') {
        inputed.separatriz = inputed.decil.decil
    } else if (separatrizes.value === 'Porcentil') {
        inputed.separatriz = inputed.porcentil.porcentil
    } else {
        inputed.separatriz = 'Não escolhida'
    }

    var options = {
        responsive: true,
        legend:{
            position: 'botton'
        },
        plugins: {
            datalabels: {
                color: '#000',
                font: {
                    weight: 'bold',
                    size: '15'
                },
                formatter: (value) => {
                    let result = (value / inputed.totalInputs * 100)
                    return result.toFixed(2) + '%'
                }
            }
        }
    }
    
    inputed.options = options
}

function storeUploadedObjectValuesNominal() {
    uploaded.media = 'Não possui média'
    uploaded.type = 'pie';
    uploaded.colors = createHexCodeArray(uploaded.countedFi);
    uploaded.moda = calculateModa(uploaded.countedElements);
    uploaded.desvioPadrao = 'Não possui desvio';
    uploaded.coeficienteVariacao = 'Não possui coeficiente de variação';
    uploaded.quartil = calculateQuartil(uploaded.totalInputs, quartilOptions.value, uploaded.fac, uploaded.noRepeats);
    uploaded.quintil = calculateQuintil(uploaded.totalInputs, quintilOptions.value, uploaded.fac, uploaded.noRepeats);
    uploaded.decil = calculateDecil(uploaded.totalInputs, decilOptions.value, uploaded.fac, uploaded.noRepeats);
    uploaded.porcentil = calculatePorcentil(uploaded.totalInputs, porcentilOptions.value, uploaded.fac, uploaded.noRepeats);

    if (separatrizes.value === 'Quartil') {
        uploaded.separatriz = uploaded.quartil.quartil
    } else if (separatrizes.value === 'Quintil') {
        uploaded.separatriz = uploaded.quintil.quintil
    } else if (separatrizes.value === 'Decil') {
        uploaded.separatriz = uploaded.decil.decil
    } else if (separatrizes.value === 'Porcentil') {
        uploaded.separatriz = uploaded.porcentil.porcentil
    } else {
        uploaded.separatriz = 'Não escolhida'
    }

    var options = {
        responsive: true,
        plugins: {
            datalabels: {
                color: '#000',
                font: {
                    weight: 'bold',
                    size: '15'
                },
                formatter: (value) => {
                    console.log(value);
                    let result = (value / uploaded.totalInputs * 100)
                    return result.toFixed(2) + '%'
                }
            }
        }
    }
    uploaded.options = options
}

//Função que realiza cálculos e guarda os valores no objeto de referência quando
//a opção ordinal é escolhida.
function storeInputedObjectValuesOrdinal() {
    inputed.countedOrdinal = countOrdinal(inputed.countedElements, inputed.ordinalOrder);
    inputed.countedFiOrdinal = countFi(inputed.countedOrdinal)
    inputed.facOrdinal = calculateFac(inputed.countedOrdinal, inputed.countedFiOrdinal);
    inputed.media = 'Não possui média';
    inputed.moda = calculateModa(inputed.countedOrdinal);
    inputed.mediana = calculateMediana(inputed.totalInputs, inputed.facOrdinal, inputed.countedOrdinal);
    inputed.type = 'pie';
    inputed.colors = createHexCodeArray(inputed.countedFiOrdinal);
    inputed.desvioPadrao = 'Não possui desvio';
    inputed.coeficienteVariacao = 'Não possui coeficiente de variação';
    inputed.quartil = calculateQuartil(inputed.totalInputs, quartilOptions.value, inputed.facOrdinal, inputed.ordinalOrder);
    inputed.quintil = calculateQuintil(inputed.totalInputs, quintilOptions.value, inputed.facOrdinal, inputed.ordinalOrder);
    inputed.decil = calculateDecil(inputed.totalInputs, decilOptions.value, inputed.facOrdinal, inputed.ordinalOrder);
    inputed.porcentil = calculatePorcentil(inputed.totalInputs, porcentilOptions.value, inputed.facOrdinal, inputed.ordinalOrder);

    if (separatrizes.value === 'Quartil') {
        inputed.separatriz = inputed.quartil.quartil
    } else if (separatrizes.value === 'Quintil') {
        inputed.separatriz = inputed.quintil.quintil
    } else if (separatrizes.value === 'Decil') {
        inputed.separatriz = inputed.decil.decil
    } else if (separatrizes.value === 'Porcentil') {
        inputed.separatriz = inputed.porcentil.porcentil
    } else {
        inputed.separatriz = 'Não escolhida'
    }

    var options2 = {
        responsive: true,
        plugins: {
            datalabels: {
                color: '#000',
                font: {
                    weight: 'bold',
                    size: '15'
                },
                formatter: (value) => {
                    console.log(value);
                    let result = (value / inputed.totalInputs * 100)
                    return result.toFixed(2) + '%'
                }
            }
        }
    }
    
    inputed.options = options2
}

function storeUploadedObjectValuesOrdinal() {
    uploaded.countedOrdinal = countOrdinal(uploaded.countedElements, uploaded.ordinalOrder);
    uploaded.countedFiOrdinal = countFi(uploaded.countedOrdinal)
    uploaded.facOrdinal = calculateFac(uploaded.countedOrdinal, uploaded.countedFiOrdinal);
    uploaded.media = 'Não possui média';
    uploaded.moda = calculateModa(uploaded.countedOrdinal);
    uploaded.mediana = calculateMediana(uploaded.totalInputs, uploaded.facOrdinal, uploaded.countedOrdinal);
    uploaded.type = 'pie';
    uploaded.colors = createHexCodeArray(uploaded.countedFiOrdinal);
    uploaded.desvioPadrao = 'Não possui desvio';
    uploaded.coeficienteVariacao = 'Não possui coeficiente de variação';
    uploaded.quartil = calculateQuartil(uploaded.totalInputs, quartilOptions.value, uploaded.facOrdinal, uploaded.ordinalOrder);
    uploaded.quintil = calculateQuintil(uploaded.totalInputs, quintilOptions.value, uploaded.facOrdinal, uploaded.ordinalOrder);
    uploaded.decil = calculateDecil(uploaded.totalInputs, decilOptions.value, uploaded.facOrdinal, uploaded.ordinalOrder);
    uploaded.porcentil = calculatePorcentil(uploaded.totalInputs, porcentilOptions.value, uploaded.facOrdinal, uploaded.ordinalOrder);

    if (separatrizes.value === 'Quartil') {
        uploaded.separatriz = uploaded.quartil.quartil
    } else if (separatrizes.value === 'Quintil') {
        uploaded.separatriz = uploaded.quintil.quintil
    } else if (separatrizes.value === 'Decil') {
        uploaded.separatriz = uploaded.decil.decil
    } else if (separatrizes.value === 'Porcentil') {
        uploaded.separatriz = uploaded.porcentil.porcentil
    } else {
        uploaded.separatriz = 'Não escolhida'
    }

    var options22 = {
        responsive: true,
        plugins: {
            datalabels: {
                color: '#000',
                font: {
                    weight: 'bold',
                    size: '15'
                },
                formatter: (value) => {
                    console.log(value);
                    let result = (value / uploaded.totalInputs * 100)
                    return result + '%'
                }
            }
        }
    }
    uploaded.options = options22
}

//Função que realiza cálculos e guarda os valores no objeto de referência quando
//a opção discreta é escolhida.
function storeInputedObjectValuesDiscreta(){
    inputed.media = calculateMediaDiscreta(inputed.countedElements, inputed.totalInputs);

    inputed.type = 'bar';

    inputed.moda = calculateModa(inputed.countedElements);

    inputed.colors = createHexCodeArray(inputed.countedFi);

    inputed.mediana = calculateMediana(inputed.totalInputs, inputed.fac, inputed.countedElements);

    if(populacao.checked){
        let jj = calculateDesvioPadrao(inputed.countedElements, inputed.media, inputed.totalInputs);
        inputed.desvioPadrao = jj.desvioPadrao;
        inputed.coeficienteVariacao = jj.coeficienteVariacao;
    }else if(amostra.checked){
        let jj = calculateDesvioPadrao(inputed.countedElements, inputed.media, (inputed.totalInputs - 1));
        inputed.desvioPadrao = jj.desvioPadrao;
        inputed.coeficienteVariacao = jj.coeficienteVariacao;
    }

    inputed.quartil = calculateQuartil(inputed.totalInputs, quartilOptions.value, inputed.fac, inputed.noRepeats);

    inputed.quintil = calculateQuintil(inputed.totalInputs, quintilOptions.value, inputed.fac, inputed.noRepeats);

    inputed.decil = calculateDecil(inputed.totalInputs, decilOptions.value, inputed.fac, inputed.noRepeats);

    inputed.porcentil = calculatePorcentil(inputed.totalInputs, porcentilOptions.value, inputed.fac, inputed.noRepeats);

    if (separatrizes.value === 'Quartil') {
        inputed.separatriz = inputed.quartil.quartil
    } else if (separatrizes.value === 'Quintil') {
        inputed.separatriz = inputed.quintil.quintil
    } else if (separatrizes.value === 'Decil') {
        inputed.separatriz = inputed.decil.decil
    } else if (separatrizes.value === 'Porcentil') {
        inputed.separatriz = inputed.porcentil.porcentil
    } else {
        inputed.separatriz = 'Não escolhida'
    }

    inputed.options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    
}

function storeUploadedObjectValuesDiscreta(){
    uploaded.media = calculateMediaDiscreta(uploaded.countedElements, uploaded.totalInputs);

    uploaded.type = 'bar';

    uploaded.moda = calculateModa(uploaded.countedElements);

    uploaded.colors = createHexCodeArray(uploaded.countedFi);

    uploaded.mediana = calculateMediana(uploaded.totalInputs, uploaded.fac, uploaded.countedElements);

    if(populacao.checked){
        let jj = calculateDesvioPadrao(uploaded.countedElements, uploaded.media, uploaded.totalInputs);
        uploaded.desvioPadrao = jj.desvioPadrao;
        uploaded.coeficienteVariacao = jj.coeficienteVariacao;
    }else if(amostra.checked){
        let jj = calculateDesvioPadrao(uploaded.countedElements, uploaded.media, (uploaded.totalInputs - 1));
        uploaded.desvioPadrao = jj.desvioPadrao;
        uploaded.coeficienteVariacao = jj.coeficienteVariacao;
    }

    uploaded.quartil = calculateQuartil(uploaded.totalInputs, quartilOptions.value, uploaded.fac, uploaded.noRepeats);

    uploaded.quintil = calculateQuintil(uploaded.totalInputs, quintilOptions.value, uploaded.fac, uploaded.noRepeats);

    uploaded.decil = calculateDecil(uploaded.totalInputs, decilOptions.value, uploaded.fac, uploaded.noRepeats);

    uploaded.porcentil = calculatePorcentil(uploaded.totalInputs, porcentilOptions.value, uploaded.fac, uploaded.noRepeats);

    if (separatrizes.value === 'Quartil') {
        uploaded.separatriz = uploaded.quartil.quartil
    } else if (separatrizes.value === 'Quintil') {
        uploaded.separatriz = uploaded.quintil.quintil
    } else if (separatrizes.value === 'Decil') {
        uploaded.separatriz = uploaded.decil.decil
    } else if (separatrizes.value === 'Porcentil') {
        uploaded.separatriz = uploaded.porcentil.porcentil
    } else {
        uploaded.separatriz = 'Não escolhida'
    }

    uploaded.options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    
}

//Função que realiza cálculos e guarda os valores no objeto de referência quando
//a opção continua é escolhida.
function storeInputedObjectValuesContinua(){
    let x = calculateContinua(inputed.inputedValues, inputed.totalInputs);

            inputed.amplitude = x.amplitude;

            inputed.linhas = x.linhas;

            inputed.intervalo = x.intervalo;

            inputed.type = 'bar';

            inputed.colors = createHexCodeArray(inputed.countedFi);

            inputed.pontoMedioContinua = calculatePontoMedioIntContinua(inputed.noRepeats, inputed.intervalo, inputed.linhas);

            inputed.countedFi = calculateFiContinua(inputed.pontoMedioContinua.valor1, inputed.linhas, inputed.inputedValues, inputed.intervalo);

            inputed.media = calculateMediaContinua(inputed.pontoMedioContinua.media, inputed.countedFi, inputed.totalInputs);

            inputed.fac = calculateFacContinua(inputed.linhas, inputed.countedFi);
            
            inputed.moda = calculateModaContinua(inputed.pontoMedioContinua.media,inputed.countedFi);

            inputed.mediana = calculateMedianaContinua(inputed.pontoMedioContinua.valor1, inputed.totalInputs, inputed.fac, inputed.countedFi, inputed.intervalo);

            inputed.labels = createChartLabels(inputed.pontoMedioContinua.valor1, inputed.pontoMedioContinua.valor2, inputed.linhas);

            if(populacao.checked){
                let jj = calculateDesvioContinua(inputed.pontoMedioContinua.media, inputed.media, inputed.totalInputs, inputed.countedFi);
                inputed.desvioPadrao = jj.desvioPadrao;
                inputed.coeficienteVariacao = jj.coeficienteVariacao;
            }else if(amostra.checked){
                let jj = calculateDesvioContinua(inputed.pontoMedioContinua.media, inputed.media, (inputed.totalInputs - 1), inputed.countedFi);
                inputed.desvioPadrao = jj.desvioPadrao;
                inputed.coeficienteVariacao = jj.coeficienteVariacao;
            }

            inputed.options = {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        categoryPercentage: 1.0,
                        barPercentage: 1.0
                    }]
                }
            }

            inputed.separatriz = calculateSeparatrizContinua(inputed.totalInputs, inputed.pontoMedioContinua.valor1, inputed.fac, inputed.countedFi, inputed.intervalo);
}

function storeUploadedObjectValuesContinua(){
    let x = calculateContinua(uploaded.inputedValues, uploaded.totalInputs);

    uploaded.amplitude = x.amplitude;

    uploaded.linhas = x.linhas;

    uploaded.intervalo = x.intervalo;

    uploaded.type = 'bar';

    uploaded.colors = createHexCodeArray(uploaded.countedFi);

    uploaded.pontoMedioContinua = calculatePontoMedioIntContinua(uploaded.noRepeats, uploaded.intervalo, uploaded.linhas);

    uploaded.countedFi = calculateFiContinua(uploaded.pontoMedioContinua.valor1, uploaded.linhas, uploaded.inputedValues, uploaded.intervalo);

    uploaded.media = calculateMediaContinua(uploaded.pontoMedioContinua.media, uploaded.countedFi, uploaded.totalInputs);

    uploaded.fac = calculateFacContinua(uploaded.linhas, uploaded.countedFi);
            
    uploaded.moda = calculateModaContinua(uploaded.pontoMedioContinua.media,uploaded.countedFi);

    uploaded.mediana = calculateMedianaContinua(uploaded.pontoMedioContinua.valor1, uploaded.totalInputs, uploaded.fac, uploaded.countedFi, uploaded.intervalo);

    uploaded.labels = createChartLabels(uploaded.pontoMedioContinua.valor1, uploaded.pontoMedioContinua.valor2, uploaded.linhas);

            if(populacao.checked){
                let jj = calculateDesvioContinua(uploaded.pontoMedioContinua.media, uploaded.media, uploaded.totalInputs, uploaded.countedFi);
                uploaded.desvioPadrao = jj.desvioPadrao;
                uploaded.coeficienteVariacao = jj.coeficienteVariacao;
            }else if(amostra.checked){
                let jj = calculateDesvioContinua(uploaded.pontoMedioContinua.media, uploaded.media, (uploaded.totalInputs - 1), uploaded.countedFi);
                uploaded.desvioPadrao = jj.desvioPadrao;
                uploaded.coeficienteVariacao = jj.coeficienteVariacao;
            }

            uploaded.options = {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        categoryPercentage: 1.0,
                        barPercentage: 1.0
                    }]
                }
            }

            uploaded.separatriz = calculateSeparatrizContinua(uploaded.totalInputs, uploaded.pontoMedioContinua.valor1, uploaded.fac, uploaded.countedFi, uploaded.intervalo);
}

