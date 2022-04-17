import React from 'react'
import { Link } from "react-router-dom"

const RightMenu = () => {
    return (
        <>
            <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                <div className="nav-wrapper position-relative end-0">
                    <ul className="nav nav-pills nav-fill p-1 bg-transparent" role="tablist">
                        <li className="nav-item animate__animated animate__backInRight animate__slow">
                            <Link className="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" to="#" role="tab" aria-selected="true">
                                <span data-bs-toggle="modal" data-bs-target="#changeUserInfo" className={`badge badge-sm bg-gradient-info text-lowercase`}>
                                    <i className="fas fa-user-edit"></i> Info
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item animate__animated animate__backInDown animate__slow">
                            <Link className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" to="#" role="tab" aria-selected="false">
                                <span data-bs-toggle="modal" data-bs-target="#changeProfilePic" className={`badge badge-sm bg-gradient-primary text-lowercase`}>
                                    <i className="fas fa-camera"></i> Profile
                                </span>

                            </Link>
                        </li>
                        <li className="nav-item animate__animated animate__backInLeft animate__slow">
                            <Link className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" to="#" role="tab" aria-selected="false">
                                <span data-bs-toggle="modal" data-bs-target="#changeCoverPic" className={`badge badge-sm bg-gradient-warning text-lowercase`}>
                                    <i className="fas fa-images"></i> Cover
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RightMenu
