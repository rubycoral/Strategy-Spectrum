import React, { useState } from 'react';
import './ToggleButton.css';

const ToggleButton = ({ views, defaultView, onChange }) => {
  const [selectedView, setSelectedView] = useState(defaultView);

  const handleViewChange = (view) => {
    setSelectedView(view);
    onChange(view);
  };

  return (
    <div className="toggle-container">
      {views.map((view) => (
        <button
          key={view}
          className={`toggle-btn ${selectedView === view ? 'active' : ''}`}
          onClick={() => handleViewChange(view)}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default ToggleButton;
