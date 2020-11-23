let inputed = {};
/* let binomial = document.getElementById("binomial");
let normal = document.getElementById("normal");
let uniforme = document.getElementById("uniforme"); */
let clearBinomial = document.getElementById("clearBinomial");
let btn = document.getElementById("btnBinomial");

btn.addEventListener("click", calculate);
clearBinomial.addEventListener("click", clearForm);

let n = document.getElementById("n");
let p = document.getElementById("p");
let q = document.getElementById("q");
let k = document.getElementById("k");
/* let containerBinomial = document.querySelector(".container-binomial");
let containerNormal = document.querySelector(".container-normal");
let containerUniforme = document.querySelector(".container-uniforme"); */

/* containerNormal.style.display = "none";
containerUniforme.style.display = "none"; */

/* function showPercentageOptions() {
  if (binomial.checked) {
    containerBinomial.style.display = "block";
    containerNormal.style.display = "none";
    containerUniforme.style.display = "none";
  } else if (normal.checked) {
    containerBinomial.style.display = "none";
    containerNormal.style.display = "block";
    containerUniforme.style.display = "none";
  } else if (uniforme.checked) {
    containerBinomial.style.display = "none";
    containerNormal.style.display = "none";
    containerUniforme.style.display = "block";
  }
} */

function storeN(value) {
  let inputedValue = +value;
  if (isNaN(inputedValue) || inputedValue < 1) {
    alert("N precisa ser um número maior que 0");
    n.value = "";
    n.focus();
  } else {
    inputed.n = inputedValue;
    p.focus();
  }
}

function storeP(value) {
  let temp = value.replace(/,/g, ".").replace(/ /g, '');
  let inputedValue = Number(temp);

  if (isNaN(inputedValue) || inputedValue < 0) {
    alert("P precisa ser um número maior que 0");
    p.value = "";
    p.focus();
  } else {
    inputed.p = inputedValue;
    q.focus();
  }
}

function storeQ(value) {
  let temp = value.replace(/,/g, ".").replace(/ /g, '');
  let inputedValue = Number(temp);

  if (isNaN(inputedValue) || inputedValue < 0) {
    alert("P precisa ser um número maior que 0");
    q.value = "";
    q.focus();
  } else {
    inputed.q = inputedValue;
    k.focus();
  }
}

function storeK(value) {
  let parsedValues = [];
  let temp = value.replace(/;/g, ",").replace(/ /g, "").split(",");
  temp.forEach((value) => {
    parsedValues.push(+value);
  });
  parsedValues.forEach((value) => {
    if (isNaN(value) || value < 0) {
      alert("Valores precisam ser números maiores que 0");
      k.value = "";
      k.focus();
    } else {
      inputed.k = parsedValues;
    }
  });
}

function validate(a, b, c, d) {
  let control = true;
  if (c === undefined) {
    alert("Por favor insira o valor de N");
    n.focus();
    return (control = false);
  } else if (a === undefined) {
    alert("Por favor insira o valor de P");
    p.focus();
    control = false;
  } else if (b === undefined) {
    alert("Por favor insira o valor de Q");
    q.focus();
    control = false;
  } else if (d === undefined) {
    alert("Por favor insira o valor de K");
    k.focus();
    control = false;
  }
  if (a + b > 1 || a + b < 1) {
    alert("Valores de P e Q não somam 1(ou 100%). Por favor digite novamente.");
    p.value = "";
    q.value = "";
    p.focus();
    control = false;
  }
  return control;
}

function calculate() {
  inputed.probabilidade = probabilidadeBinomial(
    inputed.n,
    inputed.p,
    inputed.q,
    inputed.k)

  inputed.media = mediaBinomial(inputed.n, inputed.p);

  inputed.desvio = desvioBinomial(inputed.n, inputed.p, inputed.q);

  mountResults(inputed.probabilidade, inputed.media, inputed.desvio);
  console.log(inputed);
  /* if (binomial.checked) {
    const validation = validate(inputed.p, inputed.q, inputed.n, inputed.k);
    if (validation) {
      inputed.probabilidade = probabilidadeBinomial(
        inputed.n,
        inputed.p,
        inputed.q,
        inputed.k
      );
      console.log(inputed.n);

      inputed.media = mediaBinomial(inputed.n, inputed.p);

      inputed.desvio = desvioBinomial(inputed.n, inputed.p, inputed.q);

      mountResults(inputed.probabilidade, inputed.media, inputed.desvio);
      console.log(inputed);
    }
  }
  if (normal.checked) {
    console.log("normal selected");
  }
  if (uniforme.checked) {
    console.log("uniforme selected");
  } */
}

function clearForm() {
  n.value = "";
  p.value = "";
  q.value = "";
  k.value = "";
  probabilidade.innerText = "";
  media.innerText = "";
  desvio.innerText = "";
  n.focus();
}
