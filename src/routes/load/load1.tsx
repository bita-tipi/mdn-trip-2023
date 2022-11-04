import "./loading.css";
import React, { useState } from "react";
import yoshii from "../../assets/img/yoshi.png";

function Load1() {
    return (
        <div className="animation">
            <img src={yoshii} />
        </div>
    );
}

export default Load1;
