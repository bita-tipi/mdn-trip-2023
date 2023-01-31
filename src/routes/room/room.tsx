import React, { useState, useEffect } from "react";
import _ from "lodash";
import "./room.css";
import { getImg } from "model/assets";
import {
    KEYS,
    setItem,
    getItem,
    removeItem,
    getName,
    getNumber,
    getClass,
} from "assets/localstorage";
import { useLocation } from "react-router-dom";

export type MapProps = {
    DayDateIndex: number;
};

const sennsu = getImg("扇子.svg");
const lantern = getImg("redlantern.svg");
const Redlantern = getImg("lantern.svg");
const torii = getImg("鳥居.svg");
const turu = getImg("turu.svg");
const next = getImg("矢印.svg");

function RoomHTML() {
    const [Number, setNumber] = useState("000");
    const [Class, setClass] = useState("G2A");
    const [Name, setName] = useState("名電太郎");

    const [label, setLabel] = useState("");
    const [localStorageIndex, upDataLocalStorageIndex] = useState(0);

    const { state } = useLocation() as { state: MapProps | undefined };
    const DayDateIndex = state?.DayDateIndex;

    useEffect(() => {
        if (localStorageIndex == 1) {
            setClick();
            getClick();
        } else {
            getClick();
            setClick();
        }
        upDataLocalStorageIndex(1);
    }, [Name, Class]);

    const updateLabel = () => {
        setLabel(getNumber(KEYS.NUMBER));
        setLabel(getName(KEYS.NAME));
        setLabel(getClass(KEYS.CLASS));
    };

    const handleChange = (e: any) => {
        setNumber(e.target.value);
    };
    const handleChange3 = (e: any) => {
        setName(e.target.value);
    };
    const handleChange2 = (e: any) => {
        setClass(e.target.value);
    };

    const removeClick = () => {
        // LocalStorageの値を削除する
        removeItem(KEYS.SAMPLE_TEXT);
        updateLabel();
    };

    const setClick = () => {
        // テキストボックスの値をLocalStorageに保存する
        setItem(KEYS.NUMBER, Number);
        setItem(KEYS.CLASS, Class);
        setItem(KEYS.NAME, Name);
        updateLabel();
    };

    const getClick = () => {
        // LocalStorageの値をテキストボックスに入れる
        Number = getNumber(KEYS.NUMBER)
        name = getItem(KEYS.NAME);
        Class = getClass(KEYS.CLASS);
        updateLabel();
    };

    const [clickedDay, updateClickedDay] = useState(DayDateIndex ?? 0);
    const HotelList = ["ヒルトン広島","舞子ビラ","リーベルホテル"]

    function ChangeDay(index: number) {
        if(index >= 0){
            if(index < 3){
                updateClickedDay(index);
            }
        }
        else{}
    }

    return <body className="roomBackGround">
        <div className="roomMain">
                <div className="roomOneBox">
                    <div className="roomLeftAreaFirst">
                        <img src={lantern} className="roomLantern"></img>
                        <div className="roomBar"></div>
                    </div>
                    <div className="roomRightArea">
                        <div className="roomDayArea">
                        <img
                                className="roomNext2"
                                src={next}
                                onClick={() => ChangeDay(clickedDay-1)}
                            />
                            <p className="roomDay">{clickedDay+1}日目</p>
                            <img
                                className="roomNext"
                                src={next}
                                onClick={() => ChangeDay(clickedDay+1)}
                            />
                        </div>
                        <div>
                            <div className="roomBox">
                                <img className="roomTorii" src={torii}></img>
                                <p className="roomText">ホテル</p>
                            </div>
                            <p className="roomHotelName">{HotelList[clickedDay]}</p>
                        </div>
                        <div>
                            <div className="roomBox">
                                <img src={sennsu} className="roomSennsu"></img>
                                <p className="roomText">部屋</p>
                            </div>
                            <div className="roomNumberSelect">
                                <input
                                    className="roomNumber"
                                    type="text"
                                    value={Number}
                                    onChange={handleChange}
                                />
                                <p className="roomText">号室</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="roomTwoBox">
                    <div className="roomLeftAreaSecond">
                        <img
                            src={Redlantern}
                            className="roomLanternSecond"
                        ></img>
                        <div className="roomBar"></div>
                    </div>
                    <div>
                        <div className="roomRightBox">
                            <div className="roomClass">
                                <p className="roomTextSecond">クラス</p>
                                <input
                                    className="roomClassSecond2"
                                    type="text"
                                    value={Class}
                                    onChange={handleChange2}
                                />
                            </div>
                            <div className="roomClass">
                                <p className="roomTextSecond">名前</p>
                                <input
                                    className="roomClassSecond"
                                    type="text"
                                    value={Name}
                                    onChange={handleChange3}
                                />
                            </div>
                            <div className="roomNameArea">
                                <div className="roomMemberTitle">
                                    <img src={turu} className="roomTuru" />
                                    <p>メンバー</p>
                                </div>
                                <div className="roomMemberArea">
                                    <p className="roomFriendsName">おれ</p>
                                    <p className="roomFriendsName">わたし</p>
                                    <p className="roomFriendsName">わし</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </body>;
}

export default RoomHTML;
