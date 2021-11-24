import React, { memo, useState } from 'react'
import TextInputField from "../../re-usable-component/TextInputField"
import classes from "../../../styles/TextInput.module.css"
import Modal from '../../re-usable-component/Modal'
import axios from "axios"
import { apiBaseUrl } from "../../Utils/constant"
import { BUY_CHICKEN } from "../../../redux/actions/types"
import { useDispatch } from "react-redux"



const ChiksBuyAddModal = () => {

    // redux
    const dispatch = useDispatch()

    // state
    const [chicken, setChicken] = useState({
        company: "",
        quantity: "",
        price: ""
    })


    // handle change
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setChicken({ ...chicken, [name]: value })
    }

    // submit functon
    const submitChickenInfo = (e) => {
        e.preventDefault()
        const { company, quantity, price } = chicken
        axios.put(`${apiBaseUrl}/chicks-buy`, {
            company,
            quantity: parseInt(quantity),
            price: parseInt(price)
        }).then(res => {
            // add to redux & localStorage
            dispatch({ type: BUY_CHICKEN, payload: res.data.chicks })
            localStorage.setItem('buyChicken', JSON.stringify(res.data.chicks))

        }).catch(error => {
            console.log(error.response);
        })
    }

    return (
        <>
            <form onSubmit={submitChickenInfo} roles="form text-left">
                <Modal
                    modalId="addChicks"
                    modalHeader="Add Chicken Information"
                    btnText="Add Information"
                    btnColor="bg-gradient-primary"
                >
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Company Name"
                        name="company"
                        onChange={handleChange}
                        value={chicken.company}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="Quantity"
                        name="quantity"
                        onChange={handleChange}
                        value={chicken.quantity}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="Price"
                        name="price"
                        onChange={handleChange}
                        value={chicken.price}
                    />
                </Modal>
            </form>
        </>
    )
}

export default memo(ChiksBuyAddModal)
