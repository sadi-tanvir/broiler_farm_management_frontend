import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"


const UserInformation = () => {

    // redux
    const { user } = useSelector(state => state.loginReducer)

    console.log(user);

    return (
        <>
            <div className="col-12 col-xl-4 my-4">
                <div className="card h-100">
                    <div className="card-header pb-0 p-3">
                        <div className="row">
                            <div className="col-md-8 d-flex align-items-center">
                                <h4 className="mb-0">Profile Information</h4>
                            </div>
                            <div className="col-md-4 text-end">
                                <i className="fas fa-user-edit text-secondary text-sm cursor-pointer" data-bs-toggle="modal" data-bs-target="#changeUserInfo" title="Edit Profile"></i>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-3">
                        {/* <p className="text-sm">
                            Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                        </p> */}
                        {/* <hr className="horizontal gray-light my-4" /> */}
                        <ul className="list-group">
                            <li className="list-group-item border-0 ps-0 pt-0 text-sm">
                                <strong className="text-dark">Full Name:</strong> {user.name}
                            </li>
                            <li className="list-group-item border-0 ps-0 text-sm">
                                <strong className="text-dark">Mobile:</strong> {user.phone}
                            </li>
                            <li className="list-group-item border-0 ps-0 text-sm">
                                <strong className="text-dark">Email:</strong> {user.email}
                            </li>
                            <li className="list-group-item border-0 ps-0 text-sm">
                                <strong className="text-dark">User Role:</strong> {user.role}
                            </li>
                            <li className="list-group-item border-0 ps-0 text-sm">
                                <strong className="text-dark">Join Date:</strong> {user.createdAt}
                            </li>
                            <li className="list-group-item border-0 ps-0 text-sm">
                                <strong className="text-dark">Location:</strong> Bangladesh
                            </li>
                            <li className="list-group-item border-0 ps-0 pb-0">
                                <strong className="text-dark text-sm">Social:</strong>
                                <Link className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" to="#">
                                    <i className="fab fa-facebook fa-lg"></i>
                                </Link>
                                <Link className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" to="#">
                                    <i className="fab fa-twitter fa-lg"></i>
                                </Link>
                                <Link className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" to="#">
                                    <i className="fab fa-instagram fa-lg"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserInformation
