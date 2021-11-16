import React, { memo, useState, useEffect} from 'react'
import { useHistory } from "react-router-dom"
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
    const { buyChicken, isAuthenticated } = useSelector(state => state.loginReducer)

    // state
    const [state, setState] = useState({
        _id: buyChicken._id,
        id2: buyChicken.id2,
        company: buyChicken.company,
        quantity: buyChicken.quantity,
        price: buyChicken.price,
        time: buyChicken.time,
        date: buyChicken.date
    })


    // history
    const history = useHistory()


    // handle change
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setState({ ...state, [name]: value })
    }

    // chicks update
    const chicksUpdate = (e) => {
        e.preventDefault()
        const { _id, id2, company, quantity, price, time, date } = state
        console.log(_id, id2, company, quantity, price, time, date);
        axios.put(`${apiBaseUrl}/chicks-update`, {
            _id,
            id2,
            company,
            quantity: parseInt(quantity),
            price: parseInt(price),
            time,
            date
        }).then(res => {
            console.log(res);
            // add to redux & localStorage
            dispatch({ type: BUY_CHICKEN, payload: res.data.chicks })
            localStorage.setItem('buyChicken', JSON.stringify(res.data.chicks))
        }).catch(error => {
            console.log(error.response);
        })
    }


    // redirect to login page
    useEffect(() => {
        if (!isAuthenticated) {
            history.push('/login')
        }
    }, [isAuthenticated, history])

    return (
        <>
            <form onSubmit={chicksUpdate} roles="form text-left">
                <Modal
                    modalId="chicksUpdate"
                    modalHeader="Update Chicken Information"
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
                        placeholder="Time"
                        name="time"
                        onChange={handleChange}
                        value={state.time}
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
                </Modal>
            </form>
        </>
    )
}

export default memo(ChicksBuyUpdateModal)
