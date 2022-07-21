import React, { memo } from 'react'
import ExpensesOverview from './ExpensesOverview'
import ChartAnalysis from './ChartAnalysis'



const Overview = () => {



    return (
        <>
            <div className="container-fluid py-4">
                <div className="row my-4">
                    <ExpensesOverview />
                    <ChartAnalysis />
                </div>
            </div>
        </>
    )
}

export default memo(Overview)
