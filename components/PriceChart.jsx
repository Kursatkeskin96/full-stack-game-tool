import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function getChartData(apiData) {
  const dateFormatter = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
  });

  // Get the last 7 days of data
  const recentData = apiData?.[0]?.data.slice(-7) || [];

  return {
    labels: recentData.map((entry) => dateFormatter.format(new Date(entry.timestamp))) || [],
    datasets: [
      {
        label: "Average Price",
        data: recentData.map((entry) => entry.avg_price) || [],
        fill: false,
        borderColor: "rgba(75,192,192,0.8)",
        backgroundColor: "rgba(75,192,192,0.2)",
        pointBackgroundColor: "rgba(75,192,192,1)",
        pointBorderColor:  "rgba(75,192,192,1)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(75,192,192,0.2)",
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        yAxisID: 'y-axis-avg-price',
      },
    ],
  };
}

function getChartOptions() {
  return {
    responsive: true,
    maintainAspectRatio: false, // To allow custom height and width
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          color: '#d8d8d8',
        },
        grid: {
          display: false,
        },
        ticks: {
          color: '#fff',
        },
      },
      'y-axis-avg-price': {
        title: {
          display: true,
          text: "Average Price",
          color: '#d8d8d8',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff',
          callback: function(value) {
            return value.toLocaleString(); // Format number with commas
          },
          stepSize: 100, // Adjust step size based on your data range
        },
        position: 'left',
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#fff',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    },
  };
}

export default function PriceChart({ apiData }) {
  const chartData = getChartData(apiData);
  const chartOptions = getChartOptions();

  return (
    <div className='w-[90%] md:w-[45%] h-[400px]'>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}
