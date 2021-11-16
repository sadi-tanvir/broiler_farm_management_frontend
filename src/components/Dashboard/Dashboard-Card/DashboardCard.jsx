import React, { memo } from 'react'
import Card from "./Card"
import SalesStatus from "./SalesStatus"
import ChicksStatus from "./ChicksStatus"
import FeedStatus from "./FeedStatus"
import UserStatus from "./UserStatus"
import Age from "./AgeStatus"
import { useSelector } from "react-redux"





const DashboardCard = () => {

    const { isAuthenticated, isAdmin } = useSelector(state => state.loginReducer)


    return (
        <>
            <div className="container-fluid py-4">
                <div className="row">
                    <Card iconClass="fas fa-dove text-lg opacity-10">
                        <ChicksStatus />
                    </Card>
                    <Card iconClass="fas fa-balance-scale-right text-lg opacity-10">
                        <Age />
                        <SalesStatus />
                    </Card>
                    <Card iconClass="ni ni-cart text-lg opacity-10">
                        <FeedStatus />
                    </Card>

                    {isAuthenticated && isAdmin ?
                        <Card iconClass="ni ni-paper-diploma text-lg opacity-10">
                            <UserStatus />
                        </Card> : null}
                </div>
            </div>
        </>
    )
}

export default memo(DashboardCard)
