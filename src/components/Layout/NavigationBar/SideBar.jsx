import React, { memo } from 'react'
import { Link, useNavigate } from "react-router-dom"
import classes from "../../../styles/Color.module.css"
import classes2 from "../../../styles/Nav.module.css"
import { SIDEBAR_OPEN, SIDEBAR_COLLAPSE, LOGOUT_USER } from "../../../redux/actions/types"
import { useDispatch, useSelector } from "react-redux"
import setAuthToken from "../../Utils/setAuthToken"
import { SvgDashboard, SvgFeed, SvgMedicine, SvgChicken, SvgRTL, SvgProfile, SvgSignin, SvgSignup } from "./SvgLink"




const SideBar = () => {
    // redux
    const dispatch = useDispatch()
    const { sidebar } = useSelector(state => state.othersReducer)
    const { isAuthenticated, isAdmin } = useSelector(state => state.loginReducer)
    // const { } = useSelector(state => state.adminReducer)

    // router
    const navigate = useNavigate()

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

        navigate('/login')

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
                        <h6 className="font-weight-bolder mb-0 d-flex flex-row justify-content-center mt-1">
                            {/* <i class="fab fa-asymmetrik"></i> */}
                            <i class={`fab fa-asymmetrik text-danger me-2 ${classes2.sideLogoIncon} animate__animated animate__flip animate__slower animate__infinite`}></i>
                            <span className={`text-info text-uppercase ${classes2.sideLogoText}`}>Tanvir Hossain Sadi</span>
                        </h6>
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
                                    <span className="nav-link-text ms-1">Buy Chicks</span>
                                </Link>
                            </li> : null}
                        {isAuthenticated ?
                            <li className="nav-item">
                                <Link className="nav-link  " to="/chicken-death">
                                    <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <SvgChicken />
                                    </div>
                                    <span className="nav-link-text ms-1">Death Chicks</span>
                                </Link>
                            </li> : null}
                        {isAuthenticated ?
                            <li className="nav-item">
                                <Link className="nav-link  " to="/others-expense">
                                    <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <SvgRTL />
                                    </div>
                                    <span className="nav-link-text ms-1">Others Expenses</span>
                                </Link>
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
                                        <i className="fas fa-user-plus text-dark"></i>
                                    </div>
                                    <span className="nav-link-text ms-1">Sign Up</span>
                                </Link>
                            </li> : null}
                    </ul>
                </div>
                <div className="sidenav-footer mx-2 ">
                    
                    {isAuthenticated ?
                        <button onClick={logOut} className={`btn bg-gradient-primary mt-0 w-100 ${classes.btnColor}`} href="#" type="button">Logout</button>
                        : null}

                </div>
            </aside>
        </>
    )
}

export default memo(SideBar)
