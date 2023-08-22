import React, { memo, useState } from 'react'
import TextInputField from "../../re-usable-component/TextInputField"
import DatalistTextInput from "../../re-usable-component/DatalistTextInput"
import classes from "../../../styles/TextInput.module.css"
import Modal from '../../re-usable-component/Modal'
import axios from "axios"
import { apiBaseUrl } from "../../Utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { SALES_SUMMARY } from '../../../redux/actions/types'


const SalesSummaryAddModal = () => {

    // redux
    const dispatch = useDispatch()

    // state
    const [addSummary, setAddSummary] = useState({
        customer: "",
        description: "",
        pcs: "",
        kg: "",
        price: "",
    })

    // handle Change
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAddSummary({ ...addSummary, [name]: value })
    }

    // handle submit
    const addSummaryInfo = (e) => {
        try {
            e.preventDefault()
            const { customer, description, pcs, kg, price } = addSummary;
            axios.put(`${apiBaseUrl}/chicks-sales-summary`, {
                customer,
                description,
                pcs: parseInt(pcs),
                kg: parseFloat(kg),
                price: parseFloat(price)
            }).then(res => {
                // add to redux & localStorage
                dispatch({ type: SALES_SUMMARY, payload: res.data.salesSummary })
                localStorage.setItem('salesSummary', JSON.stringify(res.data.salesSummary))

                // input field empty
                setAddSummary({
                    customer: "",
                    description: "",
                    pcs: "",
                    kg: "",
                    price: ""
                })
            }).catch(error => {
                console.log(error.response);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={addSummaryInfo} roles="form text-left">
                <Modal
                    modalId="addSalesSummary"
                    modalHeader="Add Sales Summary"
                    btnText="Add Summary"
                    btnColor="bg-gradient-info"
                >
                    <DatalistTextInput onChange={handleChange} name="customer" placeholder="Customer's Name" inpClass={classes.modalInput} >
                        <option value="shohag hossain" />
                        <option value="masud hossain" />
                    </DatalistTextInput>
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Description"
                        name="description"
                        onChange={handleChange}
                        value={addSummary.description}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="pcs"
                        name="pcs"
                        onChange={handleChange}
                        value={addSummary.pcs}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="kg"
                        name="kg"
                        onChange={handleChange}
                        value={addSummary.kg}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="price"
                        name="price"
                        onChange={handleChange}
                        value={addSummary.price}
                    />
                </Modal>
            </form>
        </>
    )
}

export default memo(SalesSummaryAddModal)
