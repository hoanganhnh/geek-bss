function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


chartArray = JSON.parse(chartArray);
const chart_consumption_data = chartArray.map(chartArray => chartArray.consumption);
const chart_name_data = chartArray.map(chartArray => chartArray.name);
var color = [('rgba(255,255,0,1)')];

for (var i = 0; i < chart_name_data.length - 1; ++i) {
    var rgba = 'rgba(' + String(randomNumber(100, 255)) + ',' + String(randomNumber(0, 255)) + ',' + String(randomNumber(0, 255)) + ',1)';
    color.push(rgba);
}

const ctx = $('#myChart');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: chart_name_data,
        datasets: [{
            label: 'Consumption Chart',
            data: chart_consumption_data,
            backgroundColor: color,
        }]
    },
});
