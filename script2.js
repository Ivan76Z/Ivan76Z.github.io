$(document).ready(function() {
    var strGET = window.location.search.replace('?', '');
    $('.h').append(`<h1 style="margin: 40px auto;padding: 20px 0 20px 0px;">График для id${strGET}</h2>`)
    var speedCanvas = document.getElementById("speedChart");
    var speedCanvas2 = document.getElementById("speedChart2");
    var speedCanvas3 = document.getElementById("speedChart3");
    Chart.defaults.global.legend.labels.pointStyle = dash;
    Chart.defaults.global.legend.labels.boxHeight = 5;
    Chart.defaults.global.legend.labels.boxWidth = 20;
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
                    data: [1, 2, 3, 4, 5, 6, 7].fill(Math.max.apply(null, data[0]["data"]) + 10, 0, 7),
                    label: "Макс.",
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
                    data: [10, 10, 10, 10, 10, 10, 10],
                    label: "Мин.",
                    lineTension: 0,
                    fill: false,
                    borderColor: '#4659b9',
                    backgroundColor: 'transparent',
                    borderDash: [5, 5],
                    pointBorderColor: '#4659b9',
                    pointBackgroundColor: '#4659b9',
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    pointHitRadius: 0,
                    pointBorderWidth: 0,
                    pointStyle: 'rect'
                }
            ]
        };

        var chartOptions = {
            plugins: {
            legend: {
                    display: true,
                    position: 'top',
                labels: {
                    fontColor: 'black'
                }
            }},
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
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
                    trendlineLinear: {
                        style: "rgb(43 ,66 ,255, 0.3)",
                        lineStyle: "dotted|solid",
                        width: 2
                    },
                    label: "Цена на товар id " + strGET,
                    data: data[1]["data"],
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
                    data: [1, 2, 3, 4, 5, 6, 7].fill(Math.max.apply(null, data[1]["data"]) + 10, 0, 7),
                    label: "Макс.",
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
                    data: [10, 10, 10, 10, 10, 10, 10],
                    label: "Мин.",
                    lineTension: 0,
                    fill: false,
                    borderColor: '#4659b9',
                    backgroundColor: 'transparent',
                    borderDash: [5, 5],
                    pointBorderColor: '#4659b9',
                    pointBackgroundColor: '#4659b9',
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    pointHitRadius: 0,
                    pointBorderWidth: 0,
                    pointStyle: 'rect'
                }
            ]
        };

        var lineChart2 = new Chart(speedCanvas2, {
            type: 'line',
            data: speedData2,
            options: chartOptions
        });

        var speedData3 = {
            labels: data[2]["labels"],
            datasets: [{
                    trendlineLinear: {
                        style: "rgb(43 ,66 ,255, 0.3)",
                        lineStyle: "dotted|solid",
                        width: 2
                    },
                    label: "Наличие товара id " + strGET,
                    data: data[2]["data"],
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
                    data: [1, 2, 3, 4, 5, 6, 7].fill(Math.max.apply(null, data[2]["data"]) + 10, 0, 7),
                    label: "Макс.",
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
                    data: [10, 10, 10, 10, 10, 10, 10],
                    label: "Мин.",
                    lineTension: 0,
                    fill: false,
                    borderColor: '#4659b9',
                    backgroundColor: 'transparent',
                    borderDash: [5, 5],
                    pointBorderColor: '#4659b9',
                    pointBackgroundColor: '#4659b9',
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    pointHitRadius: 0,
                    pointBorderWidth: 0,
                    pointStyle: 'rect'
                }
            ]
        };

        var lineChart3 = new Chart(speedCanvas3, {
            type: 'line',
            data: speedData3,
            options: chartOptions
        });

    });
});
