import React, { ReactElement, useEffect, useState } from "react";
import "./seat.css";
import { getImg } from "model/assets";

const IMG13 = getImg("13-1.png");
const IMG14 = getImg("14-1.png");
const IMG15 = getImg("15-1.png");
const IMG16 = getImg("16-1.png");
const IMG13_2 = getImg("13-2.png");
const IMG14_2 = getImg("14-2.png");
const IMG15_2 = getImg("15-2.png");
const IMG16_2 = getImg("16-2.png");
const LINK = getImg("LINK.svg");
const sin = getImg("sin1.svg");
const sin2 = getImg("sin2.svg");

function Seat() {
    const [clickedDay, updateClickedDay] = useState(0);

    function scrollTo(id: string) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div>
            <div className="SeatTop">
                <div className="SeatGo" onClick={() => updateClickedDay(0)}>
                    {clickedDay == 0 ? <img src={sin2} /> : <img src={sin} />}
                    <p>１班</p>
                </div>
                <div className="SeatGo" onClick={() => updateClickedDay(1)}>
                    {clickedDay == 1 ? <img src={sin2} /> : <img src={sin} />}
                    <p>2班</p>
                </div>
            </div>

            <div className="SeatMain">
                <div className="SeatSelectBox">
                    <div className="SeatSelectText">
                        <div
                            onClick={() => scrollTo("13")}
                            className="SeatSelectTextArea"
                        >
                            <img src={LINK} />
                            <p>13号車</p>
                        </div>
                        <div
                            onClick={() => scrollTo("14")}
                            className="SeatSelectTextArea"
                        >
                            <img src={LINK} />
                            <p>14号車</p>
                        </div>
                    </div>
                    <div className="SeatSelectText">
                        <div
                            onClick={() => scrollTo("15")}
                            className="SeatSelectTextArea"
                        >
                            <img src={LINK} />
                            <p>15号車</p>
                        </div>
                        <div
                            onClick={() => scrollTo("16")}
                            className="SeatSelectTextArea"
                        >
                            <img src={LINK} />
                            <p>16号車</p>
                        </div>
                    </div>
                </div>
                <div className="SeatTeam">
                    <p>行き</p>
                    <p>帰り</p>
                </div>
                <div className="SeatBox" id="13">
                    <div className="SeatNumberArea">
                        <div className="SeatBar"></div>
                        <div>
                            <p className="SeatTextMain">13号車</p>
                            <p className="SeatTextSub">Car number 13</p>
                        </div>
                    </div>
                    {clickedDay === 0 ? (
                        <img src={IMG13} />
                    ) : (
                        <img src={IMG13_2} />
                    )}
                </div>
                <div className="SeatBox" id="14">
                    <div className="SeatNumberArea">
                        <div className="SeatBar"></div>
                        <div>
                            <p className="SeatTextMain">14号車</p>
                            <p className="SeatTextSub">Car number 14</p>
                        </div>
                    </div>
                    {clickedDay === 0 ? (
                        <img src={IMG14} />
                    ) : (
                        <img src={IMG14_2} />
                    )}
                </div>
                <div className="SeatBox" id="15">
                    <div className="SeatNumberArea">
                        <div className="SeatBar"></div>
                        <div>
                            <p className="SeatTextMain">15号車</p>
                            <p className="SeatTextSub">Car number 15</p>
                        </div>
                    </div>
                    {clickedDay === 0 ? (
                        <img src={IMG15} />
                    ) : (
                        <img src={IMG15_2} />
                    )}
                </div>
                <div className="SeatBox" id="16">
                    <div className="SeatNumberArea">
                        <div className="SeatBar"></div>
                        <div>
                            <p className="SeatTextMain">16号車</p>
                            <p className="SeatTextSub">Car number 16</p>
                        </div>
                    </div>
                    {clickedDay === 0 ? (
                        <img src={IMG16} />
                    ) : (
                        <img src={IMG16_2} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Seat;
