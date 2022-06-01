import React from 'react'
import classes from "../../styles/Table.module.css"
import classes2 from "../../styles/Color.module.css"



const InfoTableHeader = ({ children, header, col1, col2, col3, col4, col5, col6, onChange, search }) => {
    return (
        <>
            {/* <div className="container-fluid py-4"> */}
            <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-header pb-0 d-flex">
                            <h3 className={`text-gradient d-none d-sm-inline ${classes.tableHeader} ${classes2.headerColor} animate__animated animate__backInRight animate__slow`}>{header}</h3>
                            <h5 className={`text-gradient d-sm-none ${classes.tableHeader} ${classes2.headerColor} animate__animated animate__backInRight animate__slow`}>{header}</h5>

                            <div className={`ms-md-auto pe-md-3 d-flex align-items-center ${classes.searchInp} animate__animated animate__backInLeft animate__slow`}>
                                {search ? null :
                                    <div className="input-group">
                                        <input
                                            onChange={onChange}
                                            type="text"
                                            className="form-control"
                                            placeholder="search"
                                        />
                                        <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true"></i></span>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="card-body px-0 pt-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            {col1 && <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{col1}</th>}
                                            {col2 && <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{col2}</th>}
                                            {col3 && <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{col3}</th>}
                                            {col4 && <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{col4}</th>}
                                            {col5 && <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{col5}</th>}
                                            {col6 && <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{col6}</th>}
                                            <th className="text-secondary opacity-7"></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {/* table row */}
                                        {children}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default InfoTableHeader