import React from "react";
import Piechart from "./Chart/Piechart";
import MonthDetect from "./Chart/MonthDetect";

const ChartAnalysis = () => {
  return (
    <>
      <div className="container-fluid py-4">
        <div className="row my-4">
          <div className="col-lg-4 col-md-6 animate__animated animate__backInRight animate__slow">
            <h2 className="text-xl font-weight-bold text-danger">
              Monthly Sales Analysis
            </h2>
            <div className="d-flex justify-content-center align-items-center">
              <Piechart />
              <MonthDetect />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartAnalysis;
