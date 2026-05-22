let canva = document.querySelector('#myChart')
let canva2 = document.querySelector('#myChart2')
let canva3 = document.querySelector('#myChart3')
let canva4 = document.querySelector('#myChart4')
import { data_numbers, labels, labels_chart2, data_numbers_chart2, data_numbers_chart3, labels_chart3, labels_chart4, data_numbers_chart4} from "./bd.js";


const data = {
  labels: labels,
  datasets: [{
    label: 'Meu grafico',
    data: data_numbers,
    backgroundColor: [
      'rgba(219, 33, 33, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(0, 84, 252, 0.2)'
    ],
    borderColor: [
      'rgb(134, 88, 98)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

new Chart(canva, config)

const data_chart2 = {
    labels: labels_chart2,
    datasets: [{
      label: 'My First Dataset',
      data: data_numbers_chart2,
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };

  const config_chart2 = {
    type: 'radar',
    data: data_chart2,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  };

  new Chart(canva2, config_chart2)

    const data_chart_3 = {
    labels: labels_chart3,
    datasets: [{
        label: 'My First Dataset',
        data: data_numbers_chart3,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
    };

    const config_chart3 = {
        type: 'line',
        data: data_chart_3,
      };

    new Chart(canva3, config_chart3)



    const data_chart_4 = {
        labels: labels_chart4,
        datasets: [{
          type: 'bar',
          label: 'Bar Dataset',
          data: data_numbers_chart4,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)'
        }, {
          type: 'line',
          label: 'Line Dataset',
          data: [50, 50, 50, 50],
          fill: false,
          borderColor: 'rgb(54, 162, 235)'
        }]
      };

      const config_chart4 = {
        type: 'scatter',
        data: data_chart_4,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };

      new Chart(canva4, config_chart4)
