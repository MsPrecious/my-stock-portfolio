const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.use(express.static('my-stock-portfolio'));

app.get('/chart-data/:chartName', (req, res) => {
  const chartName = req.params.chartName;

  // Define chart data objects for different charts
  const chartDataMap = {
    'Total-revenues': {
      labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: 'Total Revenues',
          data: [550, 400, 250, 180, 200, 400, 350, 580, 220, 320],
          backgroundColor: 'rgba(173, 216, 230, 0.8)', // Light Blue
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
    'Total-Popular-Sales-Items': {
      labels: ["Item category1", "Item category2", "Item category3", "Item category4", "Item category5", "Item category6"],
      datasets: [
        {
          label: 'APSD',
          data: [856.60, 282.45, 395.73, 37.84, 590.23, 108.45],
          backgroundColor: 'rgba(173, 216, 230, 0.8)', // Light Blue
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: 'UPSD',
          data: [99.64, 51.18, 136.13, 76.48, 294.35, 62.98],
          backgroundColor: 'rgba(173, 216, 230, 0.8)', // Light Blue
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: 'SKU Stock',
          data: [0, 25, 0, 125, 75, 90], 
          backgroundColor: (ctx) => {
            const value = ctx.raw;
            if (value === 0) {
              return 'rgba(0, 255, 0, 0.8)'; // Green for 0
            } else {
              return 'rgba(255, 0, 0, 0.8)'; // Red for other values
            }
          },
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
  };

  const chartData = chartDataMap[chartName];

  if (chartData) {
    res.setHeader('Cache-Control', 'no-store');
    res.json(chartData);
  } else {
    res.status(404).json({ error: 'Chart data not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
