import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { data } from "./assets/data.json";

function CustomPieChart() {
  const [vehicleData, setVehicleData] = useState([]);
  const [deviceData, setDeviceData] = useState([]);
  const [vehicleCCData, setVehicleCCData] = useState([]);

  useEffect(() => {
    const updateVehicleData = () => {
      const newData = updateData("vehicle_brand");
      setVehicleData(newData);
    };

    updateVehicleData();
  }, []);

  useEffect(() => {
    const updateDeviceData = () => {
      const newData = updateData("device_brand");
      setDeviceData(newData);
    };

    updateDeviceData();
  }, []);

  useEffect(() => {
    const updateVehicleCCData = () => {
      const newData = updateData("vehicle_cc");
      setVehicleCCData(newData);
    };

    updateVehicleCCData();
  }, []);

  const updateData = (property) => {
    const dataArray = getPropertyData(property);
    return dataArray.map((item) => {
      const filteredData = data.filter(
        (entry) => entry[property] === item.title
      );
      const total = filteredData.length;
      return { ...item, value: total };
    });
  };

  const getPropertyData = (property) => {
    switch (property) {
      case "vehicle_brand":
        return [
          { title: "Hero", color: "#E38627" },
          { title: "Bajaj", color: "#C13C37" },
          { title: "Suzuki", color: "#6A2135" },
          { title: "Ola", color: "#00BFFF" },
          { title: "Yamaha", color: "#FF00FF" },
          { title: "Honda", color: "#FFD700" },
          { title: "TVS", color: "#7FFF00" },
          { title: "Other", color: "#A52A2A" },
        ];
      case "device_brand":
        return [
          { title: "Realme", color: "#6495ED" },
          { title: "Samsung", color: "#228B22" },
          { title: "Oppo", color: "#FF1493" },
          { title: "Motorola", color: "#FFA500" },
          { title: "Xiaomi", color: "#DC143C" },
          { title: "Oneplus", color: "#0000FF" },
          { title: "Vivo", color: "#FF4500" },
          { title: "Nothing", color: "#FF0000" },
          { title: "Tecno", color: "#00FFFF" },
          { title: "Infinix Mobility Limited", color: "#008000" },
          { title: "Asus", color: "#800080" },
          { title: "Sony", color: "#FFFF00" },
          { title: "Wingtech", color: "#FF6347" },
        ];
      case "vehicle_cc":
        return [
          { title: "100-125 cc", color: "#6495ED" },
          { title: "Not applicable", color: "#228B22" },
          { title: "Less than 100 cc", color: "#FF1493" },
          { title: "135-160 cc", color: "#FFA500" },
          { title: "180-250 cc", color: "#DC143C" },
        ];
      default:
        return [];
    }
  };

  const renderLabel = ({ dataEntry }) => {
    if (dataEntry.percentage < 5) return "";
    return `${dataEntry.title}: ${Math.round(dataEntry.percentage)}%`;
  };

  return (
    <div className="row">
      <h1 className="text-center mb-4">Pie Charts</h1>
      <div className="col-md-4">
        <h2 className="text-center text-danger mb-3">Vehicle Brand</h2>
        <div style={{ maxWidth: "250px", margin: "0 auto" }}>
          <PieChart
            data={vehicleData}
            lineWidth={15}
            paddingAngle={5}
            radius={50}
            label={renderLabel}
            labelPosition={50}
            labelStyle={{
              fontSize: "5px",
              fontFamily: "sans-serif",
            }}
          />
        </div>
      </div>
      <div className="col-md-4">
        <h2 className="text-center text-danger mt-3 mb-3">Device Brand</h2>
        <div style={{ maxWidth: "250px", margin: "0 auto" }}>
          <PieChart
            data={deviceData}
            lineWidth={15}
            paddingAngle={5}
            radius={50}
            label={renderLabel}
            labelPosition={50}
            labelStyle={{
              fontSize: "5px",
              fontFamily: "sans-serif",
            }}
          />
        </div>
      </div>
      <div className="col-md-4">
        <h2 className="text-center text-danger mt-3 mb-3">Vehicle CC</h2>
        <div style={{ maxWidth: "250px", margin: "0 auto" }}>
          <PieChart
            data={vehicleCCData}
            lineWidth={15}
            paddingAngle={5}
            radius={50}
            label={renderLabel}
            labelPosition={50}
            labelStyle={{
              fontSize: "5px",
              fontFamily: "sans-serif",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CustomPieChart;
