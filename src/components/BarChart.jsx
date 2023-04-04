import React, { useRef, useEffect } from 'react';
import { Chart} from 'chart.js/auto';


function BarChart({ selectedcountryStats }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = chartRef.current;
    const context = canvas.getContext('2d');

    let chart = Chart.getChart(canvas);
    if (chart) {
      chart.destroy();
    }

    chart = new Chart(context, {
      type: 'bar',
      data: {
        labels: ['Confirmed Cases', 'Recovered'],
        datasets: [
          {
            label: 'Statistics',
            data: [
              selectedcountryStats?.cases?.total,
              selectedcountryStats?.cases?.recovered,
              // selectedcountryStats?.tests?.total,
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              // 'rgba(255, 206, 86, 0.2)',
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              // 'rgba(255, 206, 86, 1)',
              
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Country Statistics Graph',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [ selectedcountryStats]);

  return <canvas ref={chartRef} id="myChart" />;
}

export default BarChart;





