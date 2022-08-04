import React, { useMemo } from "react";
import { ColDef, ColGroupDef } from "ag-grid-community";
import { category, productColumns } from "./productColumns";
import { data } from "src/lib/constant/data";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Grid from "../common/Grid";
import useGridApi from "src/gridProject/hooks/useGridApi";

function ProductList() {
  const { gridApi, onGridReady } = useGridApi();
  const commonColumnDefs: ColDef | ColGroupDef = useMemo(() => {
    return {
      flex: 1,
    };
  }, []);

  const handleFilter = async (item: string) => {
    const categoryFilterInstance = gridApi?.getFilterInstance("category");
    categoryFilterInstance?.setModel({
      filterType: "text",
      type: "startsWith",
      filter: item,
    });

    gridApi?.onFilterChanged();
  };

  return (
    <div style={{ height: "100%" }}>
      {category.map((item) => (
        <button key={item} onClick={() => handleFilter(item)}>
          {item}
        </button>
      ))}
      <Grid
        columnDefs={productColumns}
        rowData={data}
        defaultColDef={commonColumnDefs}
        pagination={true}
        paginationAutoPageSize={true}
        onGridReady={onGridReady}
      />
    </div>
  );
}

export default ProductList;
