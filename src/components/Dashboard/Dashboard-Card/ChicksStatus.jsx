import React, { memo } from 'react'
import { useSelector } from "react-redux"



const ChicksStatus = () => {

    // redux
    const { buyChicken, deathChickens } = useSelector(state => state.loginReducer)


    // total death of Chicks
    const totalDeathArr = deathChickens.map(chicks => {
        return chicks.death
    })
    const totalDeath = totalDeathArr.reduce((pre, curr) => pre + curr, 0)


    return (
        <>
            <h6 className="text-sm mb-0 text-uppercase font-weight-bolder">

                <span className={`badge badge-sm bg-gradient-info`}>{`Total chicks ${buyChicken.quantity}`}</span>
            </h6>
            <h6 className="text-sm mb-0 text-uppercase font-weight-bolder mt-2">

                <span className={`badge badge-sm bg-gradient-danger`}>{`Death chicks ${totalDeath}`}</span>
            </h6>
            <h6 className="text-sm mb-0 text-uppercase font-weight-bolder mt-2">
                <span className={`badge badge-sm bg-gradient-warning`}>{`Available chicks ${buyChicken.quantity - totalDeath}`}</span>
            </h6>
        </>
    )
}

export default memo(ChicksStatus)
