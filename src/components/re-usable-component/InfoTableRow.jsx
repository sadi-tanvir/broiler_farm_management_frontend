import React, { memo } from 'react'




const InfoTableRow = (props) => {

    const { children, img, col1, col1_2, col2, col3, col4, col5,
        col6,col2_color, col3_color, col4_color, col5_color, col6_color,
        modalId, deleteProduct, setUpdateInputValue } = props;

    return (
        <>
            <tr>
                <td>
                    <div className="d-flex px-2 py-1">
                        <div>
                            {img && <img src={img} className="avatar avatar-sm me-3" alt="user1" />}
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{col1}</h6>
                            {col1_2 && <p className="text-xs text-secondary mb-0">{col1_2}</p>}
                        </div>
                    </div>
                </td>
                {col2 &&
                    // <td>
                    //     <div className="d-flex align-items-center">
                    //         <p className="text-xs text-secondary mb-0 text-bolder" style={{ fontSize: '25px' }}>{col2}</p>
                    //     </div>
                    // </td>
                    <td className="align-middle text-center text-sm">
                        <span className={`badge badge-sm ${col2_color}`}>{col2}</span>
                    </td>
                }
                {col3 &&
                    <td className="align-middle text-center text-sm">
                        <span className={`badge badge-sm ${col3_color}`}>{col3}</span>
                    </td>
                }
                {col4 &&
                    <td className="align-middle text-center text-sm">
                        <span className={`badge badge-sm ${col4_color}`}>{col4}</span>
                    </td>
                }
                {col5 &&
                    <td className="align-middle text-center text-sm">
                        <span className={`badge badge-sm ${col5_color}`}>{col5}</span>
                    </td>
                }
                {col6 &&
                    <td className="align-middle text-center text-sm">
                        <span className={`badge badge-sm ${col6_color}`}>{col6}</span>
                    </td>
                }
                <td className="align-middle">
                    <div className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">

                        {/* info update modal */}
                        {children}

                        <i onClick={setUpdateInputValue} data-bs-toggle="modal" data-bs-target={`#${modalId}`} title="edit" style={{ marginRight: 4, fontSize: 15 }} className="fas fa-edit text-info cursor-pointer"></i>
                        <i onClick={deleteProduct} title="delete info" style={{ marginLeft: 7, fontSize: 15 }} className="fas fa-minus-circle text-danger cursor-pointer"></i>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default memo(InfoTableRow)
