import React from 'react'

const TextInputField = ({ labelText, divClass, inpClass, type, placeholder, name, onChange, value,disabled }) => {
    return (
        <>
            {labelText && <label>{labelText}</label>}
            <div className={divClass}>
                <input
                    type={type}
                    className={`form-control ${inpClass}`}
                    placeholder={placeholder}
                    name={name}
                    onChange={onChange}
                    value={value}
                    disabled={disabled}
                />
            </div>
        </>
    )
}

export default TextInputField