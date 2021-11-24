import React, { memo } from 'react'
import OverView from "../../re-usable-component/OverView"
import OverviewRow from "../../re-usable-component/OverViewRow"
import { useSelector } from "react-redux"



const ExpensesOverview = () => {

    // redux
    const { buyChicken, buyFeed, buyMedicine } = useSelector(state => state.loginReducer)

    // total feed bag
    const feedBagCountArr = buyFeed.map(feed => {
        return feed.bag
    })
    const TotalFeedBag = feedBagCountArr.reduce((pre, curr) => pre + curr, 0)


    // total feed amount 
    const feedAmountArray = buyFeed.map(feed => {
        return feed.price * feed.bag
    })
    const TotalFeedAmount = feedAmountArray.reduce((pre, curr) => pre + curr, 0)


    // total medicine item
    const medicineItemArr = buyMedicine.map(medicine => {
        return medicine.quantity
    })
    const totalMedicineItem = medicineItemArr.reduce((pre, curr) => pre + curr, 0)

    // total medicine cost
    const medicinePriceArr = buyMedicine.map(medicine => {
        return medicine.quantity * medicine.price
    })
    const totalMedicinePrice = medicinePriceArr.reduce((pre, curr) => pre + curr, 0)


    // Total Expense Amount
    const chikenAmount = buyChicken.quantity * buyChicken.price
    const TotalExpenseAmount = chikenAmount + TotalFeedAmount + totalMedicinePrice

    return (
        <>
            <div className="container-fluid py-4">
                <div className="row my-4">
                    <div className="col-lg-4 col-md-6">
                        <OverView overviewHeader="Monthly Expense Overview" totalExpense={`Total = ${TotalExpenseAmount} BDT`}>
                            <OverviewRow
                                title="Chicks Cost"
                                titleColor="text-info"
                                iconClass="fas fa-dove text-danger text-gradient"
                                quantity={`${buyChicken.quantity} pcs`}
                                amount={`${buyChicken.quantity * buyChicken.price} BDT`}
                            />
                            <OverviewRow
                                title="Feed Cost"
                                titleColor="text-info"
                                iconClass="ni ni-cart text-danger text-gradient"
                                quantity={`${TotalFeedBag} bag`}
                                amount={`${TotalFeedAmount} BDT`}
                            />

                            <OverviewRow
                                title="Medicine Cost"
                                titleColor="text-info"
                                iconClass="fas fa-stethoscope text-danger text-gradient"
                                quantity={`${totalMedicineItem} ITEM`}
                                amount={`${totalMedicinePrice} BDT`}
                            />
                        </OverView>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(ExpensesOverview)
