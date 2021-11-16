import React, { memo } from 'react'
import { Link, useHistory } from "react-router-dom"
import classes from "../../../styles/Color.module.css"
import { SIDEBAR_OPEN, SIDEBAR_COLLAPSE, LOGOUT_USER } from "../../../redux/actions/types"
import { useDispatch, useSelector } from "react-redux"
import setAuthToken from "../../Utils/setAuthToken"
import { SvgDashboard, SvgFeed, SvgMedicine, SvgChicken, SvgRTL, SvgProfile, SvgSignin, SvgSignup } from "./SvgLink"
// img url
const img_1 = `./assets/img/curved-images/white-curved.jpeg`




const SideBar = () => {
    // redux
    const dispatch = useDispatch()
    const { sidebar } = useSelector(state => state.othersReducer)
    const { isAuthenticated, isAdmin } = useSelector(state => state.loginReducer)
    // const { } = useSelector(state => state.adminReducer)

    // router
    const history = useHistory()

    // sidebar show & collupse
    const sidebarView = () => {
        if (sidebar === false) {
            dispatch({ type: SIDEBAR_OPEN })
        } else {
            dispatch({ type: SIDEBAR_COLLAPSE })
        }
    }


    // logout function
    const logOut = () => {
        // clear redux store value
        dispatch({ type: LOGOUT_USER })

        // clear data from localStorage
        localStorage.clear()

        // auth header return false
        setAuthToken(false)

        history.push('/login')

    }
    return (
        <>
            <aside className={sidebar ? `sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-white` : `sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3`} id="sidenav-main">
                <div className="sidenav-header" onClick={sidebarView}>
                    <i className="p-3 mt-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0" aria-hidden="true" id="iconSidenav">
                        <div className="sidenav-toggler-inner">
                            <i className="sidenav-toggler-line"></i>
                            <i className="sidenav-toggler-line"></i>
                            <i className="sidenav-toggler-line"></i>
                        </div>
                    </i>
                    <Link className="navbar-brand m-0" to="#">
                        <img src="./assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo" />
                        <span className="ms-1 font-weight-bold">Soft UI Dashboard</span>
                    </Link>
                </div>
                <hr className="horizontal dark mt-0" />
                <div className="collapse navbar-collapse  w-auto  max-height-vh-100 h-100" id="sidenav-collapse-main">
                    <ul className="navbar-nav" onClick={sidebarView}>
                        {isAuthenticated ?
                            <li className="nav-item">
                                <Link className="nav-link  active" to="/">
                                    <div className={`icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center ${classes.iconColor}`}>
                                        <SvgDashboard />
                                    </div>
                                    <span className="nav-link-text ms-1">Dashboard</span>
                                </Link>
                            </li> : null}
                        {isAuthenticated ?
                            <li className="nav-item">
                                <Link className="nav-link" to="/feed-buy">
                                    <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <SvgFeed />
                                    </div>
                                    <span className="nav-link-text ms-1">Feed Buy</span>
                                </Link>
                            </li> : null}
                        {isAuthenticated ?
                            <li className="nav-item">
                                <Link className="nav-link" to="feed-finish">
                                    <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <SvgFeed />
                                    </div>
                                    <span className="nav-link-text ms-1">Feed Finish</span>
                                </Link>
                            </li> : null}
                        {isAuthenticated ?
                            <li className="nav-item">
                                <Link className="nav-link" to="/medicine">
                                    <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <SvgMedicine />
                                    </div>
                                    <span className="nav-link-text ms-1">Medicine</span>
                                </Link>
                            </li> : null}
                        {isAuthenticated ?
                            <li className="nav-item">
                                <Link className="nav-link  " to="/chicken-buy">
                                    <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <SvgChicken />
                                    </div>
                                    <span className="nav-link-text ms-1">Chicken Buy</span>
                                </Link>
                            </li> : null}
                        {isAuthenticated ?
                            <li className="nav-item">
                                <Link className="nav-link  " to="/chicken-death">
                                    <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <SvgChicken />
                                    </div>
                                    <span className="nav-link-text ms-1">Chicken Death</span>
                                </Link>
                            </li> : null}
                        {isAuthenticated ?
                            <li className="nav-item">
                                <a className="nav-link  " href="../pages/rtl.html">
                                    <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <SvgRTL />
                                    </div>
                                    <span className="nav-link-text ms-1">RTL</span>
                                </a>
                            </li> : null}
                        <li className="nav-item mt-3">
                            <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
                        </li>
                        {isAuthenticated ?
                            <li className="nav-item">
                                <Link className="nav-link  " to="/profile">
                                    <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <SvgProfile />
                                    </div>
                                    <span className="nav-link-text ms-1">Profile</span>
                                </Link>
                            </li> : null}
                        {!isAuthenticated ?
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                        {/* <SvgSignin /> */}
                                        <i className="fa fa-user text-dark"></i>
                                    </div>
                                    <span className="nav-link-text ms-1">Sign In</span>
                                </Link>
                            </li> : null}
                        {!isAuthenticated ?
                            <li className="nav-item">
                                <Link className="nav-link  " to="/register">
                                    <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                        {/* <SvgSignup /> */}
                                        <i class="fas fa-user-plus text-dark"></i>
                                    </div>
                                    <span className="nav-link-text ms-1">Sign Up</span>
                                </Link>
                            </li> : null}
                    </ul>
                </div>
                <div className="sidenav-footer mx-2 ">
                    {/* <div className="card card-background shadow-none card-background-mask-secondary" id="sidenavCard">
                        <div className="full-background" style={{ backgroundImage: `url(${img_1})` }}></div>
                        <div className="card-body text-start p-3 w-100">
                            <div className="icon icon-shape icon-sm bg-white shadow text-center mb-3 d-flex align-items-center justify-content-center border-radius-md">
                                <i className="ni ni-diamond text-dark text-gradient text-lg top-0" aria-hidden="true" id="sidenavCardIcon"></i>
                            </div>
                            <div className="docs-info">
                                <h6 className="text-white up mb-0">Need help?</h6>
                                <p className="text-xs font-weight-bold">Please check our docs</p>
                                <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard" target="_blank" className="btn btn-white btn-sm w-100 mb-0">Documentation</a>
                            </div>
                        </div>
                    </div> */}
                    {isAuthenticated ?
                        <button onClick={logOut} className={`btn bg-gradient-primary mt-0 w-100 ${classes.btnColor}`} href="#" type="button">Logout</button>
                        : null}

                </div>
            </aside>
        </>
    )
}

export default memo(SideBar)
