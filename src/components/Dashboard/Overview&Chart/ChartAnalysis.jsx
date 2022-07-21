import React from "react";
import Piechart from "./Chart/Piechart";
import MonthDetect from "./Chart/MonthDetect";
import classes from "../../../styles/Overview.module.css"
import classes2 from "../../../styles/Color.module.css"

const ChartAnalysis = () => {
  return (
    <>
      <div className="col-lg-6 col-md-6 animate__animated animate__backInRight animate__slow">
        <div className="shadow-lg  py-5">
          <h4 className={`${classes.overviewHeader} ${classes2.headerColor} text-gradient text-center`}>
            chicks death analysis
          </h4>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <Piechart />
            <MonthDetect />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartAnalysis;
