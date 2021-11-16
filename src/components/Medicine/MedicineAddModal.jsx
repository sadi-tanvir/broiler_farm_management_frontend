import React, { memo, useState } from 'react'
import TextInputField from "../re-usable-component/TextInputField"
import classes from "../../styles/TextInput.module.css"
import Modal from '../re-usable-component/Modal'
import axios from "axios"
import { apiBaseUrl } from "../Utils/constant"
import { BUY_MEDICINE } from "../../redux/actions/types"
import { useDispatch } from "react-redux"


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
                    modalHeader="Add Chicken Information"
                    btnText="Add Information"
                    btnColor="bg-gradient-info"
                >
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Name"
                        name="name"
                        onChange={handleChange}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Group"
                        name="group"
                        onChange={handleChange}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Company"
                        name="company"
                        onChange={handleChange}
                    />
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
