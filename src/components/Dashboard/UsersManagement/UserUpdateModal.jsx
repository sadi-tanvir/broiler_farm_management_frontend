import React, { useState, memo } from 'react'
import TextInputField from "../../re-usable-component/TextInputField"
import SelectOptionInput from '../../re-usable-component/SelectOptionInput'
import classes from "../../../styles/TextInput.module.css"
import Modal from "../../re-usable-component/Modal"
import { useSelector, useDispatch } from "react-redux"
import {
    USERS_ID,
    USERS_USERID,
    USERS_NAME,
    USERS_EMAIL,
    USERS_PASSWORD,
    USERS_PHONE,
    USERS_ROLE,
    USERS_ACCOUNT_STATUS,
    USERS_ACCOUNT_CREATE_DATE
} from "../../../redux/actions/types"



const UserUpdateModal = ({ modalId, updateUserInfo }) => {

    // redux
    const dispatch = useDispatch()
    const { _id, userId, name, email, password, phone,role, account_Confirmed, createdAt } = useSelector(state => state.adminReducer)


    return (
        <>
            <form onSubmit={(e) => updateUserInfo(e.preventDefault())} roles="form text-left">
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
                        placeholder="User Id"
                        onChange={(e) => dispatch({ type: USERS_ID, payload: e.target.value })}
                        value={_id}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="User Id"
                        onChange={(e) => dispatch({ type: USERS_USERID, payload: e.target.value })}
                        value={userId}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Name"
                        onChange={(e) => dispatch({ type: USERS_NAME, payload: e.target.value })}
                        value={name}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="email"
                        inpClass={classes.modalInput}
                        placeholder="Email"
                        onChange={(e) => dispatch({ type: USERS_EMAIL, payload: e.target.value })}
                        value={email}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="password"
                        inpClass={classes.modalInput}
                        placeholder="Password"
                        onChange={(e) => dispatch({ type: USERS_PASSWORD, payload: e.target.value })}
                        value={password}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="Phone"
                        onChange={(e) => dispatch({ type: USERS_PHONE, payload: e.target.value })}
                        value={phone}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Created At"
                        onChange={(e) => dispatch({ type: USERS_ACCOUNT_CREATE_DATE, payload: e.target.value })}
                        value={createdAt}
                    />
                    <SelectOptionInput
                        onChange={(e) => dispatch({ type: USERS_ROLE, payload: e.target.value })}
                        value={role}
                        divClass={`mb-3 ${classes.modalInput}`}
                    >
                        <option selected={role == 'admin' ? true : false} value="admin">Admin</option>
                        <option selected={role == 'user' ? true : false} value="user">User</option>
                    </SelectOptionInput>

                    <SelectOptionInput
                        onChange={(e) => dispatch({ type: USERS_ACCOUNT_STATUS, payload: e.target.value })}
                        value={account_Confirmed}
                        inpClass={classes.modalInput}
                    >
                        <option selected={account_Confirmed ? true : false} value={true}>Activate account</option>
                        <option selected={!account_Confirmed ? true : false} value={false}>deactivate account</option>
                    </SelectOptionInput>


                    {/* <CheckBox
                        divClass="form-check form-check-info text-left"
                        onClick={() => check ? setCheck(false) : setCheck(true)}
                        id="flexCheckDefault"
                        checked={check}
                        labelText={check ? `Activate` : `Deactive`}
                        onChange={(e) => dispatch({ type: USERS_ACCOUNT_STATUS, payload: e.target.value })}
                        value={}
                    /> */}
                </Modal>
            </form>
        </>
    )
}

export default memo(UserUpdateModal)
