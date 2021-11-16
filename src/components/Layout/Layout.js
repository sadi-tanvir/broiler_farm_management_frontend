import React, { memo } from 'react'
import NavigationBar from "./NavigationBar/NavigationBar"
import {SIDEBAR_COLLAPSE } from "../../redux/actions/types"
import { useDispatch } from "react-redux"


const Layout = ({ children }) => {
    // redux
    const dispatch = useDispatch()

    console.log(`Layout Component is running...`);


    return (
        <>
            <NavigationBar />
            <div onClick={() => dispatch({ type: SIDEBAR_COLLAPSE })}>
                {children}
            </div>
        </>
    )
}

export default memo(Layout)
