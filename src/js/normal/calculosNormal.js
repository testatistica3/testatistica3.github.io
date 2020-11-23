//Função que busca o valor informado na tabela de referência.
//de referência
function buscaValor(lista, objeto, fnComp, inicio = 0, fim = lista.length - 1) {
  if (fim >= inicio) {
    let meio = Math.floor((fim + inicio) / 2);

    let result = fnComp(lista[meio], objeto.linha);

    if (result == 0) {
      temp = lista[meio].coluna[objeto.coluna];
      return temp;
    } else if (result < 0) {
      return buscaValor(lista, objeto, fnComp, inicio, meio - 1);
    } else {
      return buscaValor(lista, objeto, fnComp, meio + 1, fim);
    }
  }
  return -1;
}

//Função que compara os valores. É executada dentro da função de busca acima.
function comparaValores(obj, valor) {
  if (valor == obj.linha) return 0;
  else if (valor < obj.linha) return -1;
  else return 1;
}

//Função que calcula o valor de Z da uma equação quando o usuário escolhe
//a opção "Maior que" ou "Menor que".
function calculateZ(value, media, desvio) {
  if (value >= media) {
    const z = ((value - media) / desvio).toFixed(2);
    console.log(z);
    const hh = z.toString();
    let jj = [...hh];
    const buscaLinha = jj[0] + jj[1] + jj[2];

    const buscaColuna = jj[3];

    const result = {};
    result.linha = buscaLinha;
    result.coluna = buscaColuna;
    console.log(result);

    const area = buscaValor(tabela, result, comparaValores);
    console.log(area);
    return area;
  } else if (value <= media) {
    const z = ((media - value) / desvio).toFixed(2);
    const hh = z.toString();
    let jj = [...hh];

    const buscaLinha = jj[0] + jj[1] + jj[2];

    const buscaColuna = jj[3];

    const result = {};
    result.linha = buscaLinha;
    result.coluna = buscaColuna;

    const area = buscaValor(tabela, result, comparaValores);
    area;
    return area;
  }
}

//Função que calcula o valor da probabilidade de uma equação quando o usuário escolhe a 
//opção "Entre dois números".
function entreDoisValores(primeiro, segundo, media, desvio) {
  console.log(primeiro);
  console.log(segundo);
  let result1 = calculateZ(primeiro, media, desvio);
  let result2 = calculateZ(segundo, media, desvio);
  console.log(result1);
  console.log(result2);
  if (primeiro > media) {
    let probabilidade = (result1 - result2) * 100;
    if (probabilidade < 0) {
      probabilidade = (probabilidade * -1).toFixed(2);
      probabilidade += "%";
    }
    return probabilidade;
  } else if (primeiro < media && segundo > media) {
    result1= calculateZ(primeiro, media, desvio)
    result2= calculateZ(segundo, media, desvio)
    let probabilidade = (result2 + result1) * 100 + "%";
    return probabilidade;
  } else if (primeiro < media && segundo < media) {
    let probabilidade = (result1 - result2) * 100 + "%";
    return probabilidade;
  } else if (primeiro < media) {
    let probabilidade = ((result1 + result2) * 100).toFixed(2) + "%";
    return probabilidade;
  } else if (primeiro == media) {
    const result2 = calculateZ(segundo, media, desvio);
    let probabilidade = (result2 * 100).toFixed(2) + "%";
    return probabilidade;
  }
}

//Função que calcula o valor de Z quando a opção escolhida é "Maior que"
function maisQue(valor, media, desvio) {
  if (valor < media) {
    let result = calculateZ(valor, media, desvio);
    let final = ((0.5 + result) * 100).toFixed(2) + "%";
    return final;
  } else if (valor > media) {
    let result = calculateZ(valor, media, desvio);
    let final = ((0.5 - result) * 100).toFixed(2) + "%";
    return final;
  }
}

//Função que calcula o valor de Z quando a opção escolhida é "Menor que"
function menosQue(valor, media, desvio) {
  let result = calculateZ(valor, media, desvio);
  let final = ((0.5 - result) * 100).toFixed(2) + "%";
  return final;
}
