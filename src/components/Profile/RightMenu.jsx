import React from 'react'
import { Link } from "react-router-dom"

const RightMenu = () => {
    return (
        <>
            <div class="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                <div class="nav-wrapper position-relative end-0">
                    <ul class="nav nav-pills nav-fill p-1 bg-transparent" role="tablist">
                        <li class="nav-item">
                            <Link class="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" to="#" role="tab" aria-selected="true">
                                <span data-bs-toggle="modal" data-bs-target="#changeUserInfo" className={`badge badge-sm bg-gradient-info text-lowercase`}>
                                    <i class="fas fa-user-edit"></i> Info
                                </span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" to="#" role="tab" aria-selected="false">
                                <span data-bs-toggle="modal" data-bs-target="#changeProfilePic" className={`badge badge-sm bg-gradient-primary text-lowercase`}>
                                    <i class="fas fa-camera"></i> Profile
                                </span>

                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" to="#" role="tab" aria-selected="false">
                                <span data-bs-toggle="modal" data-bs-target="#changeCoverPic" className={`badge badge-sm bg-gradient-warning text-lowercase`}>
                                    <i class="fas fa-images"></i> Cover
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
