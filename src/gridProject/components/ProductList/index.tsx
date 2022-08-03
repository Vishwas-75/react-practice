import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, ColGroupDef } from "ag-grid-community";
import { productColumns } from "./productColumns";
import { data } from "src/lib/constant/data";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function ProductList() {
  const commonColumnDefs: ColDef | ColGroupDef = useMemo(() => {
    return {
      flex:1,
    };
  }, []);
  return (
    <div className="ag-theme-alpine" style={{ height: "100%" }}>
      <AgGridReact
        columnDefs={productColumns}
        rowData={data}
        defaultColDef={commonColumnDefs}
        pagination={true}
        paginationAutoPageSize={true}
      />
    </div>
  );
}

export default ProductList;
