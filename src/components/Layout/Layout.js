import React, { memo } from 'react'
import NavigationBar from "./NavigationBar/NavigationBar"
import { SIDEBAR_COLLAPSE } from "../../redux/actions/types"
import { useDispatch, useSelector } from "react-redux"


const Layout = ({ children }) => {
    // redux
    const dispatch = useDispatch()
    const { sidebar } = useSelector(state => state.othersReducer)



    return (
        <>
            <NavigationBar />
            <div onClick={sidebar === true ? () => dispatch({ type: SIDEBAR_COLLAPSE }) : null}>
                {children}
            </div>
        </>
    )
}

export default memo(Layout)
