import React, { Component } from "react";
import "./table.css";
import TableView from "./component/table-component/table-component";
import axios from "axios";

class Table extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      bckUsersList: [],
      selectedIndexes: []
    };
  }

  componentDidMount = () => {
    this.getUserData();
  };

  getUserData = () => {
    const url =
      "https://randomuser.me/api/?results=500&format=json&inc=name,gender,location,email,phone,cell,dob,id,picture";
    axios
      .get(url)
      .then(res => {
        console.log("table data: ", res);
        if (res.status === 200) {
          let temp = [];
          res.data.results.forEach((k,i) => {
            k.uname = k.name.first + ' ' + k.name.last;
            k.userAge = k.dob.age;
            temp.push(k);
            if (res.data.results.length-1 === i) {
              this.setState({
                users: temp,
                bckUsersList: temp
              });
            }
          });
        }
      })
      .catch(err => console.log("err in fetching table data: ", err));
  };

  rowGetter = i => {
    let data = [...this.state.users];
    if (data && data.length) {
      let row = data[i];
      if (row && row.location) {
        row.number = i + 1;
        row.userAddress =
          row.location.street +
          " " +
          row.location.city +
          " " +
          row.location.state;
      }
      return row;
    }
  };

  onGridSort = (initialRows, sortColumn, sortDirection) => {
    const originalUsersList = [...this.state.bckUsersList];
    let sortedUsersList = [...this.state.users];
    const comparer = (a, b) => {
      if (sortDirection === "ASC") {
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
      } else if (sortDirection === "DESC") {
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
      }
    };
    if (sortDirection === "NONE") {
      this.setState({ users: originalUsersList });
      return;
    } else {
      sortedUsersList.sort(comparer);
      this.setState({ users: sortedUsersList });
      return;
    }
  };

  onRowsSelected = (rows) => {
    this.setState({
      selectedIndexes: this.state.selectedIndexes.concat(
        rows.map(r => r.rowIdx)
      )
    });
  };

  onRowsDeselected = (rows) => {
    let rowIndexes = rows.map(r => r.rowIdx);
    this.setState({
      selectedIndexes: this.state.selectedIndexes.filter(
        i => rowIndexes.indexOf(i) === -1
      )
    });
  };

  render() {
    return (
      <div className="table-container">
        <h2>Table</h2>
        <br />
        <TableView
          userData={this.state.users}
          rowGetter={this.rowGetter}
          rowCount={this.state.users.length}
          onGridSort={this.onGridSort}
          onRowsSelected={this.onRowsSelected}
          onRowsDeselected={this.onRowsDeselected}
          selectedIndexes={this.state.selectedIndexes}
        />
      </div>
    );
  }
}

export default Table;
