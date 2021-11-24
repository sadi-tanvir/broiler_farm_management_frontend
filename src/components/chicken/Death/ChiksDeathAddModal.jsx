import React, { memo, useState } from 'react'
import TextInputField from "../../re-usable-component/TextInputField"
import DatalistTextInput from "../../re-usable-component/DatalistTextInput"
import classes from "../../../styles/TextInput.module.css"
import Modal from '../../re-usable-component/Modal'
import axios from "axios"
import { apiBaseUrl } from "../../Utils/constant"
import { DEATH_CHICKENS } from "../../../redux/actions/types"
import { useDispatch, useSelector } from "react-redux"



const ChiksDeathAddModal = () => {

    // redux
    const dispatch = useDispatch()
    const { deathChickens } = useSelector(state => state.loginReducer)

    // sorting death resons
    const deathReasonsArr = deathChickens.map(death => {
        return death.reason
    })
    const deathResons = [...new Set(deathReasonsArr)]

    // state
    const [chicken, setChicken] = useState({
        death: "",
        reason: ""
    })


    // handle change
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setChicken({ ...chicken, [name]: value })
    }

    // submit functon
    const submitChicksDeathInfo = (e) => {
        e.preventDefault()
        const { death, reason } = chicken
        axios.put(`${apiBaseUrl}/chicks-death`, {
            death: parseInt(death),
            reason
        }).then(res => {
            // add to redux & localStorage
            dispatch({ type: DEATH_CHICKENS, payload: res.data.deathChicks })
            localStorage.setItem('deathChickens', JSON.stringify(res.data.deathChicks))

        }).catch(error => {
            console.log(error.response);
        })
    }

    return (
        <>
            <form onSubmit={submitChicksDeathInfo} roles="form text-left">
                <Modal
                    modalId="addChicks"
                    modalHeader="Add Chicken Information"
                    btnText="Add Information"
                    btnColor="bg-gradient-primary"
                >
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="Death"
                        name="death"
                        onChange={handleChange}
                        value={chicken.death}
                    />
                    <DatalistTextInput onChange={handleChange} name="reason" value={chicken.reason} placeholder="Reason of Death" inpClass={classes.modalInput} >
                        {
                            deathResons.map(reason => <option value={reason} />)
                        }
                    </DatalistTextInput>
                </Modal>
            </form>
        </>
    )
}

export default memo(ChiksDeathAddModal)
