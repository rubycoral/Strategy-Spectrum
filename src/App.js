import React, { useState } from 'react';
import Toggle from './components/ToggleButton/ToggleButton';
import DateDropdown from './components/DateDropdown/DateDropdown';
import StrategyCards from './components/StrategyCard/StrategyCard';
import './App.css';

const dateArray = ['24 Apr 2024', '02 May 2024', '09 May 2024', '31 May 2024', '21 Jun 2024'];
const strategyArray = [
  {
    'View': 'Bullish',
    'Value': {
      '24 Apr 2024': ['Bull Call Spread', 'Bull Put Spread', 'Bull Put Spread', 'Long Call', 'Bull Put Spread', 'Bull Call Spread', 'Strategy1', 'Bull Call Spread', 'Strategy1', 'Strategy1', 'Spread-Strategy', 'Bull Call Spread'],

      '02 May 2024': ['Bull Call Spread', 'Bull Call Spread', 'Bull Put Spread', 'Long Call', 'Long Call', 'Long Call', 'Bull Put Spread', 'Bull Call Spread', 'Strategy1', 'Bull Call Spread', 'Strategy2', 'Strategy1', 'Strategy2', 'Bull Call Spread'],
      '09 May 2024': ['Strategy Put', 'Strategy Call', 'Strategy Call', 'Strategy Call', 'Strategy Put'],
    }
  },
  {
    'View': 'Bearish',
    'Value': {
      '24 Apr 2024': ['Bear Call Spread', 'Bear Call Spread', 'Bear Call Spread', 'Long Put', 'Long Put', 'Long Put', 'Bear Call Spread',],
      '31 May 2024': ['Long Put', 'Long Put', 'Long Put', 'Long Put', 'Long Put'],
      '21 Jun 2024': ['Strategy3', 'Strategy3', 'Bear Put Spread', 'Strategy3', 'Long Put', 'Long Put'],
    }
  },
  {
    'View': 'RangeBound',
    'Value': {
      '24 Apr 2024': ['Short Straddle', 'Short Strangle', 'Short Strangle', 'Iron Butterfly', 'Short Strangle', 'Short Straddle', 'Strategy1', 'Short Straddle', 'Strategy1', 'Strategy1', 'Spread-Strategy', 'Short Straddle'],

      '02 May 2024': ['Short Straddle', 'Short Straddle', 'Short Strangle', 'Iron Butterfly', 'Iron Butterfly', 'Iron Butterfly', 'Short Strangle', 'Short Straddle', 'Strategy1', 'Short Straddle', 'Strategy2', 'Strategy1', 'Strategy2', 'Short Straddle'],
      '21 Jun 2024': ['Iron Condor', 'Iron Butterfly', 'Iron Butterfly', 'Iron Butterfly', 'Iron Condor'],
    }
  },
  {
    'View': 'Volatile',
    'Value': {
      '02 May 2024': ['Long Straddle', 'Long Strangle', 'Long Strangle', 'Long Strangle', 'Long Straddle', 'Strategy1', 'Long Straddle', 'Strategy1', 'Strategy1', 'Spread-Strategy', 'Long Straddle'],
      '09 May 2024': ['Long Straddle', 'Long Straddle', 'Long Strangle', 'Long Strangle', 'Long Straddle', 'Strategy1', 'Long Straddle', 'Strategy2', 'Strategy1', 'Strategy2', 'Long Straddle'],
      '31 May 2024': ['Long Straddle', 'Long Strangle', 'Long Strangle', 'Long Strangle', 'Long Straddle'],
    }
  }
];

function App() {
  const [selectedView, setSelectedView] = useState('Bullish');
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  const handleViewChange = (view) => setSelectedView(view);
  const handleDateSelect = (date) => setSelectedDate(date);

  const getStrategiesForViewAndDate = (view, date) => {
    const selectedStrategy = strategyArray.find((item) => item.View === view);
    return selectedStrategy?.Value[date] || [];
  };

  const strategies = getStrategiesForViewAndDate(selectedView, selectedDate);

  return (
    <div className="app">
      <Toggle
        views={['Bullish', 'Bearish', 'RangeBound', 'Volatile']}
        defaultView={selectedView}
        onChange={handleViewChange}
      />
      <DateDropdown dates={dateArray} onDateSelect={handleDateSelect} />
      <StrategyCards strategies={strategies} selectedDate={selectedDate} />
    </div>
  );
}

export default App;
