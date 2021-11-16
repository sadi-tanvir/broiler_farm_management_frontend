import React, { memo } from 'react'
import TextInputField from "../re-usable-component/TextInputField"
import classes from "../../styles/TextInput.module.css"
import Modal from "../re-usable-component/Modal"
import { useSelector, useDispatch } from "react-redux"
import {
    BUY_MEDICINE,
    MEDICINE_UPDATE_ID,
    MEDICINE_UPDATE_ID_2,
    MEDICINE_UPDATE_NAME,
    MEDICINE_UPDATE_QUANTITY,
    MEDICINE_UPDATE_COMPANY,
    MEDICINE_UPDATE_GROUP,
    MEDICINE_UPDATE_PRICE,
    MEDICINE_UPDATE_DATE,
} from "../../redux/actions/types"




const MedicineUpdateModal = ({ modalId, medicineUpdateFunc }) => {

    // redux
    const dispatch = useDispatch()
    const { _id, id2, name, quantity, company, group, price, date } = useSelector(state => state.medicineReducer)

    return (
        <>
            <form onSubmit={(e) => medicineUpdateFunc(e.preventDefault())} roles="form text-left">
                <Modal
                    modalId={modalId}
                    modalHeader="Update Medicine Information"
                    btnText="Update Information"
                    btnColor="bg-gradient-info"
                >
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="id"
                        value={_id}
                        onChange={(e) => dispatch({ type: MEDICINE_UPDATE_ID, payload: e.target.value })}
                        disabled={true}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="id2"
                        value={id2}
                        onChange={(e) => dispatch({ type: MEDICINE_UPDATE_ID_2, payload: e.target.value })}
                        disabled={true}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Name"
                        value={name}
                        onChange={(e) => dispatch({ type: MEDICINE_UPDATE_NAME, payload: e.target.value })}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Group"
                        value={group}
                        onChange={(e) => dispatch({ type: MEDICINE_UPDATE_GROUP, payload: e.target.value })}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Company"
                        value={company}
                        onChange={(e) => dispatch({ type: MEDICINE_UPDATE_COMPANY, payload: e.target.value })}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="Quantity"
                        value={quantity}
                        onChange={(e) => dispatch({ type: MEDICINE_UPDATE_QUANTITY, payload: e.target.value })}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="Price"
                        value={price}
                        onChange={(e) => dispatch({ type: MEDICINE_UPDATE_PRICE, payload: e.target.value })}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="MM/DD/YYYY"
                        value={date}
                        onChange={(e) => dispatch({ type: MEDICINE_UPDATE_DATE, payload: e.target.value })}
                    />
                </Modal>
            </form>
        </>
    )
}

export default memo(MedicineUpdateModal)
