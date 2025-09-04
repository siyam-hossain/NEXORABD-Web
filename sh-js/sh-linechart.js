document.addEventListener("DOMContentLoaded", function () 
    {
            // Generate 60-day date range (from Jul 7, 2025 to Sep 4, 2025)
            const dates = [];
            const today = new Date('2025-09-04');
            for (let i = 59; i >= 0; i--) {
                const date = new Date(today);
                date.setDate(today.getDate() - i);
                dates.push(date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }));
            }

            // Generate synthetic data for 60 days (fluctuating around 6300–6600)
            const data = Array.from({ length: 60 }, () => Math.floor(Math.random() * 300) + 6300);

            const options = {
                chart: {
                    height: 300, // Fixed height for proportionality; adjust if needed
                    // Modify chart width here by setting a specific pixel value (e.g., 600) instead of "100%" to limit chart width within the container
                    maxWidth: "100%", // Set to "100%" to fill container, or use a number (e.g., 500) for fixed width
                    type: "area",
                    fontFamily: "Inter, sans-serif",
                    dropShadow: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                tooltip: {
                    enabled: true,
                    x: {
                        show: false,
                    },
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Inter, sans-serif',
                        color: '#111827',
                    },
                    background: {
                        color: '#ffffff',
                        opacity: 0.9,
                    },
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        opacityFrom: 0.55,
                        opacityTo: 0,
                        shade: "#1C64F2",
                        gradientToColors: ["#1C64F2"],
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: 6,
                    colors: ['#1C64F2'],
                },
                grid: {
                    show: true,
                    strokeDashArray: 4,
                    borderColor: '#e5e7eb',
                    padding: {
                        left: 2,
                        right: 2,
                        top: 0
                    },
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
                        style: {
                            colors: '#374151',
                            fontSize: '12px',
                        },
                        rotate: -45, // Rotate labels to prevent overlap
                    },
                    tickAmount: 10, // Show ~10 labels for readability
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                yaxis: {
                    show: true,
                    labels: {
                        style: {
                            colors: '#374151',
                            fontSize: '12px',
                        },
                    },
                },
            };

            if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
                const chart = new ApexCharts(document.getElementById("area-chart"), options);
                chart.render();
            }
    }
);

