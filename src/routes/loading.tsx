import React, { useState } from "react";
import yoshii from "../assets/img/yoshi.png";
import "./loading.css";

function Loading() {
    console.log("awa");
    return (
        <div className="con">
            <div className="animation-box"></div>
            <div className="animation">
                <img src={yoshii} />
            </div>
        </div>
    );
}
export default Loading;
