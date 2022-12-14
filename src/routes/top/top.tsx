import React, { useState, useEffect, useLayoutEffect } from "react";
import "./top.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Loading from "../load/loading";
import img from "../../assets/img/icon-kari.png";
import schedule from "../../assets/img/schedule-kari.jpg"

function Top() {
    useEffect(() => {
        SetLoading(true);
    });

    const [isLoading, SetLoading] = useState(false);

    return (
        <div className="background_top">
            <section className="schedule">
                <div className="title">
                    <img src={img}/>
                    <h2>日程</h2>
                </div>
                <main className="schedule_main">
                    <img src={schedule}/>
                    <img src={schedule}/>
                    <img src={schedule}/>
                    <img src={schedule}/>
                </main>
            </section>

            <section className="room">
                <div className="title">
                    <img src={img}/>
                    <h2>部屋割り</h2>
                </div>
            </section>

            <section className="topic">
                <div className="title">
                    <img src={img}/>
                    <h2>トピック</h2>
                </div>
            </section>

            <section className="attention">
                <div className="title">
                    <img src={img}/>
                    <h2>注意事項</h2>
                </div>
            </section>

            {isLoading ? (
                <div className="load_top">
                    <Loading/>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default Top;
