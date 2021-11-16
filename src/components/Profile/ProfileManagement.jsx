import React, { memo, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import UserInformation from "./UserInformation"
import RightMenu from "./RightMenu"
import ChangeUserInfoModal from './changeUserInfo/ChangeUserInfoModal'
import ChangeProfilePicModal from './changeUserInfo/ChangeProfilePicModal'
import ChangeCoverPicModal from './changeUserInfo/ChangeCoverPicModal'
import { apiBaseUrl } from "../Utils/constant"
import { useSelector } from "react-redux"
import Check from "../re-usable-component/see/Accordion"


const ProfileManagement = () => {

    // redux
    const { user, isAuthenticated } = useSelector(state => state.loginReducer)

    // history
    const history = useHistory()

    // cover photo url
    const coverPic = `${apiBaseUrl}/cover-pic/${user.cover_pic}`


    // redirect to login page
    useEffect(() => {
        if (!isAuthenticated) {
            history.push('/login')
        }
    }, [isAuthenticated, history])

    return (
        <>
            <div class="container-fluid">
                <div class="page-header min-height-300 border-radius-xl mt-4" style={{ backgroundImage: `url(${coverPic})`, backgroundPositionY: '50%' }}>
                    <span class="mask bg-gradient-primary opacity-6"></span>
                </div>
                <div class="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden">
                    <div class="row gx-4">
                        <div class="col-auto">
                            <div class="avatar avatar-xl position-relative">
                                <img
                                    src={`${apiBaseUrl}/profile-pic/${user.profile_pic}`}
                                    alt="profile_image"
                                    class="w-100 border-radius-lg shadow-sm"
                                />
                            </div>
                        </div>
                        <div class="col-auto my-auto">
                            <div class="h-100">
                                <h5 class="mb-1">
                                    {user.name}
                                </h5>
                                <p class="mb-0 font-weight-bold text-sm">
                                    {user.email}
                                </p>
                            </div>
                        </div>

                        {/* right menu */}
                        <RightMenu />
                    </div>
                </div>
                <UserInformation />
                <Check />
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
