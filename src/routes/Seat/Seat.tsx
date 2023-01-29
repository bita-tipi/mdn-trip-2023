import React, { ReactElement, useEffect, useState } from "react";
import "./seat.css";
import { getImg } from "model/assets";

const IMG13 = getImg("13.png");
const IMG14 = getImg("13.png");
const IMG15 = getImg("13.png");
const IMG16 = getImg("13.png");
const IMG17 = getImg("17.png");
const IMG18 = getImg("18.png");
const IMG19 = getImg("19.png");
const IMG20 = getImg("20.png");
const LINK = getImg("LINK.svg");

function Seat(){
    const [clickedDay, updateClickedDay] = useState(0);

    function scrollTo(id: string) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }

    return(
        <div>
            <div className="SeatTop">
                <p className={clickedDay === 0 ? "SeatTopTextPick" : "SeatTopText"} onClick={() => updateClickedDay(0)}>行き</p>
                <p className={clickedDay === 1 ? "SeatTopTextPick" : "SeatTopText"} onClick={() => updateClickedDay(1)}>帰り</p>
            </div>

            <div className="SeatMain">
                <div className="SeatSelectBox">
                    <div className="SeatSelectText">
                        <div onClick={() => scrollTo("13")} className="SeatSelectTextArea">
                            <img src={LINK}/>
                            <p>13号車</p>
                        </div>
                        <div onClick={() => scrollTo("14")} className="SeatSelectTextArea">
                            <img src={LINK}/>
                            <p>14号車</p>
                        </div>
                    </div>
                    <div className="SeatSelectText">
                        <div onClick={() => scrollTo("15")} className="SeatSelectTextArea">
                            <img src={LINK}/>
                            <p>15号車</p>
                        </div>
                        <div onClick={() => scrollTo("16")} className="SeatSelectTextArea">
                            <img src={LINK}/>
                            <p>16号車</p>
                        </div>
                    </div>
                </div>
                <div className="SeatTeam">
                    <p>１班</p>
                    <p>２班</p>
                </div>
                <div className="SeatBox" id="13">
                    <div className="SeatNumberArea">
                        <div className="SeatBar"></div>
                        <div>
                            <p className="SeatTextMain">13号車</p>
                            <p className="SeatTextSub">Car number 13</p>
                        </div>
                    </div>
                    {clickedDay === 0 ?(<img src={IMG13}/>):(<img src={IMG17}/>)}
                </div>
                <div className="SeatBox" id="14">
                    <div className="SeatNumberArea">
                        <div className="SeatBar"></div>
                        <div>
                            <p className="SeatTextMain">14号車</p>
                            <p className="SeatTextSub">Car number 14</p>
                        </div>
                    </div>
                    {clickedDay === 0 ?(<img src={IMG14}/>):(<img src={IMG18}/>)}
                </div>
                <div className="SeatBox" id="15">
                    <div className="SeatNumberArea">
                        <div className="SeatBar"></div>
                        <div>
                            <p className="SeatTextMain">15号車</p>
                            <p className="SeatTextSub">Car number 15</p>
                        </div>
                    </div>
                    {clickedDay === 0 ?(<img src={IMG15}/>):(<img src={IMG19}/>)}
                </div>
                <div className="SeatBox" id="16">
                    <div className="SeatNumberArea">
                        <div className="SeatBar"></div>
                        <div>
                            <p className="SeatTextMain">16号車</p>
                            <p className="SeatTextSub">Car number 16</p>
                        </div>
                    </div>
                    {clickedDay === 0 ?(<img src={IMG16}/>):(<img src={IMG20}/>)}
                </div>
            </div>
        </div>
    )
}

export default Seat;
