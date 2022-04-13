import React, { memo } from 'react'
import classes from "../../../styles/Color.module.css"
import SalesAddModal from "./age_slaes/SalesAddModal"

const Card = ({ children, iconClass, onClick,data_bs_target }) => {
    return (
        <>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                    <div className="card-body p-3">
                        <div className="row">
                            <div className="col-8">
                                <div className="numbers">
                                    {children}
                                </div>
                            </div>
                            <div className="col-4 text-end">
                                <div data-bs-toggle="modal" data-bs-target={`#${data_bs_target}`} onClick={onClick} className={`icon icon-shape bg-gradient-primary shadow text-center border-radius-md ${classes.iconColor}`}>
                                    <i className={iconClass}></i>
                                </div>
                                <SalesAddModal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Card)
