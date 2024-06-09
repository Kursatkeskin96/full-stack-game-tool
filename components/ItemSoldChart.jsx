import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
        label: "Item Sold",
        data: recentData.map((entry) => entry.item_count) || [],
        backgroundColor: "rgba(234,88,11,0.2)",
        borderColor: "rgba(234,88,11,1)",
        borderWidth: 1,
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
      y: {
        title: {
          display: true,
          text: "Item Sold",
          color: '#d8d8d8',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff',
        },
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
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
      },
    },
  };
}

export default function ItemCountChart({ apiData }) {
  const chartData = getChartData(apiData);
  const chartOptions = getChartOptions();

  return (
    <div className='w-[90%] md:w-[45%] h-[400px]'>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}
