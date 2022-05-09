import { useParams } from "react-router-dom";
import VehicleTable from "./TableContent/VehicleTable";
import VehicleStatus from "./Status/VehicleStatus";
import Graph from "./Graph/Graph";
import style from "./Vehicle.module.css";

const VehicleContent = () => {
  const { vehicle } = useParams();

  return (
    <div className={style.ContentContainer}>
      <p>
        Vehicle &nbsp;
        <span className={style.symbol}>&rsaquo;</span> &nbsp;
        <span className={style.vehicleName}>{vehicle}</span>
      </p>
      <div className={style.StatusStatistics}>
        <VehicleStatus />
        <Graph />
      </div>
      <VehicleTable vehicle={vehicle} />
    </div>
  );
};

export default VehicleContent;