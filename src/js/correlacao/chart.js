
//Acessando o elemento canva no HTML
var ctx = document.getElementById('myChart').getContext('2d');

//Função que cria o gráfico e o insere na tela do usuário.
function createChartCorrelacao(data, colors, data2) {
  var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Dispersão',
            data: data,
            backgroundColor: 'rgba(0,0,0,0)',
            pointBackgroundColor: 'black',
            borderColor: "black",
            borderWidth: 5,
            options: {showLines: false},
            order: 1
        }, {
            label: 'Linha de Regressão',
            data: data2,
            backgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: "red",
            pointBackgroundColor: 'red',
            borderColor: "red",
            showLine: true,
            type: 'line',
            // this dataset is drawn on top
            order: 2
        }],
        // labels: ['January', 'February', 'March', 'April', 'May']
    },
    options: {}
  });
};