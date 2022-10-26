import React, { useState } from "react";
import Load1 from "./load1";
import Load2 from "./load2";
import Load3 from "./load3";
import yoshii from "../../assets/img/yoshi.png";
import "./loading.css";

let index = 0;

function Loading() {
    let LoadingIndex = 0;
    console.log("awa");

    function UpdateSetIndex() {
        index = index + 1;
    }

    function Random(): void {
        let randomIndex = Math.floor(Math.random() * 3);
        console.log(randomIndex);
        LoadingIndex = randomIndex;
    }

    function RandomLoading() {
        const loading = [Load1(), Load2(), Load3()];
        return loading[LoadingIndex];
    }

    Random();
    UpdateSetIndex();
    return (
        <div className="con">
            <div>
                {RandomLoading()}
                {LoadingIndex}
            </div>
        </div>
    );
}

export default Loading;
