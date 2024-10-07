import React from 'react';
import './StrategyCard.css';

const StrategyCard = ({ strategies, selectedDate }) => {
  if (strategies.length === 0) {
    return <p className='no-data no-data-text'>There are no strategies for
      <span className='no-data-date'> {selectedDate}</span></p>;
  }

  const countStrategies = (strategyList) => {
    const strategyCount = {};
    strategyList.forEach((strategy) => {
      strategyCount[strategy] = (strategyCount[strategy] || 0) + 1;
    });
    return strategyCount;
  };

  const strategyCount = countStrategies(strategies);

  return (
    <div className="strategy-cards">
      {Object.entries(strategyCount).map(([strategyName, count]) => (
        <div key={strategyName} className="strategy-card">
          <p>{strategyName}</p>
          <p className='strategy-count'> <span className='strategy-card-bulletPoint'> &#8226;</span>{count} {count === 1 ? 'Strategy' : 'Strategies'}</p>
        </div>
      ))}
    </div>
  );
};

export default StrategyCard;
