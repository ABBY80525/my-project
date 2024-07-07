<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js/auto';

export default {
  setup() {
    const chartData = ref(null);

    const fetchData = async () => {
      try {
        const response = await axios.get('/data.json');
        chartData.value = response.data;
        createChart();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const createChart = () => {
      if (chartData.value) {
        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: chartData.value.data.map(item => item.name),
            datasets: [{
              label: '數值',
              data: chartData.value.data.map(item => item.number),
              backgroundColor: 'rgba(84, 112, 196, 1)',
              borderColor: 'rgba(84, 112, 196, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 50 // 設置 Y 軸的步長為 50
                }
              }
            }
          }
        });
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {};
  }
};
</script>

<style>
/* 添加樣式 */
</style>
