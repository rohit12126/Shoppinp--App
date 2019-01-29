import React from 'react'
import './dropdown.css';

const DropdownComponent = (props) => {
  return (
    <div className="dropdown dropdown-section">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dateRangeDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Select range
      </button>
      <div className="dropdown-menu" aria-labelledby="dateRangeDropdown">
        <button className="dropdown-item" type="button" onClick={props.handlePastWeek}>Past one week</button>
        <button className="dropdown-item" type="button" onClick={props.handlePastMonth}>Past one month</button>
        <button className="dropdown-item" type="button" onClick={props.handlePastYear}>Past year</button>
      </div>
    </div>
  );
};

export default DropdownComponent;
