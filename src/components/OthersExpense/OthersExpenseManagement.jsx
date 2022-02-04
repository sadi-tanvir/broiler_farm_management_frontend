import React from 'react'
// import Accordion from "../re-usable-component/see/Accordion"
import ExpenseCategory from "./ExpenseCategory"
import InfoTableHeader from "../re-usable-component/InfoTableHeader"
import InfoTableRow from "../re-usable-component/InfoTableRow"
import Button from "../re-usable-component/Button"
import OthersExpenseAddModal from "./OthersExpenseAddModal"
import { useSelector, useDispatch } from "react-redux"
import ExpenseOverview from "./ExpenseOverview"

const OthersExpenseManagement = () => {


    const { othersCost } = useSelector(state => state.loginReducer)
    console.log(othersCost);
    return (
        <>
            <div className="container-fluid py-4">
                <div>
                    <Button btnClass="btn bg-gradient-info" type="button" data-bs-toggle="modal" data-bs-target="#othersExpense">
                        <i className="fas fa-plus me-2"></i>
                        Add Item
                    </Button>
                    <OthersExpenseAddModal />
                </div>
                <div className="row">
                    <div className="col-md-4 d-block d-sm-none">
                        <ExpenseOverview />
                    </div>
                    <div className="col-md-8 my-4">
                        <div className="accordion" style={{ margin: 0, padding: 0 }} id="accordionPanelsStayOpenExample">
                            {othersCost.map((expense, index) => {
                                return (
                                    <>
                                        <ExpenseCategory
                                            headerClass="accordion-header text-center"
                                            headerOpenId={expense.category}
                                            ariaExpanded={true}
                                            headingText={`${expense.category} Expenses`}
                                            divCollapseId={`${expense.category}id`}
                                            divCollapseClass={index === 0 ? `accordion-collapse collapse show` : `accordion-collapse collapse`}
                                        >

                                            {/* table header */}
                                            <InfoTableHeader
                                                // header="Transport"
                                                col1="Name"
                                                col3="Tk"
                                                col4="Date"
                                                search={true}
                                            >

                                                {/* table row */}
                                                {/* {buyChicken.chicks < 1 ? null : */}
                                                {expense.rent.map(item => {
                                                    return (
                                                        <>
                                                            <InfoTableRow
                                                                // img={chicksImg}
                                                                col1={item.name}
                                                                col3={item.tk}
                                                                col4={item.date}
                                                                col3_color="bg-gradient-danger"
                                                                col4_color="bg-gradient-info"
                                                                modalId="chicksUpdate"
                                                            // setUpdateInputValue={setUpdateInputValue}
                                                            // deleteProduct={deleteProduct}
                                                            >

                                                                {/* Chicks Info update Modal */}
                                                                {/* <ChicksUpdateModal /> */}

                                                            </InfoTableRow>
                                                        </>
                                                    )
                                                })}

                                                {/* } */}
                                            </InfoTableHeader>
                                        </ExpenseCategory>
                                    </>
                                )
                            })}



                            {/* Electricity Bill Category */}
                            <ExpenseCategory
                                headerClass="accordion-header"
                                headerOpenId="electricHeadingOpen"
                                ariaExpanded={false}
                                headingText="Electricity Bill Expenses"
                                divCollapseId="electricDivCollapse"
                                divCollapseClass="accordion-collapse collapse"
                            >

                                <strong>Electricity</strong>

                            </ExpenseCategory>
                        </div>
                    </div>






                    <div className="col-md-4 d-none d-sm-block">
                        <ExpenseOverview />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OthersExpenseManagement
