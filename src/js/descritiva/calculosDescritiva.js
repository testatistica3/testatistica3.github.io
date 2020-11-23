//Função que transforma, quando possível, os elementos de um vetor em números.
function parseArray(arr) {
    let temp = [];
    for (let i of arr) { !isNaN(i) ? temp.push(+i) : temp.push(i) };
    return temp
}

//Função que calcula a média.
function calculateMediaDiscreta(obj, total) {
    let objKeys = Object.keys(obj)
    let objValues = Object.values(obj)
    let y = parseArray(objKeys)
    let soma = 0
    for (let i = 0; i < y.length; i++) {
        soma += y[i] * objValues[i]
    }
    let z = soma / total
    let media = z.toFixed(2)
    
    return media
}

//Função que calcula a moda 
function calculateModa(obj) {
    let inicio = 0, valoresModa = []
    let objKeys = Object.keys(obj)
    objValues = Object.values(obj)
    jj = objValues[0]
    const allEqual = objValues.every(e => e === jj)
    if (allEqual){
        return moda = 'Não possui moda'
    }else {
        for (let i = 0; i <= objValues.length - 1; i++){
            if(objValues[i] > inicio){
                inicio = objValues[i]
            }
        }
    }
    for (let i = 0; i <= objValues.length - 1; i++){
        if (objValues[i] === inicio){
            valoresModa.push(objKeys[i])
        }
    }
    return valoresModa
};

//Função que calcula a mediana. 
function calculateMediana(total, fac, obj){
    let objKeys = Object.keys(obj)
    let objValues = Object.values(obj)
    let inicio = 0
    let result

    if(total % 2 === 0){
        result =  total / 2;//10, 11
        for (let i = 0; i < fac.length; i++) {
            if (result > inicio && result <= fac[i]) {
                if(result + 1 > inicio && result + 1 <= fac[i]){
                    return `${objKeys[i]}`
                }else{
                    return `${objKeys[i]} e ${objKeys[i + 1]}`
                }
            } 
        }
    }else {//ímpar => 10
        result = Math.round(total / 2) 
        for (let i = 0; i < fac.length; i++) {
            if (result >= inicio && result <= fac[i]) {
                return objKeys[i]
            }
        }
    }
};



//Função que calcula o total de valores informados
function calculateTotalInputs(arr) {
    let totalInputs = 0
    for (let i of arr) {
        totalInputs++
    }
    return totalInputs;
};

function countFi(obj) {
    let result = [];
    for (let i in obj) {
        result.push(obj[i])
    }
    return result
};

//Função que calcula quantas vezes cada valor aparece nos dados informados
function countElements(arr) {
    var occurrences = arr.reduce(function (obj, item) {
        obj[item] = (obj[item] || 0) + 1;
        return obj;
    }, {});
    return occurrences
};

//Função que retorna um objeto contendo a quantidade de vezes que um elemento aparece dentro do vetor.
function countOrdinal(a, b) {
    var matches = {};
    let objKeys = Object.keys(a)
    let objValues = Object.values(a)
    for (var i = 0; i < objKeys.length; i++) {
        for (var e = 0; e < b.length; e++) {
            if (objKeys[i] === b[e]) matches[`${b[i]}`] = objValues[i];
        }
    }
    return matches;
}

//Função que calcula o Fac.
function calculateFac(obj, fiValues) {
    let temp = [];
    let count = 0;
    let totalFac = fiValues[0];
    for(let i in obj){
        temp.push(totalFac);
        count++;
        totalFac+= fiValues[count];
    };
    return temp;
};

//Função que calcula o Desvio Padrão.
function calculateDesvioPadrao(obj, media, total){
    let objKeys = Object.keys(obj)
    let objValues = Object.values(obj)
    let c = []; let n = 0; let result = {};
    
    for(let i = 0; i <= objValues.length - 1; i++){
        let b = Math.pow((objKeys[i] - media), 2) * objValues[i]
        c.push(b)
    }
    for(let i of c){
        n += i
    }
    let variancia = n / total
    result.desvioPadrao = Math.sqrt(variancia).toFixed(2)
    result.coeficienteVariacao = ((result.desvioPadrao / media) * 100).toFixed(2) + '%'
    return result
};

//Função que calcula o valor do Quartil.
function calculateQuartil(total, value, fac, noRepeat){
    let result = {}, inicio = 0, quartilValue = value * 25
    
    result.posicao = Math.round((total / 100) * quartilValue)
    for(let i = 0; i <= fac.length - 1; i++){
        if (result.posicao > inicio && result.posicao <= fac[i]){
            result.quartil = noRepeat[i]
        }
        inicio = fac[i]
    }
    result.quartilValue = quartilValue + '%'
    return result
};

//Função que calcula o valor do Quintil.
function calculateQuintil(total, value, fac, noRepeat){
    let result = {}, inicio = 0, quartilValue = value * 20

    result.posicao = Math.round((total / 100) * quartilValue)
    for (let i = 0; i <= fac.length - 1; i++) {
        if (result.posicao > inicio && result.posicao <= fac[i]) {
            result.quintil = noRepeat[i]
        }
        inicio = fac[i]
    }
    result.quintilValue = quartilValue + '%'
    return result
};

//Função que calcula o valor do Decil.
function calculateDecil(total, value, fac, noRepeat){
    let result = {}, inicio = 0, quartilValue = value * 10

    result.posicao = Math.round((total / 100) * quartilValue)
    for (let i = 0; i <= fac.length - 1; i++) {
        if (result.posicao > inicio && result.posicao <= fac[i]) {
            result.decil = noRepeat[i]
        }
        inicio = fac[i]
    }
    result.decilValue = quartilValue + '%'
    return result
};

//Função que calcula o valor do Porcentil.
function calculatePorcentil(total, value, fac, noRepeat){
    let result = {}, inicio = 0, quartilValue = value * 1

    result.posicao = Math.round((total / 100) * quartilValue)
    for (let i = 0; i <= fac.length - 1; i++) {
        if (result.posicao > inicio && result.posicao <= fac[i]) {
            result.porcentil = noRepeat[i]
        }else if(result.posicao === 0){
            result.porcentil = noRepeat[0]
        }
        inicio = fac[i]
    }
    result.porcentilValue = quartilValue + '%'
    return result
};

//Função que calcula a porcentagem com base no vetor Fr.
function calculateFrPercent(arr, total){
    let bb = []
    for(let i = 0; i < arr.length; i++){
        bb.push(arr[i] / total * 100)
    }
    return bb
}