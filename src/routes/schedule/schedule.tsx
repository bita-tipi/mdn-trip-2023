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
            <main>
                <section className="schedule_place">
                    <p id="schedule-text" className="schedule-time">7:20</p>
                    <div className="schedule-area">
                        <p id="schedule-text" className="schedule-area-do">集合</p>
                        <p id="schedule-text" className="schedule-area-text">名古屋駅</p>
                    </div>
                </section>
                <section className="schedule_place">
                <p id="schedule-text" className="schedule-time">7:20</p>
                    <div className="schedule-area">
                        <p id="schedule-text" className="schedule-area-do">集合</p>
                        <p id="schedule-text" className="schedule-area-text">名古屋駅</p>
                    </div>
                </section>
            </main>
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
            <div className="schedule_hiduke">
                <h2 className="schedule_hinichi" onClick={() => Clicked(0)}>1日目</h2>
                <h2 className="schedule_hinichi" onClick={() => Clicked(1)}>2日目</h2>
                <h2 className="schedule_hinichi" onClick={() => Clicked(2)}>3日目</h2>
                <h2 className="schedule_hinichi" onClick={() => Clicked(3)}>4日目</h2>
            </div>
            {dayList[clickedDay]}
            
        </body>
    );
}

export default Schedule;
