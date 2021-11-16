import React, { memo } from 'react'
import { useDispatch, useSelector } from "react-redux"


const UserStatus = () => {
    // redux
    const { allUser } = useSelector(state => state.loginReducer)



    // caluculate active user number
    const activeUser = allUser.filter(user => {
        return user.account_Confirmed === true
    })

    // caluculate deactive user number
    const deactiveUser = allUser.filter(user => {
        return user.account_Confirmed === false
    })



    return (
        <>
            <h6 className="text-sm mb-0 text-uppercase font-weight-bolder">
                <span className={`badge badge-sm bg-gradient-info`}>{`Total User 4`}</span>
            </h6>
            <h6 className="text-sm mb-0 text-uppercase font-weight-bolder mt-2">
                <span className={`badge badge-sm bg-gradient-success`}>Activated  {activeUser.length < 10 ? `0${activeUser.length}` : activeUser.length}</span>
            </h6>
            <h6 className="text-sm mb-0 text-uppercase font-weight-bolder mt-2">
                <span className={`badge badge-sm bg-gradient-danger`}>Pending  {deactiveUser.length < 10 ? `0${deactiveUser.length}` : deactiveUser.length}</span>
            </h6>
        </>
    )
}

export default memo(UserStatus)
