import React from 'react';

function Checkmark(props) {
    return(
        <>
        <input
            onChange={props.completeFunction}
             type="checkbox" className="my-checkbox" />
        </>
    )
};

export default Checkmark;