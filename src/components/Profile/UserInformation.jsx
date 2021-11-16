import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"


const UserInformation = () => {

    // redux
    const { user } = useSelector(state => state.loginReducer)


    return (
        <>
            <div class="col-12 col-xl-4 my-4">
                <div class="card h-100">
                    <div class="card-header pb-0 p-3">
                        <div class="row">
                            <div class="col-md-8 d-flex align-items-center">
                                <h4 class="mb-0">Profile Information</h4>
                            </div>
                            <div class="col-md-4 text-end">
                                <i class="fas fa-user-edit text-secondary text-sm cursor-pointer" data-bs-toggle="modal" data-bs-target="#changeUserInfo" title="Edit Profile"></i>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-3">
                        {/* <p class="text-sm">
                            Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                        </p> */}
                        {/* <hr class="horizontal gray-light my-4" /> */}
                        <ul class="list-group">
                            <li class="list-group-item border-0 ps-0 pt-0 text-sm">
                                <strong class="text-dark">Full Name:</strong> {user.name}
                            </li>
                            <li class="list-group-item border-0 ps-0 text-sm">
                                <strong class="text-dark">Mobile:</strong> {user.phone}
                            </li>
                            <li class="list-group-item border-0 ps-0 text-sm">
                                <strong class="text-dark">Email:</strong> {user.email}
                            </li>
                            <li class="list-group-item border-0 ps-0 text-sm">
                                <strong class="text-dark">Location:</strong> Bangladesh
                            </li>
                            <li class="list-group-item border-0 ps-0 pb-0">
                                <strong class="text-dark text-sm">Social:</strong>
                                <Link class="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" to="#">
                                    <i class="fab fa-facebook fa-lg"></i>
                                </Link>
                                <Link class="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" to="#">
                                    <i class="fab fa-twitter fa-lg"></i>
                                </Link>
                                <Link class="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" to="#">
                                    <i class="fab fa-instagram fa-lg"></i>
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
