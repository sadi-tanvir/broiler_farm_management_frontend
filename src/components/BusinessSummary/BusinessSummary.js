import React, { useEffect, useState } from 'react';
import ExpensesOverview from './components/ExpensesOverview';
import Button from '../re-usable-component/Button';
import InfoTableHeader from '../re-usable-component/InfoTableHeader';
import InfoTableRow from '../re-usable-component/InfoTableRow';
import Summary from './components/Summary';
import SalesSummaryAddModal from "./components/SalesSummaryAddModal"
import { useDispatch, useSelector } from 'react-redux';
import SalesSummaryUpdateModal from "./components/SalesSummaryUpdateModal"
import axios from 'axios';
import { apiBaseUrl } from '../Utils/constant';
import {
    SALES_SUMMARY,
    SALES_SUMMARY_UPDATE_ID,
    SALES_SUMMARY_UPDATE_ID_2,
    SALES_SUMMARY_UPDATE_CUSTOMER,
    SALES_SUMMARY_UPDATE_DESCRIPTION,
    SALES_SUMMARY_UPDATE_PCS,
    SALES_SUMMARY_UPDATE_KG,
    SALES_SUMMARY_UPDATE_PRICE,
    SALES_SUMMARY_UPDATE_DATE
} from "../../redux/actions/types"
import Swal from 'sweetalert2';



const BusinessSummary = () => {
    const [totalExpense, setTotalExpneses] = useState("")
    const [totalSalesKg, setTotalSalesKg] = useState("")
    const [totalSalesAmount, setTotalSalesAmount] = useState("")
    const [totalCountOfSales, setTotalCountOfSales] = useState("")

    // redux
    const dispatch = useDispatch()
    const { salesSummary } = useSelector(state => state.loginReducer)
    const { _id, id2, customer, description, pcs, kg, price, date } = useSelector(state => state.salesSummaryReducer)


    // set update input value
    const setUpdateInputValue = (sales) => {
        dispatch({ type: SALES_SUMMARY_UPDATE_ID, payload: sales._id })
        dispatch({ type: SALES_SUMMARY_UPDATE_ID_2, payload: sales.id2 })
        dispatch({ type: SALES_SUMMARY_UPDATE_CUSTOMER, payload: sales.customer })
        dispatch({ type: SALES_SUMMARY_UPDATE_DESCRIPTION, payload: sales.description })
        dispatch({ type: SALES_SUMMARY_UPDATE_PCS, payload: sales.pcs })
        dispatch({ type: SALES_SUMMARY_UPDATE_KG, payload: sales.kg })
        dispatch({ type: SALES_SUMMARY_UPDATE_PRICE, payload: sales.price })
        dispatch({ type: SALES_SUMMARY_UPDATE_DATE, payload: sales.date })
    }

    // sales item update
    const salesSummaryUpdate = (item_id) => {
        axios.put(`${apiBaseUrl}/chicks-sales-summary-update/${item_id}`, {
            _id,
            id2,
            customer,
            description,
            pcs: parseInt(pcs),
            kg: parseFloat(kg),
            price: parseFloat(price),
            date
        }).then(res => {
            // add to redux & localStorage
            dispatch({ type: SALES_SUMMARY, payload: res.data.salesSummary })
            localStorage.setItem('salesSummary', JSON.stringify(res.data.salesSummary))
        }).catch(error => {
            console.log(error.response);
        })
    }


    // feed item delete function
    const deleteItem = (id) => {
        Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!' }).then((result) => {
            if (result.isConfirmed) {
                // delete function
                axios.put(`${apiBaseUrl}/chicks-sales-summary-delete/${id}`)
                    .then(res => {
                        // add to redux & localStorage
                        dispatch({ type: SALES_SUMMARY, payload: res.data.salesSummary })
                        localStorage.setItem('salesSummary', JSON.stringify(res.data.salesSummary))
                    }).catch(error => {
                        console.log(error.response);
                    })
            }
        })
    }

    useEffect(() => {
        if (salesSummary.length > 0) {
            // total kg
            const totalKgArr = salesSummary?.map(sales => {
                return sales.kg
            })
            const totalKG = totalKgArr?.reduce((pre, curr) => pre + curr, 0)
            setTotalSalesKg(totalKG)

            // total amount of sales
            const totalSalesArr = salesSummary?.map(sales => {
                return sales.kg * sales.price
            })
            const totalSalesAmount = totalSalesArr?.reduce((pre, curr) => pre + curr, 0)
            setTotalSalesAmount(totalSalesAmount)

            // total count of sales
            const totalCountArr = salesSummary?.map(sales => {
                return sales.pcs
            })
            const totalCountOfSales = totalCountArr?.reduce((pre, curr) => pre + curr, 0)
            setTotalCountOfSales(totalCountOfSales)
        }
    }, [salesSummary])
    
    return (
        <>
            <div class="row">
                <div class="col-md-11 mx-auto">
                    <div class="row mt-5">
                        <div class="col-xl-6">
                            <div class="row flex-row flex-md-row-reverse">
                                <Summary
                                    title="Total sales"
                                    countOfSell = {`${totalCountOfSales} PCS`}
                                    summary={totalSalesKg > 0 ? `${totalSalesKg?.toFixed(2)} KG` : null}
                                    TotalFigure={totalSalesAmount}
                                    profit={totalSalesAmount - totalExpense}
                                />
                                <Summary
                                    title="Total investment"
                                    TotalFigure={totalExpense}
                                />
                            </div>
                            <div className="container-fluid py-4">
                                <div className="row my-4">
                                    {/* Expense overview */}
                                    <ExpensesOverview setTotalExpneses={setTotalExpneses} />


                                    {/* Sales Information */}
                                    <div className="col-md-8 mt-3 mt-md-5">
                                        <div>
                                            <Button btnClass="btn bg-gradient-info animate__animated animate__backInRight animate__slow" type="button" data-bs-toggle="modal" data-bs-target="#addSalesSummary">
                                                <i className="fas fa-plus me-2"></i>
                                                Add Item
                                            </Button>
                                            <SalesSummaryAddModal />
                                        </div>

                                        {/* table header */}
                                        <InfoTableHeader
                                            header="Sales Management"
                                            col1="Name"
                                            col2="pcs"
                                            col3="kg"
                                            col4="Price"
                                            col5="Date"
                                        // onChange={(e) => setSearchOthersExp(e.target.value)}
                                        >

                                            {/* table row */}
                                            {
                                                salesSummary?.map((sales) => {
                                                    const date = sales?.date.split(' ')[0]
                                                    const time = sales?.date.split(' ')[1]
                                                    const description = sales?.description.length > 30 ? sales?.description.slice(0, 30) : sales?.description;
                                                    return (
                                                        <>
                                                            <InfoTableRow
                                                                col1={sales?.customer}
                                                                col1_2={description}
                                                                col2={`${sales?.pcs} pcs`}
                                                                col3={`${sales?.kg} kg`}
                                                                col4={`${sales?.price} bdt`}
                                                                col5={`${date} - ${time}`}
                                                                col2_color="bg-gradient-info"
                                                                col3_color="bg-gradient-danger"
                                                                col4_color="bg-gradient-info"
                                                                col5_color="bg-gradient-danger"
                                                                modalId={sales.id2}
                                                                setUpdateInputValue={() => setUpdateInputValue(sales)}
                                                                deleteProduct={() => deleteItem(sales._id)}
                                                            >

                                                                {/* Expense update Modal */}
                                                                <SalesSummaryUpdateModal
                                                                    modalId={sales.id2}
                                                                    salesSummaryUpdateFunc={() => salesSummaryUpdate(sales._id)}
                                                                />

                                                            </InfoTableRow>
                                                        </>
                                                    )
                                                })
                                            }
                                        </InfoTableHeader>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusinessSummary;