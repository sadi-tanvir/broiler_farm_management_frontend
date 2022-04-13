import React from 'react'

const CheckBox = ({ divClass, labelText, onClick, id, checked,labelLinkClass,labelLinkText,onChange }) => {
    return (
        <>
            <div className={divClass}>
                <input
                    onClick={onClick}
                    className="form-check-input"
                    type="checkbox"
                    id={id}
                    checked={checked}
                    onChange={onChange}
                />

                {labelText && <label className="form-check-label" htmlFor={id}>
                    {labelText} 
                    {labelLinkText && <a href="#" className={labelLinkClass}>{labelLinkText}</a>}
                </label>}
            </div>
        </>
    )
}

export default CheckBox
