import React from "react";

function Fragment() {
    let number = 5;
    return (
        <>
            {
                number > 10 ? <h3>Number is greater than 10</h3>:<h3>Number is less than 10</h3>
            }
        </>
    )
}

export default Fragment;