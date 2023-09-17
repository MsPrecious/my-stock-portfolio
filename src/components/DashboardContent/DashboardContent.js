import React, { useState, useEffect } from 'react';
import './DashboardContent.css';
import { useMenu } from '../../MenuContext';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; 


function DashboardContent() {
  const { isDarkTheme } = useMenu();
  const [chartData, setChartData] = useState(null);
  const [chart, setChart] = useState(null); 
  const [revenuesData, setRevenuesData] = useState(null);
  const [popularSalesItemsData, setPopularSalesItemsData] = useState(null);

  
  const [selectedState, setSelectedState] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Total Revenues data when the component mounts
    fetch('http://localhost:4000/chart-data/Total-revenues')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRevenuesData(data);
      })
      .catch((error) => {
        console.error('Error fetching Total Revenues data:', error);
      });
    
    // Fetch Total Popular Sales Items data when the component mounts
    fetch('http://localhost:4000/chart-data/Total-Popular-Sales-Items')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPopularSalesItemsData(data);
      })
      .catch((error) => {
        console.error('Error fetching Total Popular Sales Items data:', error);
      });
  }, []);

  useEffect(() => {
    // Render the Total Revenues chart when revenuesData is available
    if (revenuesData) {
      console.log('Rendering Total Revenues chart with data:', revenuesData);

      // Destroy the previous chart if it exists
      if (chart) {
        chart.destroy();
      }

      // Create the new chart
      const ctx = document.getElementById('revenuesBarChart').getContext('2d');
      const newChart = new Chart(ctx, {
        type: 'bar',
        data: revenuesData,
        options: {
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
          },
        },
      });

      // Save the chart instance
      setChart(newChart);
    }
  }, [revenuesData, isDarkTheme]);

  // Handle state change
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  // Handle date from change
  const handleDateFromChange = (e) => {
    setDateFrom(e.target.value);
  };

  // Handle date to change
  const handleDateToChange = (e) => {
    setDateTo(e.target.value);
  };

  return (
    <div className={`dashboard-content ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="dashboard-row">
        <h2>Dashboard</h2>
        <div className="dashboard-inputs">
          <div className="grid-item">
            <label>Select State From</label>
            <select value={selectedState} onChange={handleStateChange}>
              <option value="" disabled>
                Select a State
              </option>
              {loading ? (
                <option>Loading...</option>
              ) : (
                states.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))
              )}
            </select>
          </div>

          <div className="grid-item">
            <label>Select Date From</label>
            <input type="date" value={dateFrom} onChange={handleDateFromChange} />
          </div>

          <div className="grid-item">
            <label>Select Date To</label>
            <input type="date" value={dateTo} onChange={handleDateToChange} />
          </div>
        </div>
      </div>

  <div className="grid-container-cards">
  {/* Card 1 */}
  <div className="grid-item-cards">
    <div className={`card ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <img src={require('../../images/total-revenues.png')} alt="Total Revenues" />
      <div><p className='margin-0'>Total Revenues</p>
      <p className='margin-0'>$4,101.74</p>
      <h6 className='margin-0'>Deposits:$3000</h6>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="grid-item-cards">
    <div className={`card ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <img src={require('../../images/people-visited.png')} alt="People Visited" />
      <div><p className='margin-0'>People Visited</p>
      <p className='margin-0'>10,253</p>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="grid-item-cards">
    <div className={`card ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <img src={require('../../images/APSD.png')} alt="APSD" />
      <div><p className='margin-0'>Average store day</p>
      <p className='margin-0'>$3,021.74</p>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="grid-item-cards">
    <div className={`card ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <img src={require('../../images/UPSD.png')} alt="UPSD" />
      <div><p className='margin-0'>Unit per store day</p>
      <p className='margin-0'>$1,080</p>
      </div>
    </div>
  </div>
</div>
{/*Chart Data*/}
<div className='grid-container-cards-charts'>
  <div className='grid-item-cards-charts'>
  <div className={`card-chart ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
  {revenuesData ? (
              <canvas id="revenuesBarChart" width="400" height="200"></canvas>
            ) : (
              <p>Loading chart data...</p>
            )}
    </div>
  </div>
  <div className='grid-item-cards-charts'>
  <div className={`card-chart ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
  {popularSalesItemsData ? (
              <div className="table-container">
                <table className="sales-item-table">
                  <thead>
                    <tr>
                      <th>Item Category</th>
                      <th>APSD</th>
                      <th>UPSD</th>
                      <th>SKU Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Map and render the rows of Total Popular Sales Items data here */}
                    {popularSalesItemsData.labels.map((label, index) => (
                      <tr key={index}>
                        <td>{label}</td>
                        <td>${popularSalesItemsData.datasets[0].data[index]}</td>
                        <td>${popularSalesItemsData.datasets[1].data[index]}</td>
                        <td>
                            <div className="sku-stock-bar">
                            <div
                            className={`green-bar ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
                            style={{
                            width: `${(popularSalesItemsData.datasets[2].data[index] / 25) * 100}%`,
                            }}
                            ></div>
                            <div
                            className={`red-bar ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
                            style={{
                            width: `${100 - (popularSalesItemsData.datasets[2].data[index] / 25) * 100}%`,
                            }}
                            ></div>
                            </div>
                        </td>
                        </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading table data...</p>
      )}
    </div>
  </div>
</div>
    </div>
  );
}

export default DashboardContent;