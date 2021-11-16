import React, { memo, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import DashboardCard from "./Dashboard-Card/DashboardCard"
import UsersManagement from './UsersManagement/UsersManagement'
import ExpensesOverview from "./ExpensesOverview/ExpensesOverview"
import { useDispatch, useSelector } from "react-redux"
const Dashboard = () => {
    // redux
    const { isAuthenticated, isAdmin } = useSelector(state => state.loginReducer)

    // router
    const history = useHistory()

    // redirect to login page
    useEffect(() => {
        if (!isAuthenticated) {
            history.push('/login')
        }
    }, [isAuthenticated, history])

    return (
        <>
            <DashboardCard />
            <ExpensesOverview />
            {isAuthenticated && isAdmin ? <UsersManagement /> : null}
        </>
    )
}

export default memo(Dashboard)
