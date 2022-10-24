import React, { useState } from "react";
import yoshii from "../assets/img/yoshi.png";
import "./loading.css";
import {
    YoshiDataState,
    YoshiData,
    IndexData,
    IndexDataState,
} from "../assets/atom";

function Loading() {
    const [isIndex, SetIndex] = useState(0);
    console.log("awa");
    function UpdateSetIndex() {
        return isIndex;
    }

    return (
        <div className="con">
            <div>
                {UpdateSetIndex()}
                <div className="animation-box"></div>
                <div className="animation">
                    <img src={yoshii} />
                </div>
            </div>
        </div>
    );
}
export default Loading;
