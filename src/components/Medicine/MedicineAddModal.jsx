import React, { memo, useState } from 'react'
import TextInputField from "../re-usable-component/TextInputField"
import DatalistTextInput from "../re-usable-component/DatalistTextInput"
import classes from "../../styles/TextInput.module.css"
import Modal from '../re-usable-component/Modal'
import axios from "axios"
import { apiBaseUrl } from "../Utils/constant"
import { BUY_MEDICINE } from "../../redux/actions/types"
import { useDispatch, useSelector } from "react-redux"


const MedicineAddModal = () => {

    // state
    const [addMedicine, setAddMedicine] = useState({
        name: "",
        group: "",
        company: "",
        quantity: "",
        price: ""
    })

    // redux
    const dispatch = useDispatch()
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



    // handle change
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setAddMedicine({ ...addMedicine, [name]: value })
    }

    // handle add medicine submit
    const submitAddMedicine = (e) => {
        e.preventDefault()

        const { name, group, company, quantity, price } = addMedicine;
        axios.put(`${apiBaseUrl}/medicine-buy`, {
            name,
            group,
            company,
            quantity: parseInt(quantity),
            price: parseInt(price)
        }).then(res => {
            // add to redux & localStorage
            dispatch({ type: BUY_MEDICINE, payload: res.data.buyMedicine })
            localStorage.setItem('buyMedicine', JSON.stringify(res.data.buyMedicine))
        }).catch(error => {
            console.log(error.response);
        })
    }

    return (
        <>
            <form onSubmit={submitAddMedicine} roles="form text-left">
                <Modal
                    modalId="addMedicine"
                    modalHeader="Add Medicine Information"
                    btnText="Add Information"
                    btnColor="bg-gradient-info"
                >
                    <DatalistTextInput onChange={handleChange} name="name" placeholder="Name" inpClass={classes.modalInput} >
                        {
                            medicinesName.map(name => <option value={name} />)
                        }
                    </DatalistTextInput>

                    <DatalistTextInput onChange={handleChange} name="group" placeholder="Group" inpClass={classes.modalInput} >
                        {
                            medicinesGroup.map(group => <option value={group} />)
                        }
                    </DatalistTextInput>

                    <DatalistTextInput onChange={handleChange} name="company" placeholder="Company" inpClass={classes.modalInput} >
                        {
                            medicinesCompay.map(company => <option value={company} />)
                        }
                    </DatalistTextInput>

                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="Quantity"
                        name="quantity"
                        onChange={handleChange}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="Price"
                        name="price"
                        onChange={handleChange}
                    />
                </Modal>
            </form>
        </>
    )
}

export default memo(MedicineAddModal)
