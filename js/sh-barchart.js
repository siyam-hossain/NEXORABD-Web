const purchaseData = [80, 120, 70, 55, 95, 65, 110, 75, 90, 50];
const productNames = [
  "MacBook Pro",
  "iPhone 14",
  "Smart Watch",
  "Gaming Laptop",
  "Samsung Galaxy S23",
  "AirPods Pro",
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
        colors: "#616161",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#616161",
        fontSize: "12px",
      },
    },
  },
  grid: {
    show: true,
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
