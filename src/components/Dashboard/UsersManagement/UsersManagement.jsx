import React, { memo, useEffect, useState } from 'react'
import InfoTableHeader from "../../re-usable-component/InfoTableHeader"
import InfoTableRow from "../../re-usable-component/InfoTableRow"
import UserUpdateModal from "./UserUpdateModal"
import axios from "axios"
import Swal from "sweetalert2"
import { apiBaseUrl } from "../../Utils/constant"
import {
    ALL_USER_DATA,
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
import { useDispatch, useSelector } from "react-redux"


const UsersManagement = () => {
    // redux
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.loginReducer)
    const { userId, name, email, password, phone,role, account_Confirmed, createdAt } = useSelector(state => state.adminReducer)


    // state
    const [searchUserInfo, setSearchUserInfo] = useState("")
    const [outputUserInfo, setOutputUserInfo] = useState([])


    // update input value
    const setUpdateInputValue = (user) => {
        dispatch({ type: USERS_ID, payload: user._id })
        dispatch({ type: USERS_USERID, payload: user.userId })
        dispatch({ type: USERS_NAME, payload: user.name })
        dispatch({ type: USERS_EMAIL, payload: user.email })
        dispatch({ type: USERS_PASSWORD, payload: user.password })
        dispatch({ type: USERS_PHONE, payload: user.phone })
        dispatch({ type: USERS_ROLE, payload: user.role })
        dispatch({ type: USERS_ACCOUNT_STATUS, payload: user.account_Confirmed })
        dispatch({ type: USERS_ACCOUNT_CREATE_DATE, payload: user.createdAt })

    }

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


    // update user information
    const updateUserInfo = (user_Id) => {
        axios.patch(`${apiBaseUrl}/all-user-update/${user_Id}`, {
            userId,
            name,
            email,
            password,
            phone,
            role,
            account_Confirmed: JSON.parse(account_Confirmed),
            createdAt
        }).then(res => {
            dispatch({ type: ALL_USER_DATA, payload: res.data.users })
            localStorage.setItem('users', JSON.stringify(res.data.users))
        }).catch(error => {
            console.log(error.response);
        })
    }


    // search filter
    useEffect(() => {
        const filterVal = users.filter(user => {
            if (searchUserInfo === '') {
                return user
            } else if (
                user.name.toLowerCase().includes(searchUserInfo.toLowerCase()) ||
                user.email.toLowerCase().includes(searchUserInfo.toLowerCase()) ||
                user.phone.toString().includes(searchUserInfo.toLowerCase()) ||
                user.role.toLowerCase().includes(searchUserInfo.toLowerCase()) ||
                user.account_Confirmed.toString().includes(searchUserInfo.toLowerCase()) ||
                user.createdAt.toLowerCase().includes(searchUserInfo.toLowerCase())
            ) {
                return user
            }
        })

        setOutputUserInfo(filterVal)
    }, [searchUserInfo, users])


    return (
        <>
            <div className="container-fluid py-4">
                {/* table header */}
                <InfoTableHeader
                    header="Users Management"
                    col1="User Name"
                    col2="Phone"
                    col3="Role"
                    col4="Account Status"
                    col5="Date of joining"
                    onChange={(e) => setSearchUserInfo(e.target.value)}
                >

                    {/* table row */}
                    {outputUserInfo.map((user) => {
                        return (
                            <>
                                <InfoTableRow
                                    img={`${apiBaseUrl}/profile-pic/${user.profile_pic}`}
                                    col1={user.name}
                                    col1_2={user.email}
                                    col2={user.phone}
                                    col3={user.role}
                                    col4={user.account_Confirmed ? `Activated` : `Deactivate`}
                                    col5={user.createdAt}
                                    col2_color="bg-gradient-info"
                                    col3_color={user.role == 'admin' ? `bg-gradient-primary` : `bg-gradient-warning`}
                                    col4_color={user.account_Confirmed ? `bg-gradient-success` : `bg-gradient-danger`}
                                    col5_color="bg-gradient-info"
                                    modalId={user.userId}
                                    deleteProduct={() => deleteProduct(user._id)}
                                    setUpdateInputValue={() => setUpdateInputValue(user)}
                                >

                                    {/* User Info update Modal */}
                                    <UserUpdateModal
                                        modalId={user.userId}
                                        updateUserInfo={() => updateUserInfo(user._id)}
                                    />

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
