import React, { memo, useState } from 'react'
import TextInputField from "../../re-usable-component/TextInputField"
import DatalistTextInput from "../../re-usable-component/DatalistTextInput"
import classes from "../../../styles/TextInput.module.css"
import Modal from '../../re-usable-component/Modal'
import axios from "axios"
import { apiBaseUrl } from "../../Utils/constant"
import { FINISH_FEED } from "../../../redux/actions/types"
import { useDispatch } from "react-redux"



const FeedFinishAddModal = () => {

    // redux
    const dispatch = useDispatch()

    // state
    const [finishFeed, setFinishFeed] = useState({
        name: "",
        category: "STARTER",
        bag: ""
    })


    // handle change
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFinishFeed({ ...finishFeed, [name]: value })
    }

    // submit functon
    const submitFeedFinishInfo = (e) => {
        e.preventDefault()
        const { name, category, bag } = finishFeed
        axios.put(`${apiBaseUrl}/feed-finish`, {
            name,
            category,
            bag: parseInt(bag),
        }).then(res => {
            // add to redux & localStorage
            dispatch({
                type: FINISH_FEED,
                payload: res.data.finishFeed
            })
            localStorage.setItem('finishFeed', JSON.stringify(res.data.finishFeed))

        }).catch(error => {
            console.log(error.response);
        })
    }

    return (
        <>
            <form onSubmit={submitFeedFinishInfo} roles="form text-left">
                <Modal
                    modalId="finishFeed"
                    modalHeader="Add Finish Feed Information"
                    btnText="Add Information"
                    btnColor="bg-gradient-info"
                >
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Company Name"
                        name="name"
                        onChange={handleChange}
                        value={finishFeed.name}
                    />

                    <DatalistTextInput onChange={handleChange} name="category" value={finishFeed.category} placeholder="Reason of Death" inpClass={classes.modalInput} >
                        <option value="STARTER" />
                        <option value="GROWER" />
                    </DatalistTextInput>

                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="Quantity"
                        name="bag"
                        onChange={handleChange}
                        value={finishFeed.bag}
                    />
                </Modal>
            </form>
        </>
    )
}

export default memo(FeedFinishAddModal)
