import React, { memo, useEffect, useState } from 'react'
import InfoTableHeader from "../../re-usable-component/InfoTableHeader"
import InfoTableRow from "../../re-usable-component/InfoTableRow"
import feedImg from "../../image/Feed.jpg"
import UserUpdateModal from "./UserUpdateModal"
import axios from "axios"
import Swal from "sweetalert2"
import { apiBaseUrl } from "../../Utils/constant"
import { ALL_USER_DATA } from "../../../redux/actions/types"
import { useDispatch, useSelector } from "react-redux"


const UsersManagement = () => {
    // redux
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.loginReducer)


    // state
    const [searchUserInfo, setSearchUserInfo] = useState("")
    const [outputUserInfo, setOutputUserInfo] = useState([])



    // delete user
    const deleteProduct = (userId) => {
        Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!' }).then((result) => {
            if (result.isConfirmed) {
                // delete function
                axios.delete(`${apiBaseUrl}/all-user-delete/${userId}`)
                    .then(res => {
                        dispatch({ type: ALL_USER_DATA, payload: res.data.users })
                        localStorage.setItem('users', JSON.stringify(res.data.users))
                    }).catch(error => {
                        console.log(error.response);
                    })
            }
        })
    }

    // // get all user data from server
    // useEffect(() => {
    //     axios.get(`${apiBaseUrl}/all-user-data`)
    //         .then(res => {
    //             console.log(res);
    //             // update value to redux & localStorage
    //             dispatch({ type: ALL_USER_DATA, payload: res.data.users })
    //             localStorage.setItem('allUser', JSON.stringify(res.data.users))
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }, [])


    useEffect(() => {
        const filterVal = users.filter(user => {
            if (searchUserInfo === '') {
                return user
            } else if (
                user.name.toLowerCase().includes(searchUserInfo.toLowerCase()) ||
                user.email.toLowerCase().includes(searchUserInfo.toLowerCase()) ||
                user.phone.toString().includes(searchUserInfo.toLowerCase()) ||
                user.account_Confirmed.toString().includes(searchUserInfo.toLowerCase()) ||
                user.createdAt.toLowerCase().includes(searchUserInfo.toLowerCase())
            ) {
                return user
            }
        })

        setOutputUserInfo(filterVal)
    }, [searchUserInfo, users])

    // const [searchUserInfo, setSearchUserInfo] = useState("")
    // const [outputUserInfo, setOutputUserInfo] = useState([])

    return (
        <>
            <div className="container-fluid py-4">
                {/* table header */}
                <InfoTableHeader
                    header="Users Management"
                    col1="User Name"
                    col2="Phone"
                    col3="Account Status"
                    col4="Date of joining"
                    onChange={(e) => setSearchUserInfo(e.target.value)}
                >

                    {/* table row */}
                    {outputUserInfo.map((user, index) => {
                        return (
                            <>
                                <InfoTableRow
                                    img={`${apiBaseUrl}/profile-pic/${user.profile_pic}`}
                                    col1={user.name}
                                    col1_2={user.email}
                                    col2={user.phone}
                                    col3={user.account_Confirmed ? `Activated` : `Deactivate`}
                                    col4={user.createdAt}
                                    col2_color="bg-gradient-info"
                                    col3_color={user.account_Confirmed ? `bg-gradient-success` : `bg-gradient-danger`}
                                    col4_color="bg-gradient-info"
                                    modalId={user.username}
                                    deleteProduct={() => deleteProduct(user._id)}
                                >

                                    {/* User Info update Modal */}
                                    <UserUpdateModal modalId={user.username} />

                                </InfoTableRow>
                            </>
                        )
                    })}

                </InfoTableHeader>
            </div>
        </>
    )
}

export default memo(UsersManagement)
