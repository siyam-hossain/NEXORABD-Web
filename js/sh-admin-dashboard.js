const sidebar = document.getElementById('sidebar');
  function toggleSidebar() {
      sidebar.classList.toggle('show');
  }


const purchaseData = [80, 120, 70, 55, 95, 110, 75, 90, 50];
const productNames = [
  "MacBook Pro",
  "iPhone 14",
  "Smart Watch",
  "Gaming Laptop",
  "Samsung Galaxy S23",
  "iPad Pro",
  "Surface Laptop",
  "Wireless Mouse",
  "Bluetooth Speaker",
];

// Define unique colors for each bar
let barColors = [
  "#1C64F2",
  "#16BDCA",
  "#9061F9",
  "#F59E0B",
  "#10B981",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
  "#3B82F6",
  "#F97316",
];

// Highlight the maximum value with red
const maxValue = Math.max(...purchaseData);
const maxIndex = purchaseData.indexOf(maxValue);
barColors[maxIndex] = "#FF0000"; // Optional, if you want max bar to always be red

const chartConfig = {
  series: [
    {
      name: "Purchases",
      data: purchaseData,
    },
  ],
  chart: {
    type: "bar",
    height: 300,
    toolbar: { show: false },
  },
  title: {
    align: "left",
    style: {
      fontSize: "16px",
      fontWeight: "bold",
    },
  },
  dataLabels: {
    enabled: true,
  },
  legend: { show: false },
  colors: barColors,
  plotOptions: {
    bar: {
      columnWidth: "20%",
      borderRadius: 4,
      distributed: true, // This ensures each bar gets its own color
    },
  },
  xaxis: {
    categories: productNames,
    labels: {
      style: {
        colors: "#9CA3AF",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#9CA3AF",
        fontSize: "12px",
      },
    },
  },
  grid: {
    show: false,
    borderColor: "#e0e0e0",
    strokeDashArray: 5,
    padding: { top: 5, right: 20 },
  },
  tooltip: {
    theme: "light",
  },
};

const chart = new ApexCharts(document.querySelector("#bar-chart"), chartConfig);
chart.render();





// area chart

document.addEventListener("DOMContentLoaded", function () {
    const dates = [];
    const today = new Date('2025-09-04');
    for (let i = 59; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        dates.push(date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }));
    }

    // Random revenue values between 6,300 and 6,600 (example)
    const data = Array.from({ length: 60 }, () => Math.floor(Math.random() * 300) + 6300);

    const options = {
        chart: {
            height: 300,
            maxWidth: "100%",
            type: "area",
            fontFamily: "Inter, sans-serif",
            dropShadow: { enabled: false },
            toolbar: { show: false },
            background: "#262626" // card color
        },
        tooltip: {
            enabled: true,
            x: { show: false },
            theme: "dark",
            style: {
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
            },
            y: {
                formatter: function (val) {
                    return "$" + val.toLocaleString(); // format as revenue
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
                shade: "#F97316", // orange-500 shade
                gradientToColors: ["#F97316"],
            },
        },
        dataLabels: { enabled: false },
        stroke: {
            width: 6,
            colors: ['#EA580C'], // orange line (#EA580C = orange-600)
        },
        grid: { show: false }, // turn off grid
        series: [
            {
                name: "Revenue",
                data: data,
                color: "#F97316", // orange-500
            },
        ],
        xaxis: {
            categories: dates,
            labels: {
                show: true,
                style: {
                    colors: "#9CA3AF", // gray-300
                    fontSize: "12px",
                },
                rotate: -45,
            },
            tickAmount: 10,
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            show: true,
            labels: {
                formatter: function (val) {
                    return "$" + val.toLocaleString(); // show as currency
                },
                style: {
                    colors: "#9CA3AF", // gray-300
                    fontSize: "12px",
                },
            },
        },
    };

    if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.getElementById("area-chart"), options);
        chart.render();
    }
});





// pie chart
document.addEventListener("DOMContentLoaded", function () {
  const getChartOptions = () => {
    return {
      series: [35.2, 28.5, 18.7, 10.3, 7.3],
      colors: ["#1C64F2", "#16BDCA", "#9061F9", "#F59E0B", "#EF4444"],
      chart: {
        type: "pie",
        height: 420,
        width: "100%",
      },
      stroke: {
        colors: ["#262626"], // border color changed to #262626
        width: 2,
      },
      plotOptions: {
        pie: {
          customScale: 1,
          offsetY: 20,          
          dataLabels: {
            offset: -22
          }
        },
      },
      labels: ["Electronics", "Clothing", "Home & Kitchen", "Beauty", "Sports"],
      dataLabels: {
        enabled: true,
        style: { fontFamily: "Inter, sans-serif" },
        formatter: function (val, opts) {
          return opts.w.globals.labels[opts.seriesIndex] + ": " + val.toFixed(1) + "%";
        },
        dropShadow: { enabled: false }
      },
      legend: {
        show: false // hide legend without letting pie overgrow
      }
    };
  };

  const el = document.getElementById("pie-chart");
  if (el && typeof ApexCharts !== "undefined") {
    const chart = new ApexCharts(el, getChartOptions());
    chart.render();
  }
});

