import React, { memo, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Button from "../re-usable-component/Button"
import cart_img from "../image/cart.png"
import InfoTableHeader from "../re-usable-component/InfoTableHeader"
import InfoTableRow from "../re-usable-component/InfoTableRow"
import OverView from '../re-usable-component/OverView'
import OverviewRow from "../re-usable-component/OverViewRow"
import ExpenseAddModal from "./OthersExpensesAddModal"
import OthersUpdateModal from "./OthersExpensesUpdateModal"
import { useSelector, useDispatch } from "react-redux"
import { apiBaseUrl } from "../Utils/constant"
import axios from 'axios'
import Swal from "sweetalert2"
import {
    OTHERS_COST,
    OTHERS_EXPENSE_UPDATE_ID,
    OTHERS_EXPENSE_UPDATE_ID_2,
    OTHERS_EXPENSE_UPDATE_NAME,
    OTHERS_EXPENSE_UPDATE_DESCRIPTION,
    OTHERS_EXPENSE_UPDATE_CATEGORY,
    OTHERS_EXPENSE_UPDATE_PRICE,
    OTHERS_EXPENSE_UPDATE_DATE
} from "../../redux/actions/types"



const OthersExpenseManagement = () => {
    // redux
    const dispatch = useDispatch()
    const { othersCost, isAuthenticated } = useSelector(state => state.loginReducer)
    const { _id, id2, name, description, category, price, date } = useSelector(state => state.othersExpenseReducer)

    // state
    const [searchOthersExp, setSearchOthersExp] = useState("")
    const [outputSearchOthersExp, setOutputSearchOthersExp] = useState([])

    // history
    const navigate = useNavigate()


    // set update input value
    const setUpdateInputValue = (others) => {
        dispatch({ type: OTHERS_EXPENSE_UPDATE_ID, payload: others._id })
        dispatch({ type: OTHERS_EXPENSE_UPDATE_ID_2, payload: others.id2 })
        dispatch({ type: OTHERS_EXPENSE_UPDATE_NAME, payload: others.name })
        dispatch({ type: OTHERS_EXPENSE_UPDATE_DESCRIPTION, payload: others.description })
        dispatch({ type: OTHERS_EXPENSE_UPDATE_CATEGORY, payload: others.category })
        dispatch({ type: OTHERS_EXPENSE_UPDATE_PRICE, payload: others.price })
        dispatch({ type: OTHERS_EXPENSE_UPDATE_DATE, payload: others.date })
    }


    // delete chicks
    const deleteProduct = (id) => {
        console.log(id);
        Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!' }).then((result) => {
            if (result.isConfirmed) {
                // delete function
                axios.put(`${apiBaseUrl}/others-cost-delete/${id}`)
                    .then(res => {
                        // add to redux & localStorage
                        dispatch({ type: OTHERS_COST, payload: res.data.othesrsExpense })
                        localStorage.setItem('othersCost', JSON.stringify(res.data.othesrsExpense))
                    }).catch(error => {
                        console.log(error.response);
                    })
            }
        })
    }


    // update expenses item
    const othersExpenseUpdate = (item_id) => {
        axios.put(`${apiBaseUrl}/others-cost-update/${item_id}`, {
            _id,
            id2,
            name,
            description,
            category,
            price: parseInt(price),
            date
        }).then(res => {
            // add to redux & localStorage
            dispatch({ type: OTHERS_COST, payload: res.data.othesrsExpense })
            localStorage.setItem('othersCost', JSON.stringify(res.data.othesrsExpense))
        }).catch(error => {
            console.log(error.response);
        })
    }



    // others Expenses
    const OthersExpArr = othersCost.map((item) => {
        return item.price
    })
    // transport cost
    const transportCost = othersCost.filter((item) => {
        return item.category == 'TRANSPORT'
    })
    const transportCostArr = transportCost.map((transport) => {
        return transport.price
    })
    const totalTransportCost = transportCostArr.reduce((pre, curr) => pre + curr, 0)

    // paper cost
    const paperCost = othersCost.filter((item) => {
        return item.category == 'PAPER'
    })
    const paperCostArr = paperCost.map((paper) => {
        return paper.price
    })
    const totalPaperCost = paperCostArr.reduce((pre, curr) => pre + curr, 0)


    const totalOthersExp = OthersExpArr.reduce((pre, curr) => pre + curr, 0)


    // search filter
    useEffect(() => {
        const _filterOthersCost = othersCost.filter(others_Cost => {
            if (searchOthersExp === '') {
                return others_Cost
            } else if (
                others_Cost.name.toLowerCase().includes(searchOthersExp.toLocaleLowerCase()) ||
                others_Cost.description.toLowerCase().includes(searchOthersExp.toLocaleLowerCase()) ||
                others_Cost.category.toLowerCase().includes(searchOthersExp.toLocaleLowerCase()) ||
                others_Cost.price.toString().includes(searchOthersExp) ||
                others_Cost.date.toLowerCase().includes(searchOthersExp.toLocaleLowerCase())
            ) {
                return others_Cost
            }
        })

        setOutputSearchOthersExp(_filterOthersCost)
    }, [searchOthersExp, othersCost])


    // redirect to login page
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
        }
    }, [isAuthenticated, navigate])

    return (
        <>
            <div className="container-fluid py-4">
                <div className="row">
                    {/* Others Expense details table */}
                    <div className="col-md-8 mt-3 mt-md-5">
                        <div>
                            <Button btnClass="btn bg-gradient-info" type="button" data-bs-toggle="modal" data-bs-target="#addOtherExp">
                                <i className="fas fa-plus me-2"></i>
                                Add Item
                            </Button>
                            <ExpenseAddModal />
                        </div>
                        {/* table header */}
                        <InfoTableHeader
                            header="Others Expenses Management"
                            col1="Name"
                            col2="Category"
                            col3="Price"
                            col4="Date"
                            onChange={(e) => setSearchOthersExp(e.target.value)}
                        >

                            {/* table row */}
                            {
                                outputSearchOthersExp.map((others) => {
                                    return (
                                        <>
                                            <InfoTableRow
                                                img={cart_img}
                                                col1={others.name}
                                                col1_2={others.description}
                                                col2={others.category}
                                                col3={others.price}
                                                col4={others.date}
                                                col2_color="bg-gradient-info"
                                                col3_color="bg-gradient-danger"
                                                col4_color="bg-gradient-info"
                                                modalId={others.id2}
                                                setUpdateInputValue={() => setUpdateInputValue(others)}
                                                deleteProduct={() => deleteProduct(others._id)}
                                            >

                                                {/* Expense update Modal */}
                                                <OthersUpdateModal
                                                    modalId={others.id2}
                                                    othersExpUpdateFunc={() => othersExpenseUpdate(others.id2)}
                                                />

                                            </InfoTableRow>
                                        </>
                                    )
                                })
                            }
                        </InfoTableHeader>
                    </div>

                    {/* overview summary */}
                    <div className="col-md-4 order-first order-md-last mb-4 mb-md-0">
                        <OverView overviewHeader="Others Expenses Summary">
                            {othersCost.length <= 0 ? null :
                                <>
                                    <OverviewRow
                                        title="Total Cost"
                                        titleColor="text-info text-gradient"
                                        iconClass="fas fa-dove text-danger text-gradient"
                                        quantity={`${totalOthersExp} tk`}
                                    />
                                    <OverviewRow
                                        title="Transport Cost"
                                        titleColor="text-info text-gradient"
                                        iconClass="ni ni-cart text-danger text-gradient"
                                        quantity={`${totalTransportCost} tk`}
                                    />

                                    <OverviewRow
                                        title="Paper Cost"
                                        titleColor="text-info text-gradient"
                                        iconClass="fas fa-stethoscope text-danger text-gradient"
                                        quantity={`${totalPaperCost} tk`}
                                    />
                                </>
                            }
                        </OverView>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(OthersExpenseManagement)
