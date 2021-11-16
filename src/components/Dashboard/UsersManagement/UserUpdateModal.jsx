import React, { useState, memo } from 'react'
import TextInputField from "../../re-usable-component/TextInputField"
import CheckBox from '../../re-usable-component/CheckBox'
import classes from "../../../styles/TextInput.module.css"
import Modal from "../../re-usable-component/Modal"

const UserUpdateModal = ({ modalId }) => {

    const [check, setCheck] = useState(true)

    return (
        <>
            <form roles="form text-left">
                <Modal
                    modalId={modalId}
                    modalHeader="Update User Information"
                    btnText="Update Information"
                    btnColor="bg-gradient-info"
                >
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Name"
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="email"
                        inpClass={classes.modalInput}
                        placeholder="Email"
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="Phone"
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="password"
                        inpClass={classes.modalInput}
                        placeholder="Password"
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="MM/DD/YYYY"
                    />
                    <CheckBox
                        divClass="form-check form-check-info text-left"
                        onClick={() => check ? setCheck(false) : setCheck(true)}
                        id="flexCheckDefault"
                        checked={check}
                        labelText={check ? `Activate` : `Deactive`}
                    />
                </Modal>
            </form>
        </>
    )
}

export default memo(UserUpdateModal)
