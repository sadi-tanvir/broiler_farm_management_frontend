import React, { useState, useMemo, memo } from 'react'
import { useSelector } from "react-redux"



const AgeStatus = () => {

    // redux
    const { buyChicken } = useSelector(state => state.loginReducer)

    // state
    const [age, setAge] = useState("")

    // age status
    useMemo(() => {
        // age of hens
        const boughtDate = new Date(`${buyChicken.date}`).getTime()
        const currentDate = new Date().getTime()
        const diffBetween = currentDate - boughtDate
        const totalAge = Math.floor(diffBetween / (24 * 60 * 60 * 1000)) + 1
        setAge(totalAge)

    }, [])

    return (
        <>
            <h6 className="text-sm mb-0 text-uppercase font-weight-bolder">
                <span className={`badge badge-sm bg-gradient-info`}>
                    {`Age ${age} ${age < 2 ? `day` : `days`}`}
                </span>
            </h6>
        </>
    )
}

export default memo(AgeStatus)
