let probabilidade = document.getElementById("probabilidade");
let media = document.getElementById("media");
let desvio = document.getElementById("desvio");
let tableResults = document.getElementById("tableResults");

function probabilidadeBinomial(n, p, q, k) {
  let results = [];
  k.forEach((number) => {
    let temp = combinatoria(n, number);
    let finalResult = temp * p ** number * q ** (n - number) * 100;
    results.push(finalResult);
    console.log(temp);
    console.log(finalResult);
  });
  let total = 0;
  for (let i = 0; i < results.length; i++) {
    total += results[i];
  }
  console.log(total);
  return results.reduce((total, num) => total + num).toFixed(2);
}

function combinatoria(n, k) {
  let result1 = fatorial(n);
  let result2 = fatorial(k);
  let result3 = fatorial(n - k);
  let finalResult = result1 / (result2 * result3);

  return finalResult;
}

function fatorial(n) {
  let numero = 1;
  for (let i = n; i > 1; i--) {
    numero *= i;
  }
  return numero;
}

function mediaBinomial(n, p) {
  /*return (n * p).toFixed(2);*/
  return (n * p).toFixed(2);
}

function desvioBinomial(n, p, q) {
  return +Math.sqrt(n * p * q).toFixed(2);
}

function mountResults(a, b, c) {
  tableResults.style.display = 'block'
  probabilidade.innerText = `${a}%`;
  media.innerText = `${b}`;
  desvio.innerText = `${c}%`;
}

function limparBinomial(){

}