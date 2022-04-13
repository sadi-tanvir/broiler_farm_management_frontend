import React, { memo } from 'react'
import TextInputField from "../re-usable-component/TextInputField"
import DatalistTextInput from "../re-usable-component/DatalistTextInput"
import classes from "../../styles/TextInput.module.css"
import Modal from "../re-usable-component/Modal"
import { useSelector, useDispatch } from "react-redux"
import {
    FEED_UPDATE_ID,
    FEED_UPDATE_ID_2,
    FEED_UPDATE_NAME,
    FEED_UPDATE_CATEGORY,
    FEED_UPDATE_BAG,
    FEED_UPDATE_PRICE,
    FEED_UPDATE_DATE
} from "../../redux/actions/types"





const FeedBuyUpdateModal = ({ feedUpdateFunc, modalId }) => {
    // redux
    const dispatch = useDispatch()
    const { _id, id2, name, category, bag, price, date } = useSelector(state => state.feedReducer)
    const { buyFeed } = useSelector(state => state.loginReducer)


    // feed category sorting
    const feedCategoryArr = buyFeed.map(feed => {
        return feed.category
    })
    const feedCategories = [...new Set(feedCategoryArr)]


    return (
        <>
            <form onSubmit={(e) => feedUpdateFunc(e.preventDefault())} roles="form text-left">
                <Modal
                    modalId={modalId}
                    modalHeader="Update Feed Information"
                    btnText="Update Information"
                    btnColor="bg-gradient-info"
                >
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="id"
                        name="id"
                        onChange={(e) => dispatch({ type: FEED_UPDATE_ID, payload: e.target.value })}
                        value={_id}
                        disabled={true}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="update id"
                        name="id2"
                        onChange={(e) => dispatch({ type: FEED_UPDATE_ID_2, payload: e.target.value })}
                        value={id2}
                        disabled={true}
                    />

                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Name"
                        name="name"
                        onChange={(e) => dispatch({ type: FEED_UPDATE_NAME, payload: e.target.value })}
                        value={name}
                    />

                    <DatalistTextInput onChange={(e) => dispatch({ type: FEED_UPDATE_CATEGORY, payload: e.target.value })} name="category" value={category} placeholder="Feed Categories" inpClass={classes.modalInput} >
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
                        onChange={(e) => dispatch({ type: FEED_UPDATE_BAG, payload: e.target.value })}
                        value={bag}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="Price"
                        name="price"
                        onChange={(e) => dispatch({ type: FEED_UPDATE_PRICE, payload: e.target.value })}
                        value={price}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="MM/DD/YYYY"
                        name="date"
                        onChange={(e) => dispatch({ type: FEED_UPDATE_DATE, payload: e.target.value })}
                        value={date}
                    />
                </Modal>
            </form>
        </>
    )
}

export default memo(FeedBuyUpdateModal)
