import React, { useState } from "react";
import "./schedule.css";
import _ from "lodash";
import { getImg } from "model/assets";
const imgStationNagoya = getImg("名古屋駅.png");

function Schedule() {
    const [clickedList, updateClickedList] = useState([
        true,
        false,
        false,
        false,
    ]);
    const dayList = [Day1(), Day2(), Day3(), Day4()];
    const [clickedDay, updateClickedDay] = useState(0);
    const pickList = [];

    function Clicked(index: number) {
        updateClickedDay(index);
        const copiedList = _.cloneDeep(clickedList);
        for (let i = 0; i < 2; i++) {
            copiedList[i] = false;
        }
        copiedList[index] = true;
        updateClickedList(copiedList);
    }

    function Day1() {
        return (
            <div>
                <h1 className="schedule-title"> スケジュール</h1>
                <div className="schedule_hiduke">
                    <h2
                        className="schedule_hinichi-pick"
                        onClick={() => Clicked(0)}
                    >
                        1日目
                    </h2>
                    <h2 className="schedule_hinichi" onClick={() => Clicked(1)}>
                        2日目
                    </h2>
                    <h2 className="schedule_hinichi" onClick={() => Clicked(2)}>
                        3日目
                    </h2>
                    <h2 className="schedule_hinichi" onClick={() => Clicked(3)}>
                        4日目
                    </h2>
                </div>
                <main>
                    <section className="schedule_place">
                        <p id="schedule-text" className="schedule-time">
                            7:20
                        </p>
                        <div className="schedule-area">
                            <img src={imgStationNagoya}className="schedule-nagoyastation" />
                            <div className="schedule-text">
                            <p id="schedule-text" className="schedule-area-do">
                                集合
                            </p>
                            <p
                                id="schedule-text"
                                className="schedule-area-text"
                            >
                                名古屋駅
                            </p>
                            </div>
                        </div>
                    </section>
                    <section className="schedule_place2">
                        <p id="schedule-text" className="schedule-time2">
                            7:51<span> ~ </span>10:01
                        </p>
                        <div className="schedule-area2">
                            <p id="schedule-text" className="schedule-norimono">
                                新幹線-のぞみ3号
                            </p>
                            <section className="schedule-place3">
                                <p className="schedule-tatesen"></p>
                                <p
                                    id="schedule-text"
                                    className="schedule-nagoya1"
                                >
                                    名古屋
                                </p>
                                <p
                                    id="schedule-text"
                                    className="schedule-nagoyasyou1"
                                >
                                    Nagoya
                                </p>
                            </section>
                            <p className="schedule-sannkaku1"></p>
                            <p className="schedule-tatesen2"></p>
                            <p
                                id="schedule-text"
                                className="schedule-hirosima1"
                            >
                                広島
                            </p>
                            <p
                                id="schedule-text"
                                className="schedule-hirosimasyou1"
                            >
                                hiroshima
                            </p>
                        </div>
                    </section>
                    <section className="schedule_place">
                        <p id="schedule-text" className="schedule-time">
                            10:01
                        </p>
                        <div className="schedule-area">
                            <p id="schedule-text" className="schedule-area-norikae">
                                乗り換え
                            </p>
                            <p
                                id="schedule-text"
                                className="schedule-area-hirosimaeki"
                            >
                                広島駅
                            </p>
                        </div>
                    </section>
                </main>
            </div>
        );
    }

    function Day2() {
        return (
            <div>
                <div className="schedule_hiduke">
                    <h2 className="schedule_hinichi" onClick={() => Clicked(0)}>
                        1日目
                    </h2>
                    <h2
                        className="schedule_hinichi-pick"
                        onClick={() => Clicked(1)}
                    >
                        2日目
                    </h2>
                    <h2 className="schedule_hinichi" onClick={() => Clicked(2)}>
                        3日目
                    </h2>
                    <h2 className="schedule_hinichi" onClick={() => Clicked(3)}>
                        4日目
                    </h2>
                </div>
            </div>
        );
    }

    function Day3() {
        return (
            <div>
                <div className="schedule_hiduke">
                    <h2 className="schedule_hinichi" onClick={() => Clicked(0)}>
                        1日目
                    </h2>
                    <h2 className="schedule_hinichi" onClick={() => Clicked(1)}>
                        2日目
                    </h2>
                    <h2
                        className="schedule_hinichi-pick"
                        onClick={() => Clicked(2)}
                    >
                        3日目
                    </h2>
                    <h2 className="schedule_hinichi" onClick={() => Clicked(3)}>
                        4日目
                    </h2>
                </div>
            </div>
        );
    }

    function Day4() {
        return (
            <div>
                <div className="schedule_hiduke">
                    <h2 className="schedule_hinichi" onClick={() => Clicked(0)}>
                        1日目
                    </h2>
                    <h2 className="schedule_hinichi" onClick={() => Clicked(1)}>
                        2日目
                    </h2>
                    <h2 className="schedule_hinichi" onClick={() => Clicked(2)}>
                        3日目
                    </h2>
                    <h2
                        className="schedule_hinichi-pick"
                        onClick={() => Clicked(3)}
                    >
                        4日目
                    </h2>
                </div>
            </div>
        );
    }

    return <body className="schedule-body">{dayList[clickedDay]}</body>;
}

export default Schedule;
