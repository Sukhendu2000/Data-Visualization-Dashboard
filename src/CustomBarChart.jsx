import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { data } from "./assets/data.json";

function CustomBarChart({ zones }) {
  const [vehicleData, setVehicleData] = useState([]);
  const [deviceData, setDeviceData] = useState([]);

  useEffect(() => {
    const updateChartData = () => {
      const vehicleChartData = updateData("vehicle_brand");
      const deviceChartData = updateData("handset_sdk_int");
      setVehicleData(vehicleChartData);
      setDeviceData(deviceChartData);
    };

    updateChartData();
  }, [zones]);

  const updateData = (property) => {
    const zoneFilteredData = zones
      ? data.filter((entry) => zones.includes(entry.zone))
      : data;

    const propertyCounts = {};
    zoneFilteredData.forEach((entry) => {
      const value = entry[property];
      propertyCounts[value] = (propertyCounts[value] || 0) + 1;
    });

    const dataArray = Object.entries(propertyCounts).map(([value, count]) => ({
      name: value ? value.toString() : "Unknown",
      count,
      color: getRandomColor(),
    }));

    return dataArray;
  };

  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <div className="row">
      <h1 className="text-center mt-5 mb-5 text-bold">Bar Charts</h1>
      <div className="col-md-6">
        <h1 className="text-center mb-5 text-danger">
          Vehicle Brand Distribution
        </h1>
        <BarChart
          width={500}
          height={400}
          data={vehicleData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>
      <div className="col-md-6">
        <h1 className="text-center mb-5 text-danger">
          Handset SDK Distribution
        </h1>
        <BarChart
          width={500}
          height={400}
          data={deviceData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
}

export default CustomBarChart;
