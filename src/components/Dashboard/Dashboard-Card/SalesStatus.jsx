import React, { useState, useMemo, memo } from 'react'

const SalesStatus = () => {
    // state
    const [saleTime, setTime] = useState({
        days: "",
        hours: "",
        minutes: "",
        seconds: ""
    })



    // sales countdown
    useMemo(() => {
        return (
            setInterval(() => {
                const dest = new Date("12/12/2021 7:00:00").getTime()
                const now = new Date().getTime()
                const diff = dest - now

                const isDay = Math.floor(diff / (24 * 60 * 60 * 1000))
                const isHours = Math.floor(diff % (24 * 60 * 60 * 1000) / (60 * 60 * 1000))
                const isMinutes = Math.floor(diff % (60 * 60 * 1000) / (60 * 1000))
                const isSecond = Math.floor(diff % (60 * 1000) / 1000)
                // const isMiliSec = diff % 1000

                setTime((preVal) => ({ ...preVal, days: isDay, hours: isHours, minutes: isMinutes, seconds: isSecond }))
            }, 1000)
        )
    }, [])


    return (
        <>
            <h6 className="font-weight-bolder mb-0 mt-3 mt-sm-2 text-uppercase">
                Date of sale   <i className="fas fa-running mt-1 text-info text-gradient" s></i>
                <span className="text-danger text-sm font-weight-bolder"></span>
            </h6>
            <div className="d-flex">
                <h6 className="font-weight-bolder mb-0 text-primary" style={{ marginRight: 3 }}>
                    {saleTime.days < 10 ? `0${saleTime.days}` : saleTime.days}
                    <span className="text-info text-gradient font-weight-bolder" style={{ fontSize: 12 }}>d</span>
                </h6>
                <h6 className="font-weight-bolder mb-0 text-primary" style={{ marginRight: 3 }}>
                    {saleTime.hours < 10 ? `0${saleTime.hours}` : saleTime.hours}
                    <span className="text-info text-gradient font-weight-bolder" style={{ fontSize: 12 }}>h</span>
                </h6>
                <h6 className="font-weight-bolder mb-0 text-primary" style={{ marginRight: 3 }}>
                    {saleTime.minutes < 10 ? `0${saleTime.minutes}` : saleTime.minutes}
                    <span className="text-info text-gradient font-weight-bolder" style={{ fontSize: 12 }}>m</span>
                </h6>
                <h6 className="font-weight-bolder mb-0 text-primary">
                    {saleTime.seconds < 10 ? `0${saleTime.seconds}` : saleTime.seconds}
                    <span className="text-info text-gradient font-weight-bolder" style={{ fontSize: 12 }}>s</span>
                </h6>
            </div>
        </>
    )
}

export default memo(SalesStatus)
