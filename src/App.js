import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Dashboard from './components/Dashboard/Dashboard'
import Register from "./components/register/Register"
import Login from "./components/login/Login"
import FeedBuyManagement from "./components/Feed/Buy/FeedBuyManagement"
import FeedFinishManagement from "./components/Feed/Finish/FeedFinishManagement"
import MedicineManagement from "./components/Medicine/MedicineManagement"
import ChicksBuyManagement from "./components/chicken/Buy/ChicksBuyManagement"
import ChicksDeathManagement from "./components/chicken/Death/ChicksDeathManagement"
import { useDispatch } from "react-redux"
import { setLoginUser } from "./redux/actions/loginActions"
import {
  SET_ADMIN,
  BUY_CHICKEN,
  DEATH_CHICKENS,
  BUY_FEED,
  FINISH_FEED,
  BUY_MEDICINE,
  OTHERS_COST,
  ALL_USER_DATA
} from "./redux/actions/types"
import setAuthToken from './components/Utils/setAuthToken'
import ProfileManagement from "./components/Profile/ProfileManagement"



const App = () => {
  // redux
  const dispatch = useDispatch()

  // get data from localStorage
  if (localStorage.user && localStorage.token) {
    if (localStorage.role === "admin") {
      dispatch({ type: SET_ADMIN })
      dispatch({ type: ALL_USER_DATA, payload: JSON.parse(localStorage.allUser) })
    }
    dispatch(setLoginUser(JSON.parse(localStorage.user)))
    dispatch({ type: BUY_CHICKEN, payload: JSON.parse(localStorage.buyChicken) })
    dispatch({ type: DEATH_CHICKENS, payload: JSON.parse(localStorage.deathChickens) })
    dispatch({ type: BUY_FEED, payload: JSON.parse(localStorage.buyFeed) })
    dispatch({ type: FINISH_FEED, payload: JSON.parse(localStorage.finishFeed) })
    dispatch({ type: BUY_MEDICINE, payload: JSON.parse(localStorage.buyMedicine) })
    dispatch({ type: OTHERS_COST, payload: JSON.parse(localStorage.othersCost) })

    // dispatch()
    setAuthToken(localStorage.token)
  }



  return (
    <>
      <Router>
        <Layout>
          <Route exact path="/" render={() => <Dashboard />} />
          <Route path="/register" render={() => <Register />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/medicine" render={() => <MedicineManagement />} />
          <Route path="/feed-buy" render={() => <FeedBuyManagement />} />
          <Route path="/feed-finish" render={() => <FeedFinishManagement />} />
          <Route path="/chicken-buy" render={() => <ChicksBuyManagement />} />
          <Route path="/chicken-death" render={() => <ChicksDeathManagement />} />
          <Route path="/profile" render={() => <ProfileManagement />} />
        </Layout>
      </Router>
    </>
  )
}

export default App
