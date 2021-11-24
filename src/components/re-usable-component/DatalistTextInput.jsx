import React from 'react'




const DatalistTextInput = ({ children, labelText, inpClass, placeholder, name, onChange, value, disabled, ...rest }) => {
    return (
        <>
            {labelText && <label for="exampleDataList" className="form-label">{labelText}</label>}
            <input
                className={`form-control mb-3 ${inpClass}`}
                list="datalistOptions"
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
                disabled={disabled}
                rest
                autoComplete={false}
            />
            <datalist id="datalistOptions">
                {children}
            </datalist>
        </>
    )
}

export default DatalistTextInput
