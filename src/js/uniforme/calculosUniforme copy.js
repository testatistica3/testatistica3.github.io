//variável usada na função de validação de dados informados pelo usuário.
let valid = false

//Função que valida os dados informados pelo usuário dinamicamente. Caso ocorra um erro,
//define o valor valid = false. Do contrário, define o valor de valid = true.
function validation() {

    if (uniformeMinimo.value == '' || uniformeMaximo.value == '') {
        alert('Erro! Por favor insira os valores.')
        uniformeMinimo.focus()
        valid = false
        return
    }
    if (uniformeSelect.value == '') {
        alert('Erro! Por favor escolha uma opção.')
        valid = false
        return
    }
    if (uniformeSelect.value == 'Maior que' || uniformeSelect.value == 'Menor que') {
        if (uniformeMaiorOuMenorQue.value == '') {
            alert('Erro! Por favor insira o valor a ser calculado.')
            uniformeMaiorOuMenorQue.focus()
            valid = false
            return
        }
    }
    if (uniformeSelect.value == 'Entre dois valores') {
        if (uniformeValor1.value == '' || uniformeValor2.value == '') {
            alert('Erro! Por favor insira o valor a ser calculado.')
            uniformeValor1.focus()
            valid = false
            return
        }
    }
    valid = true
}



//Função que, caso o valor de valid = true, executa os cálculos matemáticos, colocando os
//resultados dentro do objeto de armazenamento, e então exibindo na tela do usuário
//os resultados obtidos.
function calcularUniforme() {
    validation()
    if (valid) {
        if (uniformeSelect.value == 'Maior que') {
            uniformeOptions.distancia = uniformeOptions.maximo - uniformeOptions.maiorMenorQue
            let temp = ((1 / (uniformeOptions.maximo - uniformeOptions.minimo)) * uniformeOptions.distancia) * 100
            uniformeOptions.probabilidade = temp.toFixed(2) + '  %'
        }
        if (uniformeSelect.value == 'Menor que') {
            uniformeOptions.distancia = uniformeOptions.maiorMenorQue - uniformeOptions.minimo
            let temp = ((1 / (uniformeOptions.maximo - uniformeOptions.minimo)) * uniformeOptions.distancia) * 100
            uniformeOptions.probabilidade = temp.toFixed(2) + ' %'
        }
        if (uniformeSelect.value == 'Entre dois valores') {
            uniformeOptions.distancia = uniformeOptions.uniformeValor2 - uniformeOptions.uniformeValor1
            let temp = ((1 / (uniformeOptions.maximo - uniformeOptions.minimo)) * uniformeOptions.distancia) * 100
            uniformeOptions.probabilidade = temp.toFixed(2) + ' %'
        }
        uniformeOptions.media = (uniformeOptions.maximo + uniformeOptions.minimo) / 2
        let variancia = Math.pow(uniformeOptions.maximo - uniformeOptions.minimo, 2) / 12
        uniformeOptions.variancia = variancia + ' %'
        let desvioPadrao = Math.sqrt(Math.pow(uniformeOptions.maximo - uniformeOptions.minimo, 2) / 12)
        uniformeOptions.desvio = desvioPadrao.toFixed(2) + ' %'
        console.log(uniformeOptions);

        tableResult.style.display = 'block'
        uniformeProbabilidade.innerText = `${uniformeOptions.probabilidade}`
        uniformeVariancia.innerText = ` ${uniformeOptions.variancia}`
        uniformeDesvioPadrao.innerText = `${uniformeOptions.desvio}`
        uniformeMedia.innerText = `${uniformeOptions.media}`
    }
}

//Função que limpa todos os campos do formulário.
function limparUniforme(){
    uniformeMinimo.value = ''
    uniformeMaximo.value = ''
    uniformeMaiorOuMenorQue.value = ''
    uniformeValor1.value = ''
    uniformeValor2.value = ''
    uniformeMinimo.focus()
}