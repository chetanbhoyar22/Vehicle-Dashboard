import { Chart } from './Chart';
import style from './Graph.module.css';

const Graph = () => {
    return (
        <div className={style.GraphContainer} >
            <div className={style.GraphHeading}>
                <div className={style.LeftHeading}>
                    <span>Statistics</span>
                    <span className={style.backgroundGrey}>Booking</span>
                    <span className={style.backgroundGrey}>Earning</span>
                </div>
                <div className={style.RightHeading}>
                    <span className={style.backgroundGrey}>D</span>
                    <span className={style.backgroundGrey}>W</span>
                    <span className={style.backgroundGrey}>M</span>
                    <span className={style.backgroundGrey}>Y</span>
                    <span className={style.backgroundGrey}>Max</span>
                </div>
            </div>
            <div className={style.GraphBody}>
                <Chart />
            </div>
        </div>
    );
}

export default Graph;