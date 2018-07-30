var ctx = document.getElementById("myChart");

var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [2014, 2015, 2016],
    datasets: [{
      data: [73, 199, 395],
      label: "year",
      borderColor: "#3e95cd",
      fill: true
    },]
  },
  options: {
    title: {
      display: true,
      text: 'Galvanize Students'
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Students Graduated"
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Year"
        },
      }]
    }
  }
});