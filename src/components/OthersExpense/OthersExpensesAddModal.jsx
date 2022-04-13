import React, { memo, useState } from 'react'
import TextInputField from "../re-usable-component/TextInputField"
import classes from "../../styles/TextInput.module.css"
import Modal from '../re-usable-component/Modal'
import axios from "axios"
import { apiBaseUrl } from "../Utils/constant"
import { OTHERS_COST } from "../../redux/actions/types"
import { useDispatch } from "react-redux"



const OthersExpensesAddModal = () => {

    // redux
    const dispatch = useDispatch()

    // state
    const [others, setOthers] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
    })

    // handle change
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setOthers({ ...others, [name]: value })
    }

    // submit expense info
    const addOthersInfo = (e) => {
        e.preventDefault()
        const { name,description, category, price } = others;
        axios.put(`${apiBaseUrl}/others-cost`, {
            name,
            description,
            category,
            price: parseInt(price),
        }).then(res => {
            console.log(res.data);
            // add to redux & localStorage
            dispatch({ type: OTHERS_COST, payload: res.data.othesrsExpense })
            localStorage.setItem('othersCost', JSON.stringify(res.data.othesrsExpense))
        }).catch(error => {
            console.log(error.response);
        })

    }


    return (
        <>
            <form onSubmit={addOthersInfo} roles="form text-left">
                <Modal
                    modalId="addOtherExp"
                    modalHeader="Add Other Expense"
                    btnText="Add Information"
                    btnColor="bg-gradient-primary"
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
                        placeholder="Description"
                        name="description"
                        onChange={handleChange}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Category"
                        name="category"
                        onChange={handleChange}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="price"
                        name="price"
                        onChange={handleChange}
                    />
                </Modal>
            </form>
        </>
    )
}

export default memo(OthersExpensesAddModal)
