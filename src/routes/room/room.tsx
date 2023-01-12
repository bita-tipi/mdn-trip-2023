import React, { useState } from "react";
import _ from "lodash";
import "./room.css";

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

    const textList = ["１日目", "二日目", "三日目"];
    const DayList = [Day1(), Day2(), Day3()];
    const [clickedDay, updateClickedDay] = useState(0);

    function ChangeDay(index: number) {
        updateClickedDay(index);
    }

    function Day1() {
        return (
            <main>
                <section>
                    <p>ホテル</p>
                    <h3 className="hoterunonamae">〇〇ホテル</h3>
                </section>
                <section>
                    <p>部屋</p>
                    <div className="heyabanngou">
                        <h3 className="hoterunonamae">111</h3>
                        <p>号室</p>
                    </div>
                </section>
                <section>
                    <div className="heyabanngou">
                        <p>クラス</p>
                        <h3 className="hoterunonamae">G2D</h3>
                    </div>
                    <div className="heyabanngou">
                        <p>名前</p>
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
    function Day2() {
        return (
            <main>
                <section>
                    <p>ホテル</p>
                    <h3 className="hoterunonamae">〇〇ホテル</h3>
                </section>
                <section>
                    <p>部屋</p>
                    <div className="heyabanngou">
                        <h3 className="hoterunonamae">222</h3>
                        <p>号室</p>
                    </div>
                </section>
                <section>
                    <div className="heyabanngou">
                        <p>クラス</p>
                        <h3 className="hoterunonamae">G2D</h3>
                    </div>
                    <div className="heyabanngou">
                        <p>名前</p>
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
            <main>
                <section>
                    <p>ホテル</p>
                    <h3 className="hoterunonamae">〇〇ホテル</h3>
                </section>
                <section>
                    <p>部屋</p>
                    <div className="heyabanngou">
                        <h3 className="hoterunonamae">333</h3>
                        <p>号室</p>
                    </div>
                </section>
                <section>
                    <div className="heyabanngou">
                        <p>クラス</p>
                        <h3 className="hoterunonamae">G2D</h3>
                    </div>
                    <div className="heyabanngou">
                        <p>名前</p>
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
    return (
        <body>
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
