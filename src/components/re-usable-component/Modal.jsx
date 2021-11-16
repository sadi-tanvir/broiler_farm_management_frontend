import React, { memo } from 'react'
import Button from './Button'

const Modal = ({ modalId, modalHeader, children, btnText, btnColor }) => {


    return (
        <>
            <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{modalHeader}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="d-flex modal-footer d-sm-none">
                            <Button type="submit" btnClass={`btn ${btnColor} btn-sm`} data-bs-dismiss="modal">{btnText}</Button>
                            <Button type="button" btnClass="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</Button>
                        </div>
                        <div className="d-none modal-footer d-sm-flex">
                            <Button type="button" btnClass="btn btn-secondary" data-bs-dismiss="modal">Close</Button>
                            <Button type="submit" btnClass={`btn ${btnColor}`} data-bs-dismiss="modal">{btnText}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Modal)
