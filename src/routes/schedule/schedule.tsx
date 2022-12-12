import React from "react";
import "./schedule.css";

function Schedule() {
    return (
        <body>
            <header>
                <p>schedule</p>
            </header>
            <div className="schedule_hiduke">
                <h2 className="schedule_hinichi">1日目</h2>
                <h2 className="schedule_hinichi">2日目</h2>
                <h2 className="schedule_hinichi">3日目</h2>
                <h2 className="schedule_hinichi">4日目</h2>
            </div>
            <main className="schedule_place">
                <div className="timeschedule">
                    <h3>7:20</h3>
                    <p>7:51</p>
                    <p></p>
                    <p>10:01</p>
                    <p>10:20</p>
                    <p></p>
                    <p>11:00</p>
                    <p>11:20</p>
                    <p></p>
                    <p>11:30</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <h3>名古屋駅集合</h3>
                </div>
            </main>
        </body>
    );
}

export default Schedule;
