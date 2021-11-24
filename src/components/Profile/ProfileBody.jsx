import React from 'react'






const ProfileBody = () => {
    return (
        <>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-12 col-xl-4">
                        <div className="card h-100">
                            <div className="card-header pb-0 p-3">
                                <h6 className="mb-0">Platform Settings</h6>
                            </div>
                            <div className="card-body p-3">
                                <h6 className="text-uppercase text-body text-xs font-weight-bolder">Account</h6>
                                <ul className="list-group">
                                    <li className="list-group-item border-0 px-0">
                                        <div className="form-check form-switch ps-0">
                                            <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault" checked />
                                            <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault">Email me when someone follows me</label>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 px-0">
                                        <div className="form-check form-switch ps-0">
                                            <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1" />
                                            <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault1">Email me when someone answers on my post</label>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 px-0">
                                        <div className="form-check form-switch ps-0">
                                            <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked />
                                            <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault2">Email me when someone mentions me</label>
                                        </div>
                                    </li>
                                </ul>
                                <h6 className="text-uppercase text-body text-xs font-weight-bolder mt-4">Application</h6>
                                <ul className="list-group">
                                    <li className="list-group-item border-0 px-0">
                                        <div className="form-check form-switch ps-0">
                                            <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault3" />
                                            <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault3">New launches and projects</label>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 px-0">
                                        <div className="form-check form-switch ps-0">
                                            <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault4" checked />
                                            <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault4">Monthly product updates</label>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 px-0 pb-0">
                                        <div className="form-check form-switch ps-0">
                                            <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault5" />
                                            <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault5">Subscribe to newsletter</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>




                    <div className="col-12 col-xl-4">
                        <div className="card h-100">
                            <div className="card-header pb-0 p-3">
                                <div className="row">
                                    <div className="col-md-8 d-flex align-items-center">
                                        <h6 className="mb-0">Profile Information</h6>
                                    </div>
                                    <div className="col-md-4 text-end">
                                        <a href="javascript:;">
                                            <i className="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-3">
                                <p className="text-sm">
                                    Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                                </p>
                                <hr className="horizontal gray-light my-4" />
                                <ul className="list-group">
                                    <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Full Name:</strong> &nbsp; Alec M. Thompson</li>
                                    <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Mobile:</strong> &nbsp; (44) 123 1234 123</li>
                                    <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; alecthompson@mail.com</li>
                                    <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Location:</strong> &nbsp; USA</li>
                                    <li className="list-group-item border-0 ps-0 pb-0">
                                        <strong className="text-dark text-sm">Social:</strong> &nbsp;
                                        <a className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                            <i className="fab fa-facebook fa-lg"></i>
                                        </a>
                                        <a className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                            <i className="fab fa-twitter fa-lg"></i>
                                        </a>
                                        <a className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                            <i className="fab fa-instagram fa-lg"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileBody
