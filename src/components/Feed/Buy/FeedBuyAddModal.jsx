import React, { memo, useState } from 'react'
import TextInputField from "../../re-usable-component/TextInputField"
import classes from "../../../styles/TextInput.module.css"
import Modal from '../../re-usable-component/Modal'
import SelectOptionInput from "../../re-usable-component/SelectOptionInput"
import axios from "axios"
import { apiBaseUrl } from "../../Utils/constant"
import { BUY_FEED } from "../../../redux/actions/types"
import { useDispatch } from "react-redux"


const FeedBuyAddModal = () => {

    // redux
    const dispatch = useDispatch()

    const [addFeed, setAddFeed] = useState({
        name: "",
        category: "STARTER",
        bag: "",
        price: "",
    })

    // handle Change
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAddFeed({ ...addFeed, [name]: value })
    }

    // submit feed info 
    const addFeedInfo = (e) => {
        e.preventDefault()

        const { name, category, bag, price } = addFeed;

        axios.put(`${apiBaseUrl}/feed-bringing`, {
            name,
            category,
            bag: parseInt(bag),
            price: parseInt(price)
        }).then(res => {
            // add to redux & localStorage
            dispatch({ type: BUY_FEED, payload: res.data.buyFeed })
            localStorage.setItem('buyFeed', JSON.stringify(res.data.buyFeed))

            // input field empty
            setAddFeed({
                name: "",
                bag: "",
                price: "",
            })

        }).catch(error => {
            console.log(error.response);
        })
    }

    return (
        <>
            <form onSubmit={addFeedInfo} roles="form text-left">
                <Modal
                    modalId="addFeed"
                    modalHeader="Add Chicken Information"
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
                        value={addFeed.name}
                    />

                    <SelectOptionInput value={addFeed.category} name="category" onChange={handleChange} divClass="mb-3" inpClass={classes.modalInput}>
                        <option value="STARTER">STARTER</option>
                        <option value="GROWER">GROWER</option>
                    </SelectOptionInput>

                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="Quantity"
                        name="bag"
                        onChange={handleChange}
                        value={addFeed.bag}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="Price"
                        name="price"
                        onChange={handleChange}
                        value={addFeed.price}
                    />
                </Modal>
            </form>
        </>
    )
}

export default memo(FeedBuyAddModal)
