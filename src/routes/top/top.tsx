import React, { useState, useEffect, useLayoutEffect } from "react";
import "./top.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Loading from "../load/loading";
import { getImg } from "../../model/assets";

const imgScheduleLogo = getImg("schedule-logo.svg");
const imgRoomLogo = getImg("room-logo.svg");
const imgTopicLogo = getImg("topic-logo.svg");
const imgAttentionLogo = getImg("attention-logo.svg");
const imgSchedule = getImg("kari-schedule.jpg");

function Top() {
    useEffect(() => {
        SetLoading(true);
    });

    const [isLoading, SetLoading] = useState(false);

    return (
        <div className="background_top">
            <div className="mainvisual">
                <img src={imgSchedule} />
            </div>

            <section className="schedule">
                <div className="title">
                    <img src={imgScheduleLogo} />
                    <h2>日程</h2>
                </div>
                <main className="schedule_main">
                    <img src={imgSchedule} />
                    <img src={imgSchedule} />
                    <img src={imgSchedule} />
                    <img src={imgSchedule} />
                </main>
            </section>

            <section className="room">
                <div className="title">
                    <img src={imgRoomLogo} />
                    <h2>部屋割り</h2>
                </div>
            </section>

            <section className="topic">
                <div className="title">
                    <img src={imgTopicLogo} />
                    <h2>トピック</h2>
                </div>
                <main className="topic_main">
                    <img src={imgSchedule} />
                    <img src={imgSchedule} />
                    <img src={imgSchedule} />
                    <img src={imgSchedule} />
                </main>
            </section>

            <section className="attention">
                <div className="title">
                    <img src={imgAttentionLogo} />
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
