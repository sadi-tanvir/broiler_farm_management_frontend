import React, { memo } from 'react'
import classes from "../../styles/Overview.module.css"
import classes2 from "../../styles/Color.module.css"



const OverView = ({ children, childrenDivClass, overviewHeader }) => {

    return (
        <>
            <div className="card">
                <div className="card-header pb-0">
                    <h4 className={`${classes.overviewHeader} ${classes2.headerColor} text-gradient`}>{overviewHeader}</h4>
                </div>
                <div className="card-body p-3">
                    <div className={`timeline timeline-one-side ${childrenDivClass}`}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(OverView)
