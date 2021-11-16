import React, { memo } from 'react'
import { useSelector } from "react-redux"
import Sidebar from "./SideBar"
import NavHeader from "./NavHeader"

const NavigationBar = () => {
    // redux
    const { sidebar } = useSelector(state => state.othersReducer)



    return (
        <>
            <div className={sidebar ? `g-sidenav-show  bg-gray-100 g-sidenav-pinned` : `g-sidenav-show  bg-gray-100`}>
                <Sidebar />
                <NavHeader />
            </div>
        </>
    )
}

export default memo(NavigationBar)
