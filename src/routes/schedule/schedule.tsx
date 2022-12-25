import React, { useState } from "react";
import "./schedule.css";
import _ from "lodash";

function Schedule() {
    const [clickedList,updateClickedList] = useState([true,false,false,false])
    const [isClicked,updateIsClicked] = useState()
    const dayList = [Day1(),Day2(),Day3(),Day4()]
    const [clickedDay,updateClickedDay] = useState(0);
    
    function Clicked(index:number){
        updateClickedDay(index);
        const copiedList = _.cloneDeep(clickedList);
        for (let i = 0; i < 2; i++) {
            copiedList[i] = false;
        }
        copiedList[index] = true;
        updateClickedList(copiedList);
    }

    function Day1(){
        return(
            <div>
                <p>一日目</p>
            </div>
        )
    }

    function Day2(){
        return(
            <div>
                <p>2日目</p>
            </div>
        )
    }

    function Day3(){
        return(
            <div>
                <p>3日目</p>
            </div>
        )
    }

    function Day4(){
        return(
            <div><p>4日目</p></div>
        )
    }


    return (
        <body className="schedule-body">
            <header>
                <p>schedule</p>
            </header>
            <div className="schedule_hiduke">
                <h2 className="schedule_hinichi" onClick={() => Clicked(0)}>1日目</h2>
                <h2 className="schedule_hinichi" onClick={() => Clicked(1)}>2日目</h2>
                <h2 className="schedule_hinichi" onClick={() => Clicked(2)}>3日目</h2>
                <h2 className="schedule_hinichi" onClick={() => Clicked(3)}>4日目</h2>
            </div>
            {dayList[clickedDay]}
            <main className="schedule_place">
                <div className="schedule-transparent"></div>
                <div className="schedule-circle"></div>
                <div className="schedule-tatesen"></div>
                <div className="schedule-hosotatesen"></div>
                <div className="schedule-timeschedule">
                    <h3>7:20</h3>
                    <p>7:51</p>
                    <p>〜6</p>
                    <p>10:01</p>
                    <p>10:20</p>
                    <p></p>
                    <h3>11:00</h3>
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
                    <p>新幹線・のぞみ3号</p>
                    <h4>名古屋▶️広島</h4>
                    <h4>広島駅▶️宮島口</h4>
                    <h4>宮島口▶️宮島</h4>
                    <h4>宮島▶️宮島口</h4>
                    <h4>宮島口▶️平和祈念資料館</h4>
                </div>
            </main>
        </body>
    );
}

export default Schedule;
