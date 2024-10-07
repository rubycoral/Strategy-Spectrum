import React, { useState, useEffect, useRef } from 'react';
import './DateDropdown.css';

const DateDropdown = ({ dates, onDateSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const dropdownRef = useRef(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsOpen(false);
    onDateSelect(date);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className={`custom-dropdown ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
        <div className="selected-date" onClick={toggleDropdown}>
          {selectedDate}
          <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}>&#9662;</span>
        </div>
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
          {dates.map((date) => (
            <div
              key={date}
              className={`dropdown-item ${date === selectedDate ? 'selected' : ''}`}
              onClick={() => handleDateSelect(date)}
            >
              {date}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DateDropdown;
