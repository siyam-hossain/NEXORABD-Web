document.addEventListener("DOMContentLoaded", function() {
  const getChartOptions = () => {
    return {
      series: [35.2, 28.5, 18.7, 10.3, 7.3], // Example: market share values
      colors: ["#1C64F2", "#16BDCA", "#9061F9", "#F59E0B", "#EF4444"],
      chart: {
        height: 420,
        width: "100%",
        type: "pie",
      },
      stroke: {
        colors: ["white"],
        lineCap: "",
      },
      plotOptions: {
        pie: {
          size: "100%",
          dataLabels: {
            offset: -25
          }
        },
      },
      labels: ["Electronics", "Clothing", "Home & Kitchen", "Beauty", "Sports"],
      dataLabels: {
        enabled: true,
        style: {
          fontFamily: "Inter, sans-serif",
        },
        formatter: function (val, opts) {
          return opts.w.globals.labels[opts.seriesIndex] + ": " + val.toFixed(1) + "%";
        }
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      }
    }
  }

  if (document.getElementById("pie-chart") && typeof ApexCharts !== 'undefined') {
    const chart = new ApexCharts(document.getElementById("pie-chart"), getChartOptions());
    chart.render();
  }
});
