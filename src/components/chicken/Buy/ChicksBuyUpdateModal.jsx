import React, { memo, useState} from 'react'
import TextInputField from "../../re-usable-component/TextInputField"
import classes from "../../../styles/TextInput.module.css"
import Modal from '../../re-usable-component/Modal'
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { apiBaseUrl } from "../../Utils/constant"
import {
    BUY_CHICKEN
} from "../../../redux/actions/types"




const ChicksBuyUpdateModal = () => {

    // redux
    const dispatch = useDispatch()
    const { buyChicken } = useSelector(state => state.loginReducer)

    // state
    const [state, setState] = useState({
        _id: buyChicken._id,
        id2: buyChicken.id2,
        company: buyChicken.company,
        quantity: buyChicken.quantity,
        price: buyChicken.price,
        date: buyChicken.date,
        salesDate: buyChicken.salesDate,
    })


    // handle change
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setState({ ...state, [name]: value })
    }

    // chicks update
    const chicksUpdate = (e) => {
        e.preventDefault()
        const { _id, id2, company, quantity, price, date,salesDate } = state
        console.log(_id, id2, company, quantity, price, date,salesDate);
        axios.put(`${apiBaseUrl}/chicks-update`, {
            _id,
            id2,
            company,
            quantity: parseInt(quantity),
            price: parseInt(price),
            date,
            salesDate
        }).then(res => {
            console.log(res);
            // add to redux & localStorage
            dispatch({ type: BUY_CHICKEN, payload: res.data.chicks })
            localStorage.setItem('buyChicken', JSON.stringify(res.data.chicks))
        }).catch(error => {
            console.log(error.response);
        })
    }


    return (
        <>
            <form onSubmit={chicksUpdate} roles="form text-left">
                <Modal
                    modalId="chicksUpdate"
                    modalHeader="Update Chicks Information"
                    btnText="Update Information"
                    btnColor="bg-gradient-info"
                >
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="id"
                        name="_id"
                        onChange={handleChange}
                        value={state._id}
                        disabled={true}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="id-2"
                        name="id2"
                        onChange={handleChange}
                        value={state.id2}
                        disabled={true}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Company Name"
                        name="company"
                        onChange={handleChange}
                        value={state.company}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="Quantity"
                        onChange={handleChange}
                        name="quantity"
                        value={state.quantity}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="Price"
                        name="price"
                        onChange={handleChange}
                        value={state.price}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Date"
                        name="date"
                        onChange={handleChange}
                        value={state.date}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="MM/DD/YYYY HH:MM:SS"
                        name="salesDate"
                        onChange={handleChange}
                        value={state.salesDate}
                    />
                </Modal>
            </form>
        </>
    )
}

export default memo(ChicksBuyUpdateModal)
