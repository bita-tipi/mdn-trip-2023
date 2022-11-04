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

    function Random(): void {
        let randomIndex = Math.floor(Math.random() * 3);
        LoadingIndex = randomIndex;
    }

    function RandomLoading() {
        const loading = [Load1(), Load2(), Load3()];
        return loading[LoadingIndex];
    }

    Random();
    return <div className="con">{RandomLoading()}</div>;
}

export default Loading;