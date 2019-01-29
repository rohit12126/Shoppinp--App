import React, { Component } from "react";
import "./calendar.css";
import CalendarComponent from "./component/calendar-component/calendar.component";
import $ from "jquery";
import moment from "moment";
import DropdownComponent from "./component/dropdown/dropdown-component";

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      calendarEvent: null,
      selectedDate: moment().format("DD-MM-YYYY"),
      dateRange: 0,
      dateRangeType: null
    };

    this.fCalendarRef = React.createRef();
  }

  componentDidMount = () => {
    this.loadCalendar();
  };

  componentWillUnmount = () => {
    this.state.calendarEvent.fullCalendar("destroy");
  }

  handleSelect = (start, end, event, view) => {
    if (start.add(1, "days").date() !== end.date()) {
      this.state.calendarEvent.fullCalendar("unselect");
      return;
    }

    // select the date and show
    this.setState({
      selectedDate: start.subtract(1, "days").format("DD-MM-YYYY")
    });
  };

  loadCalendar = () => {
    let calendarEvent = $("#mycalendar").fullCalendar({
      defaultView: "month",
      header: {
        left: "prev,next today myCustomButton",
        center: "title",
        right: "month"
      },
      defaultDate: moment(),
      height: 500,
      showNonCurrentDates: true,
      selectable: true,
      select: this.handleSelect,
      allDay: false,
      validRange: (nowDate) => {
        return {
          start: this.state.dateRangeType ? nowDate.clone().subtract(this.state.dateRange, this.state.dateRangeType) : null,
          end: nowDate
        };
      }
    });
    this.setState({ calendarEvent });
  };

  handlePastWeek = () => {
    this.setState({
      dateRange: 1,
      dateRangeType: 'weeks'
    });
  };

  handlePastMonth = () => {
    this.setState({
      dateRange: 1,
      dateRangeType: 'months'
    });
  };

  handlePastYear = () => {
    this.setState({
      dateRange: 1,
      dateRangeType: 'years'
    });
  };

  render() {
    return (
      <div className="calendar-container">
        <h2>Calendar</h2>
        <DropdownComponent
          handlePastWeek={this.handlePastWeek}
          handlePastMonth={this.handlePastMonth}
          handlePastYear={this.handlePastYear}
        />
        <br />
        <h3 className="date-section">
          Selected date: {this.state.selectedDate}
        </h3>
        <br />
        <CalendarComponent />
      </div>
    );
  }
}


export default Calendar;
