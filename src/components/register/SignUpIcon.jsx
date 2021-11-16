import React from 'react'

const SignUpIcon = ({
    divClass,
    iconId,
    transform,
    circleId,
    path1,
    path1_id,
    path1_fill,
    path2,
    path2_id,
    path2_fill,
    path3,
    path3_id,
    path3_fill,
    path4,
    path4_id,
    path4_fill
}) => {
    return (
        <>
            <div className={divClass}>
                <a className="btn btn-outline-light w-100" href="#">
                    <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1">
                        <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id={iconId} transform={transform} fill="#000000" fillRule="nonzero">
                                {circleId && <circle id={circleId} fill="#3C5A9A" cx="29.5091719" cy="29.4927506" r="29.4882047"></circle>}
                                <path d={path1} id={path1_id} fill={path1_fill}></path>
                                {path2 && <path d={path2} id={path2_id} fill={path2_fill}></path>}
                                {path3 && <path d={path3} id={path3_id} fill={path3_fill}></path>}
                                {path4 && <path d={path4} id={path4_id} fill={path4_fill}></path>}
                            </g>
                        </g>
                    </svg>
                </a>
            </div>
        </>
    )
}

export default SignUpIcon
