import React, { memo, useState } from 'react'
import TextInputField from "../../re-usable-component/TextInputField"
import DatalistTextInput from "../../re-usable-component/DatalistTextInput"
import classes from "../../../styles/TextInput.module.css"
import Modal from '../../re-usable-component/Modal'
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { apiBaseUrl } from "../../Utils/constant"
import {
    DEATH_CHICKENS,
    CHICKS_DEATH_UPDATE_ID,
    CHICKS_DEATH_UPDATE_ID_2,
    CHICKS_DEATH_UPDATE_REASON,
    CHICKS_DEATH_UPDATE_DATE,
    CHICKS_DEATH_UPDATE_TIME,
    CHICKS_DEATH_UPDATE_DEATH,
} from "../../../redux/actions/types"




const ChicksDeathUpdateModal = ({ ChicksDeathUpdate, modalId }) => {

    // redux
    const dispatch = useDispatch()
    const { _id, id2, reason, date, time, death } = useSelector(state => state.chicksDeathReducer)
    const { deathChickens } = useSelector(state => state.loginReducer)


    // sorting death resons
    const deathReasonsArr = deathChickens.map(death => {
        return death.reason
    })
    const deathResons = [...new Set(deathReasonsArr)]


    return (
        <>
            <form onSubmit={(e) => ChicksDeathUpdate(e.preventDefault())} roles="form text-left">
                <Modal
                    modalId={modalId}
                    modalHeader="Update Death Chicks Information"
                    btnText="Update Information"
                    btnColor="bg-gradient-info"
                >
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="id"
                        name="_id"
                        onChange={(e) => dispatch({ type: CHICKS_DEATH_UPDATE_ID, payload: e.target.value })}
                        value={_id}
                        disabled={true}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="id-2"
                        name="id2"
                        onChange={(e) => dispatch({ type: CHICKS_DEATH_UPDATE_ID_2, payload: e.target.value })}
                        value={id2}
                        disabled={true}
                    />
                    <DatalistTextInput onChange={(e) => dispatch({ type: CHICKS_DEATH_UPDATE_REASON, payload: e.target.value })} name="reason" value={reason} placeholder="Reason of Death" inpClass={classes.modalInput} >
                        {
                            deathResons.map(reason => <option value={reason} />)
                        }
                    </DatalistTextInput>
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Date"
                        name="date"
                        onChange={(e) => dispatch({ type: CHICKS_DEATH_UPDATE_DATE, payload: e.target.value })}
                        value={date}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Time"
                        name="time"
                        value={time}
                        onChange={(e) => dispatch({ type: CHICKS_DEATH_UPDATE_TIME, payload: e.target.value })}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="Death"
                        name="death"
                        onChange={(e) => dispatch({ type: CHICKS_DEATH_UPDATE_DEATH, payload: e.target.value })}
                        value={death}
                    />
                </Modal>
            </form>
        </>
    )
}

export default memo(ChicksDeathUpdateModal)
