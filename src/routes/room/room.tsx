import React, { useState, useEffect } from "react";
import _ from "lodash";
import "./room.css";
import { getImg } from "model/assets";
import { KEYS, setItem, getItem, removeItem } from "assets/localstorage";
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
    const [roomNumber, setNumber] = useState("000");
    const [roomClassName, setClass] = useState("G2A");
    const [roomUserName, setName] = useState("名電太郎");

    const { state } = useLocation() as { state: MapProps | undefined };
    const DayDateIndex = state?.DayDateIndex;

    useEffect(() => {
        getClick();
    }, []);

    const handleChange = (e: any) => {
        setItem(KEYS.NUMBER, e.target.value);
        setNumber(e.target.value);
    };
    const handleChange2 = (e: any) => {
        setItem(KEYS.CLASS, e.target.value);
        setClass(e.target.value);
    };
    const handleChange3 = (e: any) => {
        setItem(KEYS.NAME, e.target.value);
        setName(e.target.value);
    };

    const getClick = () => {
        // LocalStorageの値をテキストボックスに入れる
        setNumber(getItem(KEYS.NUMBER));
        setName(getItem(KEYS.NAME));
        setClass(getItem(KEYS.CLASS));
    };

    const [clickedDay, updateClickedDay] = useState(DayDateIndex ?? 0);
    const HotelList = ["ヒルトン広島", "舞子ビラ", "リーベルホテル"];

    function ChangeDay(index: number) {
        if (index >= 0) {
            if (index < 3) {
                updateClickedDay(index);
            }
        } else {
        }
    }

    return (
        <div className="roomMain">
            <div className="roomDayArea">
                <img src={lantern} className="roomLantern" />
                <img
                    className="roomNext2"
                    src={next}
                    onClick={() => ChangeDay(clickedDay - 1)}
                />
                <p className="roomDay">{clickedDay + 1}日目</p>
                <img
                    className="roomNext"
                    src={next}
                    onClick={() => ChangeDay(clickedDay + 1)}
                />
            </div>
            <div className="roomBox">
                <div className="roomLine"></div>
                <div>
                    <div>
                        <div className="roomTextArea">
                            <img src={torii} className="roomTorii" />
                            <p>ホテル</p>
                        </div>
                        <p className="roomHotelName">{HotelList[clickedDay]}</p>
                    </div>
                    <div>
                        <div className="roomTextArea">
                            <img src={sennsu} className="roomSensu" />
                            <p>部屋</p>
                        </div>
                        <div className="roomNumberArea">
                            <input
                                className="roomNumber"
                                type="number"
                                value={roomNumber}
                                onChange={handleChange}
                            />
                            <p>号室</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="roomTitle">
                <img src={Redlantern} className="roomLantern2" />
            </div>
            <div className="roomBox">
                <div className="roomLine"></div>
                <div>
                    <div className="roomClassArea">
                        <p>クラス</p>
                        <input
                            className="roomClass"
                            type="text"
                            value={roomClassName}
                            onChange={handleChange2}
                        />
                    </div>
                    <div className="roomNameArea">
                        <p>名前</p>
                        <input
                            className="roomUserName"
                            type="text"
                            value={roomUserName}
                            onChange={handleChange3}
                        />
                    </div>
                    <div className="roomMemberTitle">
                        <img src={turu} className="roomTuru" />
                        <p>メンバー</p>
                    </div>
                    <div className="roomMemberArea">
                        <p>おれ</p>
                        <p>おまえ</p>
                        <p>わたし</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomHTML;
