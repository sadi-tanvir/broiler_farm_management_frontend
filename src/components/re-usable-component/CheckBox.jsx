import React from 'react'

const CheckBox = ({ divClass, labelText, onClick, id, checked,labelLinkClass,labelLinkText }) => {
    return (
        <>
            <div className={divClass}>
                <input
                    onClick={onClick}
                    className="form-check-input"
                    type="checkbox"
                    id={id}
                    checked={checked}
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
