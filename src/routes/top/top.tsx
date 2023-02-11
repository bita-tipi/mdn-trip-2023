import React, { useState, useEffect, ReactElement } from "react";
import "./top.css";
import Loading from "../load/loading";
import { getImg } from "model/assets";
import { Link, useNavigate } from "react-router-dom";
import { localStorageKey, LocalStorage } from "assets/storage_test";
import { breakpoints } from "@mui/system";

const imgScheduleLogo = getImg("schedule-logo.svg");
const imgMapLogo = getImg("map-logo.svg");
const imgTopicLogo = getImg("topic-logo.svg");
const imgAttentionLogo = getImg("attention-logo.svg");
const imgSchedule = getImg("kari-schedule.jpg");
const imgSchedule1 = getImg("schedule1.png");
const imgSchedule2 = getImg("schedule2.png");
const imgSchedule3 = getImg("schedule3.png");
const imgSchedule4 = getImg("schedule4.png");
const imgDecolation = getImg("decolation1.svg");
const imgMainLogo = getImg("main-logo.png");
const imgMainvisual = getImg("mainvisual.webp");
const imgMainvisual1 = getImg("mainvisual1.png");
const imgBackground = getImg("top-background.png");
const TopTopic1 = getImg("TopTopic.png");
const TopTopic2 = getImg("TopTopic2.png");
const TopTopic3 = getImg("TopTopic3.png");
const TopTopic4 = getImg("TopTopic4.png");
const decoy = getImg("map-top.png");
const loading = getImg("loading.png")

const scheduleImagesPath = [
    imgSchedule1,
    imgSchedule3,
    imgSchedule2,
    imgSchedule4,
];

const loadDataRepo = new LocalStorage<number>(localStorageKey.visitedTimes2);

const topicImagesPath = [TopTopic1, TopTopic4, TopTopic2, TopTopic3];

const topicIndex = [6, 1, 4, 8];

function Top() {
    // state
    const [isLoading, SetLoading] = useState(false);
    const [loadingNumber, setLoadingNumber] = useState(loadDataRepo.get() ?? 0);

    useEffect(() => {
        window.scroll({ top: 0, behavior: "smooth" });
        setLoadingNumber(loadDataRepo.get() ?? 0);
        if (loadingNumber === 0) {
            SetLoading(true);
        } else if (loadingNumber % 3 === 0) {
            SetLoading(true);
        }
        loadDataRepo.set(loadingNumber + 1);
    }, []);

    // local
    const navigate = useNavigate();

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
                />
            );
        }
        return scheduleImages;
    }

    function generateTopicImages() {
        let topicImages: ReactElement[] = [];

        for (let index = 0; index < topicImagesPath.length; index++) {
            topicImages.push(
                <img
                    src={topicImagesPath[index]}
                    key={index}
                    alt={topicImagesPath[index]}
                    onClick={() =>
                        navigate("/map", {
                            state: {
                                TopicDateIndex: topicIndex[index],
                            },
                        })
                    }
                />
            );
        }
        return topicImages;
    }

    return (
        <div className="background_top">
            <img className="decolation" src={imgDecolation} />

            <div className="mainvisual">
                <div className="box">
                    <img className="mainvisual_sp" src={imgMainvisual} />
                    <img className="mainvisual_pc" src={imgMainvisual1} />
                    <img className="main_logo" src={imgMainLogo} />
                    <img className="main_logo2" src={imgMainLogo} />
                </div>
            </div>

            <div className="top-main">
                <section className="schedule">
                    <div className="title">
                        <img src={imgScheduleLogo} />
                        <Link to="/schedule" className="link">
                            <h2>日程</h2>
                        </Link>
                    </div>
                    <main className="schedule_main">
                        <div className="schedule_img">
                            {generateScheduleImages()}
                        </div>
                    </main>
                </section>

                <section className="map">
                    <div className="title">
                        <img src={imgMapLogo} />
                        <Link to="/map" className="link">
                            <h2>マップ</h2>
                        </Link>
                    </div>
                    <main className="map_main">
                        <div className="map_img">
                            <Link to="/map">
                                <img src={decoy} />
                            </Link>
                        </div>
                    </main>
                </section>

                <section className="topic">
                    <div className="title">
                        <img src={imgTopicLogo} />
                        <Link to="/map" className="link">
                            <h2>トピック</h2>
                        </Link>
                    </div>
                    <main className="topic_main">
                        <div className="schedule_img">
                            {generateTopicImages()}
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
            </div>

            <img className="decolation1" src={imgDecolation} />

            {isLoading ? (
                <div className="loadMain">
                    <img className="loadMainImg" src={loading}></img>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default Top;
