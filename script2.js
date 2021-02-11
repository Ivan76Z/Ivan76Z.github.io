$( document ).ready(function() {
var strGET = window.location.search.replace( '?', ''); 

$('.h').append(`<h1 style="margin: 40px auto">График для id${strGET}</h2>`)


  var speedCanvas = document.getElementById("speedChart");
  var speedCanvas2 = document.getElementById("speedChart2");
  var speedCanvas3 = document.getElementById("speedChart3");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
$.getJSON('chart_data.json', function(data) {
	
var speedData = {
  labels: data[0]["labels"],
  datasets: [{
    label: "Спрос на товар с id " + strGET,
    data: data[0]["data"],
    lineTension: 0,
    fill: false,
    borderColor: '#ff6666',
    backgroundColor: 'transparent',
    borderDash: [5, 5],
    pointBorderColor: '#ff6666',
    pointBackgroundColor: '#ff6666',
    pointRadius: 5,
    pointHoverRadius: 10,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'rectRounded'
  }]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});
	
	
});
	});
