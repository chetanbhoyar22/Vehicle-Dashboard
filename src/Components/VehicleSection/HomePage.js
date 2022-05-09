import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={style.MainContainer}>
      <div className={style.Content}>
        <h1>Welcome To Vehicle Dashboard</h1>
        <p>
          To show any vehicle details click on Add Vehicle {" "}
          button from the vehicle viewer dashboard.
        </p>
      </div>
    </div>
  );
};

export default HomePage;