import React, { memo } from 'react'
import { Link } from "react-router-dom"
import { SIDEBAR_OPEN, SIDEBAR_COLLAPSE } from "../../../redux/actions/types"
import { useDispatch, useSelector } from "react-redux"
import { apiBaseUrl } from "../../Utils/constant"
import classes from "../../../styles/Nav.module.css"


const NavHeader = () => {
    // redux
    const dispatch = useDispatch()
    const { sidebar } = useSelector(state => state.othersReducer)
    const { isAuthenticated, user } = useSelector(state => state.loginReducer)

    // sidebar show & collupse
    const sidebarView = () => {
        if (sidebar === false) {
            dispatch({ type: SIDEBAR_OPEN })
        } else {
            dispatch({ type: SIDEBAR_COLLAPSE })
        }
    }




    return (
        <>
            {/* <!-- Navbar --> */}
            <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
                <div className="container-fluid py-1 px-3">
                    <nav aria-label="breadcrumb">
                        <div className="cursor-pointer" href="#" >
                            <h6 className="font-weight-bolder mb-0 d-flex flex-row justify-content-center">
                                {/* <i class="fab fa-asymmetrik"></i> */}
                                <Link to="/">
                                    <i class={`fab fa-asymmetrik text-danger me-2 ${classes.logoIncon}`}></i>
                                </Link>
                                <span onClick={sidebarView} className={`text-info text-uppercase ${classes.logoText}`}>Tanvir Hossain Sadi</span>
                            </h6>
                        </div>
                    </nav>
                    <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                        <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Type here..." />
                                <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true"></i></span>
                            </div>
                        </div>
                        <ul className="navbar-nav  justify-content-end" style={{ paddingLeft: 15 }}>
                            <li className="nav-item d-flex align-items-center">
                                <Link to={isAuthenticated ? "/profile" : "/login"} className="nav-link text-body font-weight-bold px-0">
                                    {isAuthenticated ? null : <i className="fa fa-user me-sm-1" style={{ marginLeft: 6, marginRight: -6 }}></i>}
                                    {isAuthenticated ? <img src={`${apiBaseUrl}/profile-pic/${user.profile_pic}`} className="avatar avatar-xs me-3 img-fluid" alt="user1" /> : null}
                                    <span className="d-sm-inline d-none" style={{ marginLeft: isAuthenticated ? -10 : 1 }}>
                                        {isAuthenticated ? user.name : `Sign In`}
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item d-xl-none ps-3 d-flex align-items-center" style={{ paddingRight: 15 }}>
                                <a href="#" className="nav-link text-body p-0" id="iconNavbarSidenav">
                                    <div onClick={sidebarView} className="sidenav-toggler-inner">
                                        <i className="sidenav-toggler-line"></i>
                                        <i className="sidenav-toggler-line"></i>
                                        <i className="sidenav-toggler-line"></i>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- End Navbar --> */}
        </>
    )
}

export default memo(NavHeader)
