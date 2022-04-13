import React, { memo } from 'react'
import TextInputField from "../re-usable-component/TextInputField"
import classes from "../../styles/TextInput.module.css"
import Modal from '../re-usable-component/Modal'
import { useSelector, useDispatch } from "react-redux"
import {
    OTHERS_EXPENSE_UPDATE_ID,
    OTHERS_EXPENSE_UPDATE_ID_2,
    OTHERS_EXPENSE_UPDATE_NAME,
    OTHERS_EXPENSE_UPDATE_DESCRIPTION,
    OTHERS_EXPENSE_UPDATE_CATEGORY,
    OTHERS_EXPENSE_UPDATE_PRICE,
    OTHERS_EXPENSE_UPDATE_DATE
} from "../../redux/actions/types"




const OthersExpenseUpdateModal = ({ modalId, othersExpUpdateFunc }) => {

    // redux
    const dispatch = useDispatch()
    const { _id, id2, name, description, category, price, date } = useSelector(state => state.othersExpenseReducer)



    return (
        <>
            <form onSubmit={(e) => othersExpUpdateFunc(e.preventDefault())} roles="form text-left">
                <Modal
                    modalId={modalId}
                    modalHeader="Update Others Expenses"
                    btnText="Update Information"
                    btnColor="bg-gradient-info"
                >
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="id"
                        name="_id"
                        onChange={(e) => dispatch({ type: OTHERS_EXPENSE_UPDATE_ID, payload: e.target.value })}
                        value={_id}
                        disabled={true}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="id-2"
                        name="id2"
                        onChange={(e) => dispatch({ type: OTHERS_EXPENSE_UPDATE_ID_2, payload: e.target.value })}
                        value={id2}
                        disabled={true}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Name"
                        name="name"
                        onChange={(e) => dispatch({ type: OTHERS_EXPENSE_UPDATE_NAME, payload: e.target.value })}
                        value={name}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Description"
                        name="description"
                        onChange={(e) => dispatch({ type: OTHERS_EXPENSE_UPDATE_DESCRIPTION, payload: e.target.value })}
                        value={description}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Category"
                        name="category"
                        onChange={(e) => dispatch({ type: OTHERS_EXPENSE_UPDATE_CATEGORY, payload: e.target.value })}
                        value={category}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="Price"
                        name="price"
                        onChange={(e) => dispatch({ type: OTHERS_EXPENSE_UPDATE_PRICE, payload: e.target.value })}
                        value={price}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Date"
                        name="date"
                        onChange={(e) => dispatch({ type: OTHERS_EXPENSE_UPDATE_DATE, payload: e.target.value })}
                        value={date}
                    />
                </Modal>
            </form>
        </>
    )
}

export default memo(OthersExpenseUpdateModal)
