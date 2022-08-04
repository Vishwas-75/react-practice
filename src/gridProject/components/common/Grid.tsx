import React from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";

const Grid: React.FC<AgGridReactProps> = (props) => {
  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "100%",
        width: "100%",
        marginTop: "5px"
      }}
    >
      <AgGridReact {...props} />
    </div>
  );
};

export default Grid;
