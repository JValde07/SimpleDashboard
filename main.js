var ctxLine = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM'],
        datasets: [{
            label: 'Energy (kWh)',
            data: [10, 20, 15, 25, 30, 10, 20, 15, 25, 30, 10, 20, 15, 25, 30, 10, 20, 15, 25, 30, 10, 20, 15, 25, 30],
            borderColor: 'rgba(102, 205, 170, 1)',
            backgroundColor: 'rgba(102, 205, 170, 0.2)',
            fill: true,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

var ctxBar = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Paper per month',
            data: [45, 56, 75, 62, 90, 80, 70, 88, 95, 67, 85, 72],
            backgroundColor: 'rgba(255, 182, 193, 0.2)',
            borderColor: 'rgba(255, 182, 193, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

var ctxPie = document.getElementById('pieChart').getContext('2d');
var pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Online (h)', 'Offline (h)'],
        datasets: [{
            label: 'Distribution',
            data: [30, 40],
            backgroundColor: ['rgba(255, 223, 186, 0.2)', 'rgba(174, 198, 207, 0.2)'],
            borderColor: ['rgba(255, 223, 186, 1)', 'rgba(174, 198, 207, 1)'],
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});