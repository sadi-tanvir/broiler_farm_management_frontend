import React, { memo, useState } from 'react'
import TextInputField from "../../re-usable-component/TextInputField"
import DatalistTextInput from "../../re-usable-component/DatalistTextInput"
import classes from "../../../styles/TextInput.module.css"
import Modal from '../../re-usable-component/Modal'
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { apiBaseUrl } from "../../Utils/constant"
import {
    FEED_FINISH_UPDATE_ID,
    FEED_FINISH_UPDATE_ID_2,
    FEED_FINISH_UPDATE_NAME,
    FEED_FINISH_UPDATE_CATEGORY,
    FEED_FINISH_UPDATE_BAG,
    FEED_FINISH_UPDATE_DATE
} from "../../../redux/actions/types"




const FeedFinishUpdateModal = ({ FeedFinishUpdate, modalId }) => {

    // redux
    const dispatch = useDispatch()
    const {  _id, id2, name, category, bag, date } = useSelector(state => state.feedFinishReducer)



    return (
        <>
            <form onSubmit={(e) => FeedFinishUpdate(e.preventDefault())} roles="form text-left">
                <Modal
                    modalId={modalId}
                    modalHeader="Finish Feed Update Information"
                    btnText="Update Information"
                    btnColor="bg-gradient-info"
                >
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="id"
                        name="_id"
                        onChange={(e) => dispatch({ type: FEED_FINISH_UPDATE_ID, payload: e.target.value })}
                        value={_id}
                        disabled={true}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="id-2"
                        name="id2"
                        onChange={(e) => dispatch({ type: FEED_FINISH_UPDATE_ID_2, payload: e.target.value })}
                        value={id2}
                        disabled={true}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="name"
                        name="name"
                        value={name}
                        onChange={(e) => dispatch({ type: FEED_FINISH_UPDATE_NAME, payload: e.target.value })}
                    />
                    <DatalistTextInput onChange={(e) => dispatch({ type: FEED_FINISH_UPDATE_CATEGORY, payload: e.target.value })} name="catogory" value={category} placeholder="Category" inpClass={classes.modalInput} >
                        <option value="STARTER" />
                        <option value="GROWER" />
                    </DatalistTextInput>
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Quantity"
                        name="bag"
                        onChange={(e) => dispatch({ type: FEED_FINISH_UPDATE_BAG, payload: e.target.value })}
                        value={bag}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Date"
                        name="date"
                        value={date}
                        onChange={(e) => dispatch({ type: FEED_FINISH_UPDATE_DATE, payload: e.target.value })}
                    />
                </Modal>
            </form>
        </>
    )
}

export default memo(FeedFinishUpdateModal)
