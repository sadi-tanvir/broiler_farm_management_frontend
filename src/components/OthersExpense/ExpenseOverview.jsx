import React from 'react'
import OverView from "../re-usable-component/OverView"
import OverviewRow from "../re-usable-component/OverViewRow"


const ExpenseOverview = () => {
    return (
        <>
            <OverView overviewHeader="Others Expenses Summary">
                <>
                    <OverviewRow
                        title="Total Cost"
                        titleColor="text-info text-gradient"
                        iconClass="fas fa-dove text-danger text-gradient"
                        quantity={`20000 BDT`}
                    />
                    <OverviewRow
                        title="Transport"
                        titleColor="text-info text-gradient"
                        iconClass="ni ni-cart text-danger text-gradient"
                        quantity={`1000 BDT`}
                    />

                    <OverviewRow
                        title="Electricity"
                        titleColor="text-info text-gradient"
                        iconClass="fas fa-stethoscope text-danger text-gradient"
                        quantity={`1500 BDT`}
                    />
                </>
            </OverView>
        </>
    )
}

export default ExpenseOverview
