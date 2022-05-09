import style from "./Vehicle.module.css";

const Vehicle_Add = ({ toggle }) => {
  return (
    <button className={style.btn} onClick={toggle}>
      <i className="fa-solid fa-plus"></i>
      Add Vehicle
    </button>
  );
};

export default Vehicle_Add;
