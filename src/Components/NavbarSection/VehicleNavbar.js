import { useState, useContext } from "react";
import { DataContext } from "../DataSection/Data";
import { Link } from "react-router-dom";
import SearchBox from "../SearchSection/Vehicle_Search";
import AddVehicle from "../AddSection/Vehicle_Add";
import style from "./Vehicle.module.css";

export const VehicleNavbar = () => {
  const [data] = useContext(DataContext); // fetching all data elements
  const [load, setLoad] = useState(false); // toggle between search & add-vehicle
  const [vehicle, setVehicle] = useState([]);

  const toggle = () => setLoad(!load);

  const removeVehicle = (id) => {
    let temp = [];
    vehicle.map((n) => (n === Number(id) ? "" : temp.push(n)));
    setVehicle(temp);
  };

  return (
    <div className={style.MainContainer}>
      <h1>Vehicle Viewer</h1>
      {
        //add/search button
        load ? (
          <SearchBox
            toggle={toggle}
            data={data}
            setLoad={setLoad}
            activeVehicle={vehicle}
            setActiveVehicle={setVehicle}
          />
        ) : (
          <AddVehicle toggle={toggle} />
        )
      }

      {vehicle.length //for active links
        ? data
            .filter((val) => vehicle.includes(val.id))
            .map(({ id, vehicle }, index) => (
              <div className={style.btnShade} key={index}>
                <i
                  className="fa-solid fa-circle-xmark"
                  id={style.extraBtn}
                  onClick={() => removeVehicle(`${id}`)}
                ></i>
                <Link to={`/${vehicle}`} className={style.btn}>
                  {" "}
                  {vehicle}{" "}
                </Link>
              </div>
            ))
        : null}
    </div>
  );
};