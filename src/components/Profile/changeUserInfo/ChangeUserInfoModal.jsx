import React, { memo, useState } from 'react'
import TextInputField from "../../re-usable-component/TextInputField"
import DatalistTextInput from "../../re-usable-component/DatalistTextInput"
import classes from "../../../styles/TextInput.module.css"
import Modal from '../../re-usable-component/Modal'
import axios from "axios"
import { apiBaseUrl } from "../../Utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { setLoginUser } from "../../../redux/actions/loginActions"



const ChangeUserInfoModal = () => {

    // redux
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.loginReducer)

    // state
    const [userInfo, setUserInfo] = useState({
        name: user.name,
        phone: user.phone,
        oldPassword: "",
        newPassword: ""
    })


    // handle change
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setUserInfo({ ...userInfo, [name]: value })
    }


    // update user information
    const updateUserInfo = (e) => {
        e.preventDefault()
        const { name, phone, oldPassword, newPassword } = userInfo
        axios.patch(`${apiBaseUrl}/change-user-info`, {
            name, phone, oldPassword, newPassword
        }).then(res => {
            // update value to redux & localStorage
            dispatch(setLoginUser(res.data.user))
            localStorage.setItem('user', JSON.stringify(res.data.user))
        }).catch(error => {
            console.log(error.response);
        })
    }

    return (
        <>
            <form onSubmit={updateUserInfo} roles="form text-left">
                <Modal
                    modalId="changeUserInfo"
                    modalHeader="Change Your Information"
                    btnText="Update Information"
                    btnColor="bg-gradient-info"
                >
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Name"
                        name="name"
                        value={userInfo.name}
                        onChange={handleChange}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="phone"
                        name="phone"
                        value={userInfo.phone}
                        onChange={handleChange}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="old password"
                        name="oldPassword"
                        value={userInfo.oldPassword}
                        onChange={handleChange}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="new password"
                        name="newPassword"
                        value={userInfo.newPassword}
                        onChange={handleChange}
                    />
                </Modal>
            </form>
        </>
    )
}

export default memo(ChangeUserInfoModal)
