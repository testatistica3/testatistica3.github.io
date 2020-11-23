//Função que chama a função calculateOptions para depois exibi-las na tela do usuário.
function calcularCorrelacao() {
    if (correlacaoManual.checked) {
        calculateOptions()

        tableResult.style.display = 'block'
        valorCorrelacao.innerText = `${correlacaoOptions.r.toFixed(2)}%`
        forcaCorrelacao.innerText = `${correlacaoOptions.forca}`
        regressaoFormula.innerText = `${correlacaoOptions.regressao.formula}`
        regressao.style.display = 'block'
    }
    if (correlacaoUpload.checked) {
        calculateUploadOptions()

        tableResult.style.display = 'block'
        valorCorrelacao.innerText = `${uploaded.r.toFixed(2)}%`
        forcaCorrelacao.innerText = `${uploaded.forca}`
        regressaoFormula.innerText = `${uploaded.regressao.formula}`
        regressao.style.display = 'block'
    }

}

//Função que soma todos os elementos de um array e retorna o valor dessa soma.
function somatorio(array) {
    let temp = array.reduce((acumulator, current) => acumulator + current)
    return temp
}

//Função que recebe dois arrays como parâmetro e multiplica o elemento do primeiro array
//pelo elemento de mesmo index do segundo array. Depois disso o resultado é colocado em
//um array vazio, que após o término dos cálculos é retornado.
function multiplicaArrays(array1, array2) {
    let result = []
    for (let i = 0; i < array1.length; i++) {
        result.push(array1[i] * array2[i])
    }
    return result
}

//Função que eleva ao quadrado cada elemento do array recebido como parâmetro. Os valores são inseridos em um novo
//array e então retornado.
function potencializaArray(array) {
    let result = []
    for (let i of array) {
        result.push(Math.pow(i, 2))
    }
    return result
}

//Função que calcula o valor de R, que posteriormente é usado para encontrar o valor de referência na tabela.
function calculaR(somatoriox, somatorioy, somatorioxy, somatoriox2, somatorioy2, n) {
    let dividendo = (n * somatorioxy) - (somatoriox * somatorioy)
    let divisorParte1 = Math.sqrt((n * somatoriox2) - Math.pow(somatoriox, 2))
    let divisorParte2 = Math.sqrt((n * somatorioy2) - Math.pow(somatorioy, 2))
    let divisorFinal = divisorParte1 * divisorParte2

    let r = dividendo / divisorFinal

    return r
}
//Função que calcula e retorna a expressão matemática de regressão.
function calculaRegressao(n, somatorioxy, somatoriox, somatorioy, somatoriox2) {
    let a = (((n * somatorioxy) - (somatoriox * somatorioy))) / ((n * somatoriox2) - Math.pow(somatoriox, 2))

    let y = somatorioy / n
    let x = somatoriox / n
    let b = y - (a * x)
    let regressao = {
        formula: `y = ${a.toFixed(2)}x + ${b.toFixed(2)}`,
        a: a,
        b: b
    }
    return regressao
}

//Função que calcula a força da correlação entre dois conjuntos de dados.
function calculaForca(value) {
    if (value < 0) {
        value *= -1
    }
    if (value == 100) {
        let forca = 'Perfeita'
        return forca
    } else if (value == 0) {
        let forca = 'Variáveis não correlacionadas'
        return forca
    } else if (0 < value && value < 30) {
        let forca = 'Fraca'
        return forca
    } else if (value >= 30 && value < 70) {
        let forca = 'Moderada'
        return forca
    } else if (value >= 70 && value < 100) {
        let forca = 'Forte'
        return forca
    }
}

function storeRegressaoX(value) {
    if (correlacaoManual.checked) {
        correlacaoOptions.regressaoX = value
        regressaoY.value = ''
    }
    if (correlacaoUpload.checked) {
        uploaded.regressaoX = value
        regressaoY.value = ''
    }
}

function storeRegressaoY(value) {
    if (correlacaoManual.checked) {
        correlacaoOptions.regressaoY = value
        regressaoX.value = ''
    }
    if (correlacaoUpload.checked) {
        uploaded.regressaoY = value
        regressaoX.value = ''
    }
}



function calculateRegressao() {
    if (correlacaoManual.checked) {
        regressaoResult.innerText = ''
        if (regressaoX.value !== '') {
            let y = (correlacaoOptions.regressao.a * regressaoX.value) + correlacaoOptions.regressao.b
            regressaoResult.innerText = `Y = ${y.toFixed(2)}`
        }
        if (regressaoY.value !== '') {
            let x = (regressaoY.value - correlacaoOptions.regressao.b) / correlacaoOptions.regressao.a
            regressaoResult.innerText = `X = ${x.toFixed(2)}`
        }
    }

    if (correlacaoUpload.checked) {
        regressaoResult.innerText = ''
        if (regressaoX.value !== '') {
            let y = (uploaded.regressao.a * regressaoX.value) + uploaded.regressao.b
            regressaoResult.innerText = `Y = ${y.toFixed(2)}`
        }
        if (regressaoY.value !== '') {
            let x = (regressaoY.value - uploaded.regressao.b) / uploaded.regressao.a
            regressaoResult.innerText = `X = ${x.toFixed(2)}`
        }

    }



    if (regressaoY) {
        console.log('Y');
    } else if (regressaoX) {
        console.log(X);
    }
}


//Função que usa a expressão obtida através da função calculaRegressao() e mostra dinamicamente na tela o valor
//do resultado dessa expressão através do campo X digitado pelo usuário.
function calculateRegressaoX(value) {
    regressaoResult.innerText = ''
    regressaoY.value = ''

    if (correlacaoManual.checked) {
        regressaoResult.innerText = ''
        let y = (correlacaoOptions.regressao.a * value) + correlacaoOptions.regressao.b
        // regressaoResult.innerText = `Y = ${y.toFixed(2)}`
        return y
    }

    if (correlacaoUpload.checked) {
        regressaoResult.innerText = ''
        let y = (uploaded.regressao.a * value) + uploaded.regressao.b
        // regressaoResult.innerText = `Y = ${y.toFixed(2)}`
        return y
    }

}

//Função que usa a expressão obtida através da função calculaRegressao() e mostra dinamicamente na tela o valor
//do resultado dessa expressão através do campo Y digitado pelo usuário.
function calculateRegressaoY(value) {
    regressaoResult.innerText = ''
    regressaoX.value = ''

    if (correlacaoManual.checked) {
        regressaoResult.innerText = ''
        let x = (value - correlacaoOptions.regressao.b) / correlacaoOptions.regressao.a
        regressaoResult.innerText = `X = ${x.toFixed(2)}`
        return x
    }
    if (correlacaoUpload.checked) {
        regressaoResult.innerText = ''
        let x = (value - uploaded.regressao.b) / uploaded.regressao.a
        regressaoResult.innerText = `X = ${x.toFixed(2)}`
        return x
    }
}

//Função que cria um array de objetos para serem inseridos no gráfico.
function createObjectArray(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push({
            x: arr1[i],
            y: arr2[i]
        })
    }
    return result
};


//Função que executa vários cálculos matemáticos e coloca os resultados como parâmetros de um objeto.
//Esse objeto é então usado para as funções que exibem os resultados na tela para o usuário.
function calculateOptions() {
    let arrayMultiplicado = multiplicaArrays(correlacaoOptions.x, correlacaoOptions.y)
    let arrayXPotencializado = potencializaArray(correlacaoOptions.x)
    let arrayYPotencializado = potencializaArray(correlacaoOptions.y)
    correlacaoOptions.somatorioX = somatorio(correlacaoOptions.x)
    correlacaoOptions.somatorioY = somatorio(correlacaoOptions.y)
    correlacaoOptions.somatorioXY = somatorio(arrayMultiplicado)
    correlacaoOptions.somatorioXQuadrado = somatorio(arrayXPotencializado)
    correlacaoOptions.somatorioYQuadrado = somatorio(arrayYPotencializado)
    correlacaoOptions.n = correlacaoOptions.x.length

    correlacaoOptions.r = calculaR(correlacaoOptions.somatorioX, correlacaoOptions.somatorioY, correlacaoOptions.somatorioXY, correlacaoOptions.somatorioXQuadrado, correlacaoOptions.somatorioYQuadrado, correlacaoOptions.n) * 100

    correlacaoOptions.regressao = calculaRegressao(correlacaoOptions.n, correlacaoOptions.somatorioXY, correlacaoOptions.somatorioX, correlacaoOptions.somatorioY, correlacaoOptions.somatorioXQuadrado)
    correlacaoOptions.forca = calculaForca(correlacaoOptions.r)

    correlacaoOptions.chartData = createObjectArray(correlacaoOptions.x, correlacaoOptions.y)
    correlacaoOptions.chartColors = createHexCodeArray(correlacaoOptions.x)
    correlacaoOptions.data2 = linhaRegressao(correlacaoOptions.x)


    createChartCorrelacao(correlacaoOptions.chartData, correlacaoOptions.chartColors, correlacaoOptions.data2)

    console.log(correlacaoOptions);
}

function calculateUploadOptions() {
    uploaded.x = variavelGlobalCorrelacao.a.slice(1)
    uploaded.y = variavelGlobalCorrelacao.b.slice(1)

    let arrayMultiplicado = multiplicaArrays(uploaded.x, uploaded.y)
    let arrayXPotencializado = potencializaArray(uploaded.x)
    let arrayYPotencializado = potencializaArray(uploaded.y)

    uploaded.somatorioX = somatorio(uploaded.x)
    uploaded.somatorioY = somatorio(uploaded.y)
    uploaded.somatorioXY = somatorio(arrayMultiplicado)
    uploaded.somatorioXQuadrado = somatorio(arrayXPotencializado)
    uploaded.somatorioYQuadrado = somatorio(arrayYPotencializado)
    uploaded.n = uploaded.x.length

    uploaded.r = calculaR(uploaded.somatorioX, uploaded.somatorioY, uploaded.somatorioXY, uploaded.somatorioXQuadrado, uploaded.somatorioYQuadrado, uploaded.n) * 100

    uploaded.regressao = calculaRegressao(uploaded.n, uploaded.somatorioXY, uploaded.somatorioX, uploaded.somatorioY, uploaded.somatorioXQuadrado)
    uploaded.forca = calculaForca(uploaded.r)

    uploaded.chartData = createObjectArray(uploaded.x, uploaded.y)
    uploaded.chartColors = createHexCodeArray(uploaded.x)
    uploaded.data2 = linhaRegressao(uploaded.x)

    createChartCorrelacao(uploaded.chartData, uploaded.chartColors, uploaded.data2)

    console.log(uploaded);
}

function linhaRegressao(arr) {
    let valores = arr.sort((a,b) => a-b)
    let inicioX = valores[0]
    let inicioY = calculateRegressaoX(inicioX)
    let fimX = valores[arr.length - 1]
    let fimY = calculateRegressaoX(fimX)

    let coordenadas = [
        { x: inicioX, y: inicioY },
        { x: fimX, y: fimY }
    ]

    return coordenadas
}