import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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
import OthersExpenseManagement from "./components/OthersExpense/OthersExpenseManagement"
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
      dispatch({ type: ALL_USER_DATA, payload: JSON.parse(localStorage.users) })
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
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/medicine" element={<MedicineManagement />} />
            <Route path="/feed-buy" element={<FeedBuyManagement />} />
            <Route path="/feed-finish" element={<FeedFinishManagement />} />
            <Route path="/chicken-buy" element={<ChicksBuyManagement />} />
            <Route path="/chicken-death" element={<ChicksDeathManagement />} />
            <Route path="/profile" element={<ProfileManagement />} />
            <Route path="/others-expense" element={<OthersExpenseManagement />} />
            {/* <Route path="/*" element={<ErrorPage />} /> it will have to be created */}
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
