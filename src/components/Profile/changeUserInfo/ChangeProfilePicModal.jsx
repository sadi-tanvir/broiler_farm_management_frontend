import React, { memo, useState } from 'react'
import InputFileUpload from "../../re-usable-component/InputFileUpload"
import DatalistTextInput from "../../re-usable-component/DatalistTextInput"
import classes from "../../../styles/TextInput.module.css"
import Modal from '../../re-usable-component/Modal'
import axios from "axios"
import { apiBaseUrl } from "../../Utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { setLoginUser } from "../../../redux/actions/loginActions"



const ChangeProfilePicModal = () => {

    // redux
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.loginReducer)

    // state
    const [profile, setProfile] = useState(null)

    // handle change
    const handleChange = (event) => {
        const file = event.target.files[0]
        const formData = new FormData()
        formData.append('profile_pic', file)

        setProfile(formData);
    }


    // profile pic upload
    const profilePicUpload = (e) => {
        e.preventDefault()
        axios.post(`${apiBaseUrl}/profile-pic-upload`, profile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
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
            <form onSubmit={profilePicUpload} roles="form text-left">
                <Modal
                    modalId="changeProfilePic"
                    modalHeader="Change Your Profile Picture"
                    btnText="Upload Photo"
                    btnColor="bg-gradient-info"
                >
                    <InputFileUpload
                        labelText="Choose your prifile picture"
                        divClass="my-4"
                        inpClass={classes.modalInput}
                        onChange={handleChange}
                    />

                    {/* <div class="form-group mt-3">
                        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                    </div> */}
                </Modal>
            </form>
        </>
    )
}

export default memo(ChangeProfilePicModal)
