import React, { memo, useState } from 'react'
import Modal from "../../../re-usable-component/Modal"
import TextInputField from "../../../re-usable-component/TextInputField"
import classes from "../../../../styles/TextInput.module.css"
import { apiBaseUrl } from "../../../Utils/constant"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { SALES_STATUS } from "../../../../redux/actions/types"


const SalesAddModal = () => {

    // redux
    const dispatch = useDispatch()
    const { sales_status } = useSelector(state => state.loginReducer)

    // state
    const [state, setState] = useState({
        sellDate: sales_status.sellDate,
    })

    // handle change
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value })
    }

    // submit form
    const submitChickenInfo = (e) => {
        e.preventDefault()

        const { sellDate } = state;
        console.log(sellDate);
        axios.put(`${apiBaseUrl}/chicks-sales-info`, {
            sellDate,
        }).then(res => {
            // add to redux & localStorage
            dispatch({ type: SALES_STATUS, payload: res.data.chicksSalesUpdate })
            localStorage.setItem('sellDate', JSON.stringify(res.data.chicksSalesUpdate))
            console.log(res.data.chicksSalesUpdate);
        }).catch(error => {
            console.log(error.response);
        })


    }

    return (
        <>
            <form onSubmit={submitChickenInfo} roles="form text-left">
                <Modal
                    modalId="salesDate"
                    modalHeader="Add Sales Information"
                    btnText="Add Information"
                    btnColor="bg-gradient-primary"
                >
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="MM/DD/YYYY HH:MM:SS"
                        name="sellDate"
                        onChange={handleChange}
                        value={state.sellDate}
                    />
                </Modal>
            </form>
        </>
    )
}

export default memo(SalesAddModal)
