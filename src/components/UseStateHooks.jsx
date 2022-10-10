import React from "react";
import { useState } from "react";

const GetTextColor = () => {
    const [color , setColor] = useState('Red');
    return (
        <>
            <h4>Initial Text color {color}</h4>
            <button type="button" value={"changeColor"} onClick={() => setColor('blue')}></button>
        </>
    )
}

export default GetTextColor;