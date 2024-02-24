import "@babel/polyfill";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./assets/data.json";
import TableComponent from "./TableComponent";
import CustomPieChart from "./CustomPieChart";
import CustomBarChart from "./CustomBarChart";
import {
  GlobalFilter,
  DefaultFilterForColumn,
  SelectColumnFilter,
} from "./Filter";

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "username",
        disableFilters: true, 
        Cell: ({ cell: { value } }) => value || "-",
      },
      {
        Header: "Zone",
        accessor: "zone",
        Filter: SelectColumnFilter,
        filter: "includes",
      },

      {
        Header: "Device Brand",
        accessor: "device_brand",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Sdk Version",
        accessor: "sdk_int",
        disableFilters: true, 
        Cell: ({ cell: { value } }) => value || "-",
      },
      {
        Header: "Vehicle Brand",
        accessor: "vehicle_brand",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Vehicle CC",
        accessor: "vehicle_cc",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
    ],
    []
  );

  return (
    <div>
      <TableComponent columns={columns} data={data} />
      <CustomPieChart />
      <CustomBarChart />
    </div>
  );
}

export default App;
