import React, { useState } from "react";
import yoshii from "../assets/img/yoshi.png";
import "./loading.css";

function Loading() {
    console.log("awa");
    return (
        <div className="con">
        <div className="animation-box"></div>
        <p className="animation">loading</p>
        </div>
    );
}
export default Loading;
