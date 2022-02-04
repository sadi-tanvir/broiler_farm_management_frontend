import React, { memo } from 'react'
import TextInputField from "../re-usable-component/TextInputField"
import DatalistTextInput from "../re-usable-component/DatalistTextInput"
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
    const { buyMedicine } = useSelector(state => state.loginReducer)

    // medicine name sorting
    const medicineNameArr = buyMedicine.map(medicine => {
        return medicine.name
    })
    const medicinesName = [...new Set(medicineNameArr)]

    // medicine group sorting
    const medicineGroupArr = buyMedicine.map(medicine => {
        return medicine.group
    })
    const medicinesGroup = [...new Set(medicineGroupArr)]

    // medicine Compay sorting
    const medicineCompanyArr = buyMedicine.map(medicine => {
        return medicine.company
    })
    const medicinesCompay = [...new Set(medicineCompanyArr)]

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

                    <DatalistTextInput name="name" value={name} onChange={(e) => dispatch({ type: MEDICINE_UPDATE_NAME, payload: e.target.value })} placeholder="Name" inpClass={classes.modalInput} >
                        {
                            medicinesName.map(name => <option value={name} />)
                        }
                    </DatalistTextInput>

                    <DatalistTextInput name="group" placeholder="Group" value={group} onChange={(e) => dispatch({ type: MEDICINE_UPDATE_GROUP, payload: e.target.value })} inpClass={classes.modalInput} >
                        {
                            medicinesGroup.map(group => <option value={group} />)
                        }
                    </DatalistTextInput>

                    <DatalistTextInput name="company" placeholder="Company" value={company} onChange={(e) => dispatch({ type: MEDICINE_UPDATE_COMPANY, payload: e.target.value })} inpClass={classes.modalInput} >
                        {
                            medicinesCompay.map(company => <option value={company} />)
                        }
                    </DatalistTextInput>

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
