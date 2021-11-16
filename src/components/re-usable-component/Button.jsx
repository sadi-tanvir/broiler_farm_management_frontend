import React from 'react'

const Button = ({ divClass, btnClass, children, type, ...rest }) => {
    return (
        <>
            <div className={divClass}>
                <button type={type} className={btnClass} {...rest}>{children}</button>
            </div>
        </>
    )
}

export default Button
