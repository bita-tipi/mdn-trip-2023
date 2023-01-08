import React from "react";
import Load1 from "./load1";
import Load2 from "./load2";
import Load3 from "./load3";
import "./loading.css";

function Loading() {
    let LoadingIndex = 0;
    console.log("awa");

    function Random(): void {
        let randomIndex = Math.floor(Math.random() * 1);
        LoadingIndex = randomIndex;
    }

    function RandomLoading() {
        const loading = [Load1(), Load2(), Load3()];
        return loading[LoadingIndex];
    }

    Random();
    return <div className="load">{RandomLoading()}</div>;
}

export default Loading;
