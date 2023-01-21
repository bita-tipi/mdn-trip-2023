import React, { useState, useEffect, ReactElement } from "react";
import "./top.css";
import Loading from "../load/loading";
import { getImg } from "model/assets";
import { Link, useNavigate } from "react-router-dom";

const imgScheduleLogo = getImg("schedule-logo.svg");
const imgRoomLogo = getImg("room-logo.svg");
const imgTopicLogo = getImg("topic-logo.svg");
const imgAttentionLogo = getImg("attention-logo.svg");
const imgSchedule = getImg("kari-schedule.jpg");

const scheduleImagesPath = [imgSchedule, imgSchedule, imgSchedule, imgSchedule];

function Top() {
    // state
    const [isLoading, SetLoading] = useState(false);

    // local
    const navigate = useNavigate();

    useEffect(() => {
        SetLoading(true);
    }, []);

    // view
    function generateScheduleImages() {
        let scheduleImages: ReactElement[] = [];

        for (let index = 0; index < scheduleImagesPath.length; index++) {
            scheduleImages.push(
                <img
                    src={scheduleImagesPath[index]}
                    key={index}
                    alt={scheduleImagesPath[index]}
                    onClick={() =>
                        navigate("/schedule", {
                            state: { preferDateIndex: index },
                        })
                    }
                />,
            );
        }
        return scheduleImages;
    }

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
                    <div className="border_schedule" />
                    <div className="schedule_img">
                        {generateScheduleImages()}
                    </div>
                </main>
            </section>

            <section className="room">
                <div className="title">
                    <img src={imgRoomLogo}/>
                    <Link to="/room" className="link">
                        <h2>部屋割り ＞</h2>
                    </Link>
                </div>
                <div className="border_room" />
            </section>

            <section className="topic">
                <div className="title">
                    <img src={imgTopicLogo} />
                    <h2>トピック</h2>
                </div>
                <main className="topic_main">
                    <div className="border_topic" />
                    <div className="topic_img">
                        <img src={imgSchedule} />
                        <img src={imgSchedule} />
                        <img src={imgSchedule} />
                        <img src={imgSchedule} />
                    </div>
                </main>
            </section>

            <section className="attention">
                <div className="title">
                    <img src={imgAttentionLogo} />
                    <Link to="/attention" className="link">
                        <h2>注意事項 ＞</h2>
                    </Link>
                </div>
                <div className="border_attention" />
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
