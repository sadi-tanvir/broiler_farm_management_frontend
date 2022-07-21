import React from 'react';

const MonthDetect = () => {
    return (
        <>
            <div className='order-1 order-md-2'>
                <p className='text-sm text-secondary font-weight-bold'>
                    <span
                        style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'green', display: 'inline-block', marginRight: '5px' }}
                        className="">
                    </span>
                    Alive
                </p>
                <p className='text-sm text-secondary font-weight-bold d-flex align-items-center'>
                    <span
                        style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'red', display: 'inline-block', marginRight: '5px' }}
                        className="">
                    </span>
                    Death
                </p>
            </div>
        </>
    );
};

export default MonthDetect;