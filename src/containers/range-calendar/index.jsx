import React, { Component } from 'react'
import './range-calendar.css';
import $ from 'jquery';
import moment from "moment";

class RangeCalendar extends Component {
  constructor() {
    super();
    this.state = {
      startDate: moment().format("DD-MM-YYYY"),
      endDate: moment().format("DD-MM-YYYY")
    };
    this.rangeCal = React.createRef();
  }


  componentDidMount = () => {
    this.$rangeCal = $(this.rangeCal);
    this.$rangeCal.fullCalendar({
      defaultView: 'month',
      header: {
        left: "prev,next today myCustomButton",
        center: "title",
        right: "month"
      },
      defaultDate: moment(),
      height: 500,
      showNonCurrentDates: true,
      selectable: true,
      unselectAuto: false,
      select: this.handleSelect,
    });
  };


  componentWillUnmount() {
    this.$rangeCal.fullCalendar('destroy');
  }


  handleSelect = (start, end, event, view) => {
    this.setState({
      startDate: start.format("DD-MM-YYYY"),
      endDate: end.subtract(1, 'days').format("DD-MM-YYYY")
    })
  }


  render() {
    return (
      <div className="range-calendar-container">
        <h2>Range Calendar</h2>
        <br/>
        <h3>Selected range &nbsp; <span style={{color: 'red'}}>From:</span> {this.state.startDate} &nbsp; - &nbsp; <span style={{color: 'green'}}>To:</span> {this.state.endDate}</h3>
        <br/>
        {/* calendar empty div */}
        <div className="range-calendar-section" ref={el => this.rangeCal = el} />
      </div>
    )
  }

};

export default RangeCalendar;
