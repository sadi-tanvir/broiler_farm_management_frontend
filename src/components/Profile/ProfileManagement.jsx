import React, { memo, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import UserInformation from "./UserInformation"
import RightMenu from "./RightMenu"
import ChangeUserInfoModal from './changeUserInfo/ChangeUserInfoModal'
import ChangeProfilePicModal from './changeUserInfo/ChangeProfilePicModal'
import ChangeCoverPicModal from './changeUserInfo/ChangeCoverPicModal'
import { apiBaseUrl } from "../Utils/constant"
import { useSelector } from "react-redux"


const ProfileManagement = () => {

    // redux
    const { user, isAuthenticated } = useSelector(state => state.loginReducer)

    // history
    const navigate = useNavigate()

    // cover photo url
    const coverPic = `${apiBaseUrl}/cover-pic/${user.cover_pic}`


    // redirect to login page
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
        }
    }, [isAuthenticated, navigate])

    return (
        <>
            <div className="container-fluid">
                <div className="page-header min-height-300 border-radius-xl mt-4" style={{ backgroundImage: `url(${coverPic})`, backgroundPositionY: '50%' }}>
                    <span className="mask bg-gradient-primary opacity-6"></span>
                </div>
                <div className="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden">
                    <div className="row gx-4">
                        <div className="col-auto">
                            <div className="avatar avatar-xl position-relative animate__animated animate__flip animate__slow">
                                <img
                                    src={`${apiBaseUrl}/profile-pic/${user.profile_pic}`}
                                    alt="profile_image"
                                    className="w-100 border-radius-lg shadow-sm"
                                />
                            </div>
                        </div>
                        <div className="col-auto my-auto">
                            <div className="h-100">
                                <h5 className="mb-1 animate__animated animate__backInDown animate__slow">
                                    {user.name}
                                </h5>
                                <p className="mb-0 font-weight-bold text-sm animate__animated animate__backInUp animate__slow">
                                    {user.email}
                                </p>
                            </div>
                        </div>

                        {/* right menu */}
                        <RightMenu />
                    </div>
                </div>
                <UserInformation />
            </div>

            {/* modal */}
            <ChangeUserInfoModal />
            <ChangeProfilePicModal />
            <ChangeCoverPicModal />
            {/* <ProfileBody /> */}

        </>
    )
}

export default memo(ProfileManagement)
