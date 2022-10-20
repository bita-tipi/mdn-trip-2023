import React, { useState } from "react";
import yoshii from "../assets/img/yoshi.png";

function Loading() {
    console.log("awa");
    const [time, setTime] = useState(0);
    return (
        <div className="load">
            {time <= 30 ? <div></div> : <div></div>}
            <img src={yoshii} />
        </div>
    );
}
export default Loading;
