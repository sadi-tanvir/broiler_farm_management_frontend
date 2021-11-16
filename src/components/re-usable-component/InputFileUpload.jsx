import React from 'react'

const InputFileUpload = ({ labelText, divClass, inpClass, name, onChange, value }) => {
    return (
        <>
            <div className={divClass}>
                {labelText && <label for="formFileMultiple" class="form-label">{labelText}</label>}
                <input
                    class={`form-control ${inpClass}`}
                    type="file"
                    name={name}
                    onChange={onChange}
                    value={value}
                    multiple
                />
            </div>
        </>
    )
}

export default InputFileUpload
