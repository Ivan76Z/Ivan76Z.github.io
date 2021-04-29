$( document ).ready(function() {
var strGET = window.location.search.replace( '?', ''); 

$('.h').append(`<h1 style="margin: 40px auto;padding: 20px 0 20px 0px;">График для id${strGET}</h2>`)


  var speedCanvas = document.getElementById("speedChart");
  var speedCanvas2 = document.getElementById("speedChart2");
  var speedCanvas3 = document.getElementById("speedChart3");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
$.getJSON('chart_data.json', function(data) {
	
var speedData = {
  labels: data[0]["labels"],
  datasets: [{
	  trendlineLinear: {
                style: "rgb(43 ,66 ,255, 0.3)",
                lineStyle: "dotted|solid",
                width: 2
            },
    label: "Спрос на товар с id " + strGET,
    data: data[0]["data"],
    lineTension: 0,
    fill: false,
    borderColor: '#eb8f34',
    backgroundColor: 'transparent',
    borderDash: [5, 5],
    pointBorderColor: '#eb8f34',
    pointBackgroundColor: '#eb8f34',
    pointRadius: 5,
    pointHoverRadius: 10,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'rectRounded'
  },
	     {
    data: [110,110,110,110,110,110,110],
label: {display: false},
    lineTension: 0,
    fill: false,
    borderColor: '#46b955',
    backgroundColor: 'transparent',
    borderDash: [5, 5],
    pointBorderColor: '#46b955',
    pointBackgroundColor: '#46b955',
    pointRadius: 0,
    pointHoverRadius: 0,
    pointHitRadius: 0,
    pointBorderWidth: 0,
    pointStyle: 'rect'
	     },
	    {
    data: [10,10,10,10,10,10,10],
	label: {display: false},
    lineTension: 0,
    fill: false,
    borderColor: '#46b955',
    backgroundColor: 'transparent',
    borderDash: [5, 5],
    pointBorderColor: '#46b955',
    pointBackgroundColor: '#46b955',
    pointRadius: 0,
    pointHoverRadius: 0,
    pointHitRadius: 0,
    pointBorderWidth: 0,
    pointStyle: 'rect'
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
var speedData2 = {
  labels: data[1]["labels"],
  datasets: [{
    label: "Цена на товар id " + strGET,
    data: data[1]["data"],
    lineTension: 0,
    fill: false,
    borderColor: '#4c6ce0',
    backgroundColor: 'transparent',
    borderDash: [5, 5],
    pointBorderColor: '#4c6ce0',
    pointBackgroundColor: '#4c6ce0',
    pointRadius: 5,
    pointHoverRadius: 10,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'rectRounded'
  }]
};

var chartOptions2 = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart2 = new Chart(speedCanvas2, {
  type: 'line',
  data: speedData2,
  options: chartOptions2
});
	
	var speedData3 = {
  labels: data[2]["labels"],
  datasets: [{
    label: "Наличие товара id " + strGET,
    data: data[2]["data"],
    lineTension: 0,
    fill: false,
    borderColor: '#2bcc3b',
    backgroundColor: 'transparent',
    borderDash: [5, 5],
    pointBorderColor: '#2bcc3b',
    pointBackgroundColor: '#2bcc3b',
    pointRadius: 5,
    pointHoverRadius: 10,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'rectRounded'
  }]
};

var chartOptions3 = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart3 = new Chart(speedCanvas3, {
  type: 'line',
  data: speedData3,
  options: chartOptions3
});	
	
});
	});
