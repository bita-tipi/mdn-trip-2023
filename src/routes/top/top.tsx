import React, { useState, useEffect, useLayoutEffect } from "react";
import "./top.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Loading from "../load/loading";
import img from "../../assets/img/kari-icon.png";
import schedule_logo from "../../assets/img/schedule-logo.svg";
import room_logo from "../../assets/img/room-logo.svg";
import topic_logo from "../../assets/img/topic-logo.svg";
import attention_logo from "../../assets/img/attention-logo.svg";
import schedule from "../../assets/img/kari-schedule.jpg";
import mainvisual1 from "../../assets/img/kari-mainvisual-pc.jpg";
import mainvisual2 from "../../assets/img/kari-mainvisual-sp.jpg";

function Top() {
    useEffect(() => {
        SetLoading(true);
    });

    const [isLoading, SetLoading] = useState(false);

    return (
        <div className="background_top">
            <div className="mainvisual">
                <img src={schedule} />
            </div>

            <section className="schedule">
                <div className="title">
                    <img src={schedule_logo} />
                    <h2>日程</h2>
                </div>
                <main className="schedule_main">
                    <img src={schedule} />
                    <img src={schedule} />
                    <img src={schedule} />
                    <img src={schedule} />
                </main>
            </section>

            <section className="room">
                <div className="title">
                    <img src={room_logo} />
                    <h2>部屋割り</h2>
                </div>
            </section>

            <section className="topic">
                <div className="title">
                    <img src={topic_logo} />
                    <h2>トピック</h2>
                </div>
                <main className="topic_main">
                    <img src={schedule} />
                    <img src={schedule} />
                    <img src={schedule} />
                    <img src={schedule} />
                </main>
            </section>

            <section className="attention">
                <div className="title">
                    <img src={attention_logo} />
                    <h2>注意事項</h2>
                </div>
            </section>

            {isLoading ? (
                <div className="load_top">
                    <Loading />
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default Top;
