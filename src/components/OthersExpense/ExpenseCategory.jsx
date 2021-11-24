import React, {useState} from 'react'
import { Link } from "react-router-dom"
import classes from "../../styles/OthersExpense.module.css"

const ElectricityBill = ({ headerClass, headerOpenId, ariaExpanded, headingText, divCollapseId, divCollapseClass, children }) => {

    // state
    const [iconRotate, setIconRotate] = useState(false)



    return (
        <>
            <div className="accordion-item">
                <Link onClick={() => setIconRotate(() => iconRotate ? false : true)} to="#" className={`btn btn-info bg-gradient btn-sm ${classes.btnStyle}`}>

                    <h4 class={headerClass} id={headerOpenId}>
                        <button className="accordion-button text-capitalize" style={{ margin: 0, padding: 0 }} type="button" data-bs-toggle="collapse" data-bs-target={`#${divCollapseId}`} aria-expanded={ariaExpanded} aria-controls={divCollapseId}>
                            <h3 className={`text-white ${classes.headingText}`}>{headingText}</h3>
                            <i class={`fas fa-sort-down ${classes.iconStyle} ${iconRotate ? classes.iconRotate : ''}`}></i>
                        </button>
                    </h4>
                </Link>
                <div id={divCollapseId} class={divCollapseClass} aria-labelledby={headerOpenId}>
                    <div className="accordion-body" style={{ margin: 0, padding: 0 }}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ElectricityBill
