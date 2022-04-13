import React from 'react'

const SelectOptionInput = ({ divClass,name, onChange, value, inpClass, children }) => {
    return (
        <div className={divClass}>
            <select name={name} onChange={onChange} value={value} class={`form-select form-select-sm ${inpClass}`} aria-label=".form-select-sm example">
                {children}
            </select>
        </div>
    )
}

export default SelectOptionInput
