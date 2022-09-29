import React from 'react';
import classes from "../../../styles/Overview.module.css"

const Summary = ({ title,summary,profit, TotalFigure }) => {
    return (
        <>
            <div class="col-md-6 mt-md-0 mt-4">
                <div class="card shadow-lg">
                    <div class="card-header mx-4 p-3 text-center">
                        <div class="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">
                            <i class="fab fa-paypal opacity-10"></i>
                        </div>
                    </div>
                    <div class="card-body pt-0 p-3 text-center">
                        <h6 class="text-center mb-0">{title}</h6>
                        <span class="text-xs">{summary}</span>
                        <hr class="horizontal dark my-3" />
                        <h5 class={`${classes.overviewRow} text-info font-bold mb-0`}>
                            {TotalFigure} BDT
                            {profit && <span className={`ml-3 ${profit < 0 ? 'text-danger': 'text-info'}`}> ({profit} tk)
                            </span>}
                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Summary;