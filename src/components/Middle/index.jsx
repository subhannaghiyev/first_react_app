import React from "react";
import './index.css';

const Middle = ({bgColor,bgColor1,bgColor2}) =>{
    return(
        <>
        <div className="first-div">
            <div className="color-div"
            style={{
                backgroundColor : bgColor
            }}
            ></div>
        </div>
        </>
    )
}

export default Middle;