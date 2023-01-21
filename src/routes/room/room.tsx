import React, { useState } from "react";
import _ from "lodash";
import "./room.css";
import { getImg } from "model/assets";


const sennsu = getImg("扇子.svg");
function RoomHTML() {
    const [isListOpen, updateIsListOpen] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    const textList = ["一日目", "二日目", "三日目"];
    const DayList = [Day1(), Day2(), Day3()];
    const [clickedDay, updateClickedDay] = useState(0);

    function ChangeDay(index: number) {
        updateClickedDay(index);
    }

    function Day1() {
        return (
            <main className="haikei">
                <section>
                    <p>ホテル</p>
                    <h3 className="hoterunonamae">〇〇ホテル</h3>
                </section>
                <section>
                <p className="heya">
                 <img src={sennsu} className="sennsu1" />
                 部屋
                </p>
                    <div className="sennsubeya">
                    </div>
                    <div className="heyabanngou">
                        <h3 className="hoterunonamae">111</h3>
                        <p className="mojinosaizu">号室</p>
                    </div>
                </section>
                <section>
                    <div className="heyabanngou">
                        <p className="mojinosaizu">クラス</p>
                        <h3 className="hoterunonamae">G2D</h3>
                    </div>
                    <div className="heyabanngou">
                        <p className="mojinosaizu">名前</p>
                        <h3 className="hoterunonamae">中村優馬</h3>
                    </div>
                    <div>
                        <p>メンバー</p>
                        <h3 className="mennba-nowaku">
                            ・メンバーの名前 
                        </h3>
                    </div>
                </section>
            </main>
        );
    }
    function Day2() {
        return (
            <main className="haikei">
                <section>
                    <p>ホテル</p>
                    <h3 className="hoterunonamae">〇〇ホテル</h3>
                </section>
                <section>
                    <p>部屋</p>
                    <div className="heyabanngou">
                        <h3 className="hoterunonamae">222</h3>
                        <p className="mojinosaizu">号室</p>
                    </div>
                </section>
                <section>
                    <div className="heyabanngou">
                        <p className="mojinosaizu">クラス</p>
                        <h3 className="hoterunonamae">G2D</h3>
                    </div>
                    <div className="heyabanngou">
                        <p className="mojinosaizu">名前</p>
                        <h3 className="hoterunonamae">中村優馬</h3>
                    </div>
                    <div>
                        <p>メンバー</p>
                        <h3 className="mennba-nowaku">
                            ・メンバーの名前 ・メンバーの名前
                        </h3>
                    </div>
                </section>
            </main>
        );
    }
    function Day3() {
        return (
            <main className="haikei">
                <section>
                    <p>ホテル</p>
                    <h3 className="hoterunonamae">〇〇ホテル</h3>
                </section>
                <section>
                    <p>部屋</p>
                    <div className="heyabanngou">
                        <h3 className="hoterunonamae">333</h3>
                        <p className="mojinosaizu">号室</p>
                    </div>
                </section>
                <section>
                    <div className="heyabanngou">
                        <p className="mojinosaizu">クラス</p>
                        <h3 className="hoterunonamae">G2D</h3>
                    </div>
                    <div className="heyabanngou">
                        <p className="mojinosaizu">名前</p>
                        <h3 className="hoterunonamae">中村優馬</h3>
                    </div>
                    <div>
                        <p>メンバー</p>
                        <h3 className="mennba-nowaku">
                            ・メンバーの名前 
                            ・メンバーの名前
                        </h3>
                    </div>
                </section>
            </main>
        );
    }
    return (
        <body className="botan">
            <header>
                <div>
                    <button value={0} onClick={() => ChangeDay(0)}>
                        １日目
                    </button>
                    <button value={1} onClick={() => ChangeDay(1)}>
                        ２日目
                    </button>
                    <button value={2} onClick={() => ChangeDay(2)}>
                        ３日目
                    </button>
                </div>
            </header>
            {DayList[clickedDay]}
        </body>
    );
}

export default RoomHTML;
