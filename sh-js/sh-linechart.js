document.addEventListener("DOMContentLoaded", function () {

    const dates = [];
    const today = new Date('2025-09-04');
    for (let i = 59; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        dates.push(date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }));
    }


    const data = Array.from({ length: 60 }, () => Math.floor(Math.random() * 300) + 6300);

    const options = {
        chart: {
            height: 300,
            type: "area",
            fontFamily: "Inter, sans-serif",
            dropShadow: { enabled: false },
            toolbar: { show: false },
           
        },
        tooltip: {
            enabled: true,
            x: { show: false },
            style: {
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
                color: '#111827',
            },
            theme: "light" 
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
                shade: "light", 
                gradientToColors: ["#1C64F2"],
            },
        },
        dataLabels: { enabled: false },
        stroke: {
            width: 2,
            colors: ['#1C64F2'],
        },
        grid: {
            show: true,
            strokeDashArray: 4,
            borderColor: '#e5e7eb',
            padding: { left: 2, right: 2, top: 0 },
        },
        series: [
            {
                name: "New users",
                data: data,
                color: "#1A56DB",
            },
        ],
        xaxis: {
            categories: dates,
            labels: {
                show: true,
                style: { colors: '#374151', fontSize: '12px' },
                rotate: -45,
            },
            tickAmount: 10,
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            show: true,
            labels: { style: { colors: '#374151', fontSize: '12px' } },
        },
    };

    if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.getElementById("area-chart"), options);
        chart.render();
    }
});
