//Acessando os elementos HTML.
let mediaNormal = document.getElementById("mediaNormal");
let desvioNormal = document.getElementById("desvioNormal");
let normalOptions = document.getElementById("normalOptions");
let maisQueNormal = document.getElementById("maior-que-normal");
let menosQueNormal = document.getElementById("menor-que-normal");
let primeiroValorNormal = document.getElementById("primeiro-valor-normal");
let segundoValorNormal = document.getElementById("segundo-valor-normal");
let clearNormal = document.getElementById("clearNormal");
let resultadoNormal = document.getElementById("resultadoNormal");

//Objeto que guardará todos os resultados das equações matemáticas, que posteriormente
//serão usados para exibir os resultados para o usuário.
let inputedNormal = {};

//Esses elementos iniciam escondidos do usuário, e são mostrados de acordo com o 
//a resposta da função showNormalInputs.
maisQueNormal.style.display = "none";
menosQueNormal.style.display = "none";
primeiroValorNormal.style.display = "none";
segundoValorNormal.style.display = "none";

//Função que mostra dinamicamente os inputs para oi usuário de acordo com o opção escolhida
//por ele na caixa de opções.
function showNormalInputs(value) {
  console.log(value);
  if (value === "Mais que") {
    maisQueNormal.style.display = "block";
    menosQueNormal.style.display = "none";
    primeiroValorNormal.style.display = "none";
    segundoValorNormal.style.display = "none";
  } else if (value === "Menos que") {
    menosQueNormal.style.display = "block";
    maisQueNormal.style.display = "none";
    primeiroValorNormal.style.display = "none";
    segundoValorNormal.style.display = "none";
  } else if (value === "Entre dois valores") {
    maisQueNormal.style.display = "none";
    menosQueNormal.style.display = "none";
    primeiroValorNormal.style.display = "inline-block";
    segundoValorNormal.style.display = "inline-block";
  }
}

//Função que limpa todos os campos do formulário e coloca o foco no primeiro elemento.
clearNormal.addEventListener("click", () => {
  mediaNormal.value = "";
  desvioNormal.value = "";
  maisQueNormal.value = "";
  menosQueNormal.value = "";
  primeiroValorNormal.value = "";
  segundoValorNormal.value = "";
  normalOptions.value = "";
  maisQueNormal.style.display = "none";
  menosQueNormal.style.display = "none";
  primeiroValorNormal.style.display = "none";
  segundoValorNormal.style.display = "none";
  resultadoNormal.innerText = "";
  mediaNormal.focus();
});

//Função que guarda o valor informado no input da media
function storeMediaNormal(value) {
  let temp = value.replace(/,/g, ".");
  let inputedValue = Number(temp);
  if (isNaN(inputedValue) || inputedValue <= 0) {
    alert(
      "A média deve ser um NÚMERO maior que 0(zero). Por favor tente novamente."
    );
    mediaNormal.value = "";
    mediaNormal.focus();
  } else {
    inputedNormal.media = inputedValue;
  }
}

//Função que guarda o valor informado no input do desvio padrão.
function storeDesvioNormal(value) {
  let temp = value.replace(/,/g, ".");
  let inputedValue = Number(temp);
  inputedNormal.desvioNormal = inputedValue;
}

//Função que guarda o valor informado no input do valor de "Mais que".
function storemaisQue(value) {
  let temp = value.replace(/,/g, ".");
  let inputedValue = Number(temp);
  if (isNaN(inputedValue) || inputedValue <= 0) {
    alert(
      "O valor deve ser um NÚMERO maior que 0(zero). Por favor tente novamente."
    );
    maisQueNormal.value = "";
    maisQueNormal.focus();
  } else {
    inputedNormal.maisQue = inputedValue;
  }
}
//Função que guarda o valor informado no input do valor de "Menos que".
function storemenosQue(value) {
  let temp = value.replace(/,/g, ".");
  let inputedValue = Number(temp);
  if (isNaN(inputedValue) || inputedValue <= 0) {
    alert(
      "O valor deve ser um NÚMERO maior que 0(zero). Por favor tente novamente."
    );
    menosQueNormal.value = "";
    menosQueNormal.focus();
  } else {
    inputedNormal.menosQue = inputedValue;
  }
}

//Função que guarda o valor informado no input do valor de "Primeiro valor".
function storePrimeiroValorNormal(value) {
  let temp = value.replace(/,/g, ".");
  let inputedValue = Number(temp);
  if (isNaN(inputedValue) || inputedValue <= 0) {
    alert(
      "O valor deve ser um NÚMERO maior que 0(zero). Por favor tente novamente."
    );
    primeiroValorNormal.value = "";
    primeiroValorNormal.focus();
  } else {
    inputedNormal.primeiroValor = inputedValue;
  }
}

//Função que guarda o valor informado no input do valor de "Segundo valor".
function storeSegundoValorNormal(value) {
  let temp = value.replace(/,/g, ".");
  let inputedValue = Number(temp);
  if (isNaN(inputedValue) || inputedValue <= 0) {
    alert(
      "O valor deve ser um NÚMERO maior que 0(zero). Por favor tente novamente."
    );
    segundoValorNormal.value = "";
    segundoValorNormal.focus();
  } else {
    inputedNormal.segundoValor = inputedValue;
  }
}

//FUnção que executa todos os cáculos matemáticos usando os valores informados pelo 
//usuário e guardando os resultados no objeto de referência. Após isso, insere o 
//resultado final na tela do usuário.
function calculateNormal() {
  if (normalOptions.value == "Mais que") {
    inputedNormal.probabilidade = maisQue(
      inputedNormal.maisQue,
      inputedNormal.media,
      inputedNormal.desvioNormal
    );
    resultadoNormal.innerText = `Probabilidade de: ${inputedNormal.probabilidade}`;
  } else if (normalOptions.value == "Menos que") {
    inputedNormal.probabilidade = menosQue(
      inputedNormal.menosQue,
      inputedNormal.media,
      inputedNormal.desvioNormal
    );
    resultadoNormal.innerText = `Probabilidade de: ${inputedNormal.probabilidade}`;
  } else if (normalOptions.value == "Entre dois valores") {
    inputedNormal.probabilidade = entreDoisValores(
      inputedNormal.primeiroValor,
      inputedNormal.segundoValor,
      inputedNormal.media,
      inputedNormal.desvioNormal
    );
    resultadoNormal.innerText = `Probabilidade de: ${inputedNormal.probabilidade}`;
  }
  console.log(inputedNormal);
}
