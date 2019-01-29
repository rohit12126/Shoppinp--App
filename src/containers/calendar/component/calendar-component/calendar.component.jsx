import React from 'react'
import './calendar.component.css';

const CalendarComponent = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="calendar-container">
          <div className="header">
            <h2>Calendar</h2>
          </div>
          <br />
          <div className="calendar-section">
            {/* load calendar */}
            <div id="mycalendar" />
          </div>
        </div>
      </div>
    </>
  )
};


export default CalendarComponent;
