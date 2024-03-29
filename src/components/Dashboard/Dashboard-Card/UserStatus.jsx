import React, { memo } from 'react'
import { useSelector } from "react-redux"


const UserStatus = () => {
    // redux
    const { users } = useSelector(state => state.loginReducer)



    // caluculate active user number
    const activeUser = users.filter(user => {
        return user.account_Confirmed === true
    })

    // caluculate deactive user number
    const deactiveUser = users.filter(user => {
        return user.account_Confirmed === false
    })



    return (
        <>
            <h6 className="text-sm mb-0 text-uppercase font-weight-bolder">
                <span className={`badge badge-sm bg-gradient-info animate__animated animate__backInDown animate__slow`}>
                    {`Total User ${users.length}`}
                </span>
            </h6>
            <h6 className="text-sm mb-0 text-uppercase font-weight-bolder mt-2">
                <span className={`badge badge-sm bg-gradient-success animate__animated animate__backInLeft animate__slow`}>
                    Activated  {activeUser.length < 10 ? `0${activeUser.length}` : activeUser.length}
                </span>
            </h6>
            <h6 className="text-sm mb-0 text-uppercase font-weight-bolder mt-2">
                <span className={`badge badge-sm bg-gradient-danger animate__animated animate__backInUp animate__slow`}>
                    Pending  {deactiveUser.length < 10 ? `0${deactiveUser.length}` : deactiveUser.length}
                </span>
            </h6>
        </>
    )
}

export default memo(UserStatus)
