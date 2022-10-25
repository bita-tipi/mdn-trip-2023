import React, { useState } from "react";
import yoshii from "../assets/img/yoshi.png";
import "./loading.css";
import {
    YoshiDataState,
    YoshiData,
    IndexData,
    IndexDataState,
} from "../assets/atom";

let index = 0;

function Loading() {
    console.log("awa");
    function UpdateSetIndex() {
        index = index + 1;
    }

    return (
        <div className="con">
            <div>
                {UpdateSetIndex()}
                <div className="animation-box"></div>
                {index === 3 ? (
                    <div>
                        <div className="animation">
                            <img src={yoshii} />
                        </div>
                        {(index = 0)}
                    </div>
                ) : (
                    <p className="animation">loading</p>
                )}
            </div>
        </div>
    );
}
export default Loading;
