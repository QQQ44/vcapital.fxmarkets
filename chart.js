// 获取图表的上下文
const ctx = document.getElementById('marketChart').getContext('2d');

// 创建数据和配置
const marketChart = new Chart(ctx, {
    type: 'line', // 图表类型，可选择 'line', 'bar', 'pie' 等
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Market Data',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(0, 68, 204, 0.2)', // 图表区域背景颜色
            borderColor: 'rgba(0, 68, 204, 1)', // 线条颜色
            borderWidth: 2
        }]
    },
    options: {
        responsive: true, // 响应式
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true // Y轴从0开始
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
});

