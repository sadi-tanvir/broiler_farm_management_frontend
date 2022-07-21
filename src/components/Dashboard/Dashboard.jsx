import React, { memo, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import DashboardCard from "./Dashboard-Card/DashboardCard"
import UsersManagement from './UsersManagement/UsersManagement'
import { useSelector } from "react-redux"
import Overview from './Overview&Chart/Overview'
const Dashboard = () => {
    // redux
    const { isAuthenticated, isAdmin } = useSelector(state => state.loginReducer)

    // router
    const navigate = useNavigate()

    // redirect to login page
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
        }
    }, [isAuthenticated, navigate])

    return (
        <>
            <DashboardCard />
            <Overview />
            {isAuthenticated && isAdmin ? <UsersManagement /> : null}
        </>
    )
}

export default memo(Dashboard)
