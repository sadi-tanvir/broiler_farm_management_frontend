import React, { useState,useEffect, memo } from 'react'
import { Link, useHistory } from "react-router-dom"
import TextInputField from "../re-usable-component/TextInputField"
import CheckBox from "../re-usable-component/CheckBox"
import Button from '../re-usable-component/Button'
import axios from "axios"
import { apiBaseUrl } from "../Utils/constant"
import { setLoginUser } from "../../redux/actions/loginActions"
import {
    SET_ADMIN,
    BUY_CHICKEN,
    DEATH_CHICKENS,
    BUY_FEED,
    FINISH_FEED,
    BUY_MEDICINE,
    OTHERS_COST,
} from "../../redux/actions/types"
import { useSelector, useDispatch } from "react-redux"
import Swal from "sweetalert2"
import setAuthToken from '../Utils/setAuthToken'


const img_signup = './assets/img/curved-images/curved6.jpg'


const Login = () => {
    // state
    const [check, setCheck] = useState(true)
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    // redux
    const dispatch = useDispatch()
    const {  isAuthenticated } = useSelector(state => state.loginReducer)

    // router
    const history = useHistory()

    console.log(`Signin Component is running...`);

    // handle change
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setUser({ ...user, [name]: value })
    }

    // handle login
    const handleLogin = (e) => {
        e.preventDefault()
        const { email, password } = user;
        axios.post(`${apiBaseUrl}/login`, {
            email,
            password
        }).then(res => {

            // set admin authentication
            if (res.data.user.role === 'admin') {
                dispatch({ type: SET_ADMIN })
            }

            // data store to redux
            dispatch(setLoginUser(res.data.user))
            dispatch({type:BUY_CHICKEN, payload: res.data.buyChicken})
            dispatch({type:DEATH_CHICKENS, payload: res.data.deathChickens})
            dispatch({type:BUY_FEED, payload: res.data.buyFeed})
            dispatch({type:FINISH_FEED, payload: res.data.finishFeed})
            dispatch({type:BUY_MEDICINE, payload: res.data.buyMedicine})
            dispatch({type:OTHERS_COST, payload: res.data.othersCost})

            // data store to localStorage
            localStorage.setItem('user', JSON.stringify(res.data.user))
            localStorage.setItem('buyChicken', JSON.stringify(res.data.buyChicken))
            localStorage.setItem('deathChickens', JSON.stringify(res.data.deathChickens))
            localStorage.setItem('buyFeed', JSON.stringify(res.data.buyFeed))
            localStorage.setItem('finishFeed', JSON.stringify(res.data.finishFeed))
            localStorage.setItem('buyMedicine', JSON.stringify(res.data.buyMedicine))
            localStorage.setItem('othersCost', JSON.stringify(res.data.othersCost))
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('role', res.data.role)

            // set atuthentication token
            setAuthToken(res.data.token)

            // success alert
            Swal.fire({
                title: res.data.message,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            }).then(res => {
                if (res) {
                    history.push('/')
                }
            })

        }).catch(error => {
            console.log(error.response);
            // success alert
            Swal.fire({
                title: error.response.data.message,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        })
    }

    // redirect to Home page
    useEffect(() => {
        if (isAuthenticated) {
            history.push('/')
        }
    }, [isAuthenticated, history])

    return (
        <>
            <main className="main-content  mt-0">
                <section>
                    <div className="page-header min-vh-75">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                                    <div className="card card-plain mt-8">
                                        <div className="card-header pb-0 text-left bg-transparent">
                                            <h3 className="font-weight-bolder text-info text-gradient">Welcome back</h3>
                                            <p className="mb-0">Enter your email and password to sign in</p>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={handleLogin} roles="form">
                                                <TextInputField
                                                    labelText="Email"
                                                    divClass="mb-3"
                                                    type="email"
                                                    placeholder="Email"
                                                    onChange={handleChange}
                                                    name="email"
                                                />
                                                <TextInputField
                                                    divClass="mb-3"
                                                    type="password"
                                                    placeholder="Password"
                                                    labelText="Password"
                                                    onChange={handleChange}
                                                    name="password"
                                                />
                                                <CheckBox
                                                    divClass="form-check form-switch"
                                                    onClick={() => check ? setCheck(false) : setCheck(true)}
                                                    id="rememberMe"
                                                    checked={check}
                                                    labelText="Remember me"
                                                />
                                                <Button divClass="text-center" type="submit" btnClass="btn bg-gradient-info w-100 mt-4 mb-0">Sign in</Button>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                            <p className="mb-4 text-sm mx-auto">
                                                Don't have an account?
                                                <Link to="/register" className="text-info text-gradient font-weight-bold"> Sign up</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                                        <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{ backgroundImage: `url(${img_signup})` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default memo(Login)
