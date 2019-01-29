import React from "react";
import ReactDataGrid from "react-data-grid";
import "./table-component.css";

const columns = [
  { key: "number", name: "#", width: 50, sortable: true },
  { key: "uname", name: "Name", width: 250, sortable: true },
  { key: "email", name: "Email", width: 250, sortable: true },
  { key: "userAge", name: "Age", width: 80, sortable: true },
  { key: "gender", name: "Gender", width: 150 },
  { key: "cell", name: "CellNumber", width: 200 },
  { key: "phone", name: "Phone", width: 200 },
  { key: "userAddress", name: "Address", width: 500 }
];

let rows = [];

const TableView = props => {
  const rowText = props.selectedIndexes.length === 0 ? "No row" : props.selectedIndexes.length === 1 ? "row" : "rows";
  rows = props.userData;
  let ele = null;
  if (rows && rows.length) {
    ele = (
      <>
        <span>
          {props.selectedIndexes.length ? props.selectedIndexes.length : null} {rowText} selected
        </span>
        <ReactDataGrid
          columns={columns}
          rowGetter={props.rowGetter}
          rowsCount={props.rowCount}
          minHeight={1000}
          onGridSort={(sortColumn, sortDirection) =>
            props.onGridSort(rows, sortColumn, sortDirection)
          }
          rowSelection={{
            showCheckbox: true,
            enableShiftSelect: true,
            onRowsSelected: props.onRowsSelected,
            onRowsDeselected: props.onRowsDeselected,
            selectBy: {
              indexes: props.selectedIndexes
            }
          }}
        />
      </>
    );
  } else {
    ele = <p>No data to show</p>;
  }
  return <div className="table-container-section">{ele}</div>;
};

export default TableView;
