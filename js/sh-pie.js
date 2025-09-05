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
        colors: ["#ffffff"],
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
