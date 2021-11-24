import React, { memo, useState } from 'react'
import InputFileUpload from "../../re-usable-component/InputFileUpload"
import classes from "../../../styles/TextInput.module.css"
import Modal from '../../re-usable-component/Modal'
import axios from "axios"
import { apiBaseUrl } from "../../Utils/constant"
import { useDispatch } from "react-redux"
import { setLoginUser } from "../../../redux/actions/loginActions"



const ChangeCoverPicModal = () => {

    // redux
    const dispatch = useDispatch()

    // state
    const [cover, setCover] = useState(null)

    // handle change
    const handleChange = (event) => {
        const file = event.target.files[0]
        const formData = new FormData()
        formData.append('cover_pic', file)

        setCover(formData);
    }


    // profile pic upload
    const coverPicUpload = (e) => {
        e.preventDefault()
        axios.post(`${apiBaseUrl}/cover-pic-upload`, cover, {
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
            <form onSubmit={coverPicUpload} roles="form text-left">
                <Modal
                    modalId="changeCoverPic"
                    modalHeader="Upload Your Cover Photo"
                    btnText="Upload Photo"
                    btnColor="bg-gradient-info"
                >
                    <InputFileUpload
                        labelText="Choose your Cover Photo"
                        divClass="my-4"
                        inpClass={classes.modalInput}
                        onChange={handleChange}
                    />
                </Modal>
            </form>
        </>
    )
}

export default memo(ChangeCoverPicModal)
