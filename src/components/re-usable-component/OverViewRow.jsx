import React from 'react'
import classes from "../../styles/Overview.module.css"


const OverviewRow = ({ title, titleColor, iconClass, quantity, amount }) => {
    return (
        <>
            <div className="timeline-block mb-3">
                <span className="timeline-step">
                    <i className={iconClass}></i>
                </span>
                <div className="timeline-content">
                    <h2 className={`${titleColor} font-weight-bold mb-0 ${classes.overviewRow}`} style={{ fontSize: 20 }}>{title}</h2>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                        <span className={`${classes.overviewRow} badge badge-sm bg-gradient-danger`} style={{ fontSize: 12}}>{quantity}</span>
                        {amount && <span> - {amount}</span>}
                    </p>
                </div>
            </div>
        </>
    )
}

export default OverviewRow