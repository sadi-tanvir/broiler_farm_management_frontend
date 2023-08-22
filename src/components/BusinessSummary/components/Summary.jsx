import React from 'react';
// import classes from "../../../styles/Overview.module.css"
import classes from "../../../styles/Table.module.css"

const Summary = ({ title, countOfSell, summary, profit, TotalFigure }) => {
    return (
        <>
            <div class="col-md-6 mt-md-0 mt-4">
                <div class="card shadow-lg">
                    <div class="card-header mx-4 p-3 text-center">
                        <div class="icon icon-shape icon-lg bg-gradient-secondary shadow text-center border-radius-lg">
                            <i class="fab fa-paypal opacity-10"></i>
                        </div>
                    </div>
                    <div class="card-body pt-0 p-3 text-center">
                        <h6 class={`${classes.tableHeader} text-info text-center mb-0`}>{title}</h6>
                        {countOfSell && <span class={`${classes.tableHeader} text-xs`}>
                            {countOfSell}
                        </span>}
                        <br />
                        {summary && <span class={`${classes.tableHeader} text-xs`}>
                            {summary}
                        </span>}
                        <hr class="horizontal dark my-3" />
                        <h5 class={`${classes.tableHeader} text-secondary font-bold mb-0`}>
                            {parseFloat(TotalFigure).toFixed(2)} BDT
                            {profit && <span className={`ml-3 ${profit < 0 ? 'text-danger' : 'text-info'}`}> ({parseFloat(profit).toFixed(2)} tk)
                            </span>}
                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Summary;