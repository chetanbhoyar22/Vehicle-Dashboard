import { useContext } from "react";
import { DataContext } from "../../DataSection/Data";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import style from "./VehicleTable.module.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: 14,
    fontWeight: 500,
    padding: "13px",
    lineHeight: "17px",
    color: "#000000",
  },
  [`&.${tableCellClasses.body}`]: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: 14,
    fontWeight: 400,
    padding: "13px",
    lineHeight: "17px",
    color: "#000000",
  },
}));

const VehicleTable = ({ vehicle }) => {
  const [data] = useContext(DataContext);

  return (
    <div className={style.TableContainer}>
      <p>Recent Trips</p>
      <div className={style.VehicleTable}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead fontWeight={500}>
              <TableRow>
                <StyledTableCell>Start Time</StyledTableCell>
                <StyledTableCell align="left">Duration</StyledTableCell>
                <StyledTableCell align="left">Max Speed</StyledTableCell>
                <StyledTableCell align="left">Average Speed</StyledTableCell>
                <StyledTableCell align="left">Starting Voltage</StyledTableCell>
                <StyledTableCell align="left">Ending Voltage</StyledTableCell>
                <StyledTableCell align="left">Distance</StyledTableCell>
                <StyledTableCell align="left">Driver Score</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .filter((value) => value.vehicle === vehicle)
                .map(({ vehicleData }) =>
                  vehicleData.map((tableHeading, index) => {
                    const {
                      startTime,
                      duration,
                      maxSpeed,
                      averageSpeed,
                      startingVoltage,
                      endingVoltage,
                      distance,
                      driverScore,
                    } = tableHeading;
                    return (
                      <TableRow key={index}>
                        <StyledTableCell>{startTime}</StyledTableCell>
                        <StyledTableCell align="left">
                          {duration}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {maxSpeed}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {averageSpeed}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {startingVoltage}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {endingVoltage}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {distance}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {driverScore}
                        </StyledTableCell>
                      </TableRow>
                    );
                  })
                )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default VehicleTable;