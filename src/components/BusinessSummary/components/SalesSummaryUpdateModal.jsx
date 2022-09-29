import React, { memo } from 'react'
import TextInputField from "../../re-usable-component/TextInputField"
import DatalistTextInput from "../../re-usable-component/DatalistTextInput"
import classes from "../../../styles/TextInput.module.css"
import Modal from "../../re-usable-component/Modal"
import { useSelector, useDispatch } from "react-redux"
import {
    SALES_SUMMARY_UPDATE_ID,
    SALES_SUMMARY_UPDATE_ID_2,
    SALES_SUMMARY_UPDATE_CUSTOMER,
    SALES_SUMMARY_UPDATE_DESCRIPTION,
    SALES_SUMMARY_UPDATE_PCS,
    SALES_SUMMARY_UPDATE_KG,
    SALES_SUMMARY_UPDATE_PRICE,
    SALES_SUMMARY_UPDATE_DATE
} from "../../../redux/actions/types"





const SalesSummaryUpdateModal = ({ salesSummaryUpdateFunc, modalId }) => {
    // redux
    const dispatch = useDispatch()
    // const { _id, id2, name, category, bag, price, date } = useSelector(state => state.feedReducer)
    const {  customer, description, pcs, kg, price, date } = useSelector(state => state.salesSummaryReducer)
    const { salesSummary } = useSelector(state => state.loginReducer)



    return (
        <>
            <form onSubmit={(e) => salesSummaryUpdateFunc(e.preventDefault())} roles="form text-left">
                <Modal
                    modalId={modalId}
                    modalHeader="Update Sales Summary"
                    btnText="Update Information"
                    btnColor="bg-gradient-info"
                >
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="customer"
                        name="customer"
                        onChange={(e) => dispatch({ type: SALES_SUMMARY_UPDATE_CUSTOMER, payload: e.target.value })}
                        value={customer}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Description"
                        name="description"
                        onChange={(e) => dispatch({ type: SALES_SUMMARY_UPDATE_DESCRIPTION, payload: e.target.value })}
                        value={description}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="pcs"
                        name="pcs"
                        onChange={(e) => dispatch({ type: SALES_SUMMARY_UPDATE_PCS, payload: e.target.value })}
                        value={pcs}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="kg"
                        name="kg"
                        onChange={(e) => dispatch({ type: SALES_SUMMARY_UPDATE_KG, payload: e.target.value })}
                        value={kg}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="price"
                        name="price"
                        onChange={(e) => dispatch({ type: SALES_SUMMARY_UPDATE_PRICE, payload: e.target.value })}
                        value={price}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="date"
                        name="date"
                        onChange={(e) => dispatch({ type: SALES_SUMMARY_UPDATE_DATE, payload: e.target.value })}
                        value={date}
                    />
                </Modal>
            </form>
        </>
    )
}

export default memo(SalesSummaryUpdateModal)
