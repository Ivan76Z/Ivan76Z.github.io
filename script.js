$( document ).ready(function() {





	$('.hydra').click(function(){

    $(".black-bg").toggleClass('show');
    $(".modal").toggleClass('show');
    var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
  labels: ["01.01.21", "01.01.21", "01.01.21", "01.01.21", "01.01.21", "01.01.21", "01.01.21"],
  datasets: [{
    label: "Курс крутого товара",
    data: [0, 59, 75, 20, 20, 55, 40],
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
      fontColor: 'white'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});

	});

$('.black-bg').click(function(){
	$(".modal").toggleClass('show');
    $(".black-bg").toggleClass('show');
	});

});