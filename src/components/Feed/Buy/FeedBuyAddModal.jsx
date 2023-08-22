import React, { memo, useState } from 'react'
import TextInputField from "../../re-usable-component/TextInputField"
import DatalistTextInput from "../../re-usable-component/DatalistTextInput"
import classes from "../../../styles/TextInput.module.css"
import Modal from '../../re-usable-component/Modal'
import axios from "axios"
import { apiBaseUrl } from "../../Utils/constant"
import { BUY_FEED } from "../../../redux/actions/types"
import { useDispatch, useSelector } from "react-redux"


const FeedBuyAddModal = () => {

    // redux
    const dispatch = useDispatch()
    const { buyFeed } = useSelector(state => state.loginReducer)

    // state
    const [addFeed, setAddFeed] = useState({
        name: "",
        description:"",
        category: "STARTER",
        bag: "",
        price: "",
    })

    // feed Name sorting
    const feedNameArr = buyFeed.map(feed => {
        return feed.name
    })
    const feedName = [...new Set(feedNameArr)]

    // feed category sorting
    const feedCategoryArr = buyFeed.map(feed => {
        return feed.category
    })
    const feedCategories = [...new Set(feedCategoryArr)]
    console.log(feedCategories);


    // handle Change
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAddFeed({ ...addFeed, [name]: value })
    }

    // submit feed info 
    const addFeedInfo = (e) => {
        e.preventDefault()

        const { name,description, category, bag, price } = addFeed;

        axios.put(`${apiBaseUrl}/feed-bringing`, {
            name,
            description,
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
                description:"",
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
                    modalHeader="Add Feed Information"
                    btnText="Add Information"
                    btnColor="bg-gradient-info"
                >
                    <DatalistTextInput onChange={handleChange} name="name" value={addFeed.name} placeholder="Company Name" inpClass={classes.modalInput} >
                        {
                            feedName.map(name => <option value={name} />)
                        }
                    </DatalistTextInput>

                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="description"
                        name="description"
                        onChange={handleChange}
                        value={addFeed.description}
                    />

                    <DatalistTextInput onChange={handleChange} name="category" placeholder="Feed Categories" inpClass={classes.modalInput} >
                        {
                            feedCategories.map(category => <option value={category} />)
                        }
                    </DatalistTextInput>

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
