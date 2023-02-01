import React, { useState, useEffect } from "react";
import _ from "lodash";
import "./room.css";
import { getImg } from "model/assets";
import { HotelData } from "assets/storage";
import { useLocation } from "react-router-dom";

export type MapProps = {
    DayDateIndex: number;
};

class HotelDataRepo {
    // タイプミスが怖いから, ここで1回だけ定義しておく
    private key = "hotel_data";

    public get(): HotelData | undefined {
        const data = localStorage.getItem(this.key);
        if (data) {
            return JSON.parse(data) as HotelData;
        }
    }

    public set(data: HotelData) {
        localStorage.setItem(this.key, JSON.stringify(data));
    }

    public clear() {
        localStorage.removeItem(this.key);
    }
}

type HotelDataKey = keyof HotelData; // "roomNumber" | "className" | "personName"

const sennsu = getImg("扇子.svg");
const lantern = getImg("redlantern.svg");
const Redlantern = getImg("lantern.svg");
const torii = getImg("鳥居.svg");
const turu = getImg("turu.svg");
const next = getImg("矢印.svg");


function RoomHTML() {

    const [hotelData, setHotelData] = useState<HotelData>();

    useEffect(() => {
        // ここで localStorage からデータを取得して、
        const data = new HotelDataRepo().get();
        // undefined チェック (初めてページを開いたときも undefined になるね)
        if (!data) return;

        // それぞれの値が undefined でなければ、state にセットする
        if (data.roomNumberDay1) {
            setHotelData(data);
        } else {
            console.error("[x] data in `hotel_data` of localStorage is invalid");
        }

    }, []);

    function handleChanged(
        // key: 更新したいのは, "roomNumber" or "className" or "personName" のどれですか
        key: HotelDataKey,
        event: React.ChangeEvent<HTMLInputElement>,
    ) {
        const value = event.target.value;
        const newHotelData = { ...hotelData, [key]: value };
        setHotelData(newHotelData);
        new HotelDataRepo().set(newHotelData);
    }




    const { state } = useLocation() as { state: MapProps | undefined };
    const DayDateIndex = state?.DayDateIndex;

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
                            {clickedDay === 0 ? (<input
                                className="roomNumber"
                                type="number"
                                value={hotelData?.roomNumberDay1 ?? ""}
                                placeholder="000"
                                onChange={(event) => handleChanged("roomNumberDay1", event)}
                            />) : (<></>)}
                            {clickedDay === 1 ? (
                                <input
                                    className="roomNumber"
                                    type="number"
                                    value={hotelData?.roomNumberDay2 ?? ""}
                                    placeholder="000"
                                    onChange={(event) => handleChanged("roomNumberDay2", event)}
                                />) : (<></>)}
                            {clickedDay === 2 ? (
                                <input
                                    className="roomNumber"
                                    type="number"
                                    value={hotelData?.roomNumberDay3 ?? ""}
                                    placeholder="000"
                                    onChange={(event) => handleChanged("roomNumberDay3", event)}
                                />) : (<></>)}
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
                            value={hotelData?.className ?? ""}
                            placeholder="G2A"
                            onChange={(event) => handleChanged("className", event)}
                        />
                    </div>
                    <div className="roomNameArea">
                        <p>名前</p>
                        <input
                            className="roomUserName"
                            type="text"
                            value={hotelData?.personName ?? ""}
                            placeholder="お名前"
                            onChange={(event) => handleChanged("personName", event)}
                        />
                    </div>
                    <div className="roomMemberTitle">
                        <img src={turu} className="roomTuru" />
                        <p>メンバー</p>
                    </div>
                    <div className="roomMemberArea">
                        <div className="roomMemberDay">
                            <div className="roomPoint"></div>
                            {clickedDay === 0 ? (<input
                                className="roomMember"
                                type="text"
                                value={hotelData?.member1Day1 ?? ""}
                                placeholder="友達の名前"
                                onChange={(event) => handleChanged("member1Day1", event)}
                            />) : (<></>)}
                            {clickedDay === 1 ? (<input
                                className="roomMember"
                                type="text"
                                value={hotelData?.member1Day2 ?? ""}
                                placeholder="友達の名前"
                                onChange={(event) => handleChanged("member1Day2", event)}
                            />) : (<></>)}
                            {clickedDay === 2 ? (<input
                                className="roomMember"
                                type="text"
                                value={hotelData?.member1Day3 ?? ""}
                                placeholder="友達の名前"
                                onChange={(event) => handleChanged("member1Day3", event)}
                            />) : (<></>)}
                        </div>

                        <div className="roomMemberDay">
                            <div className="roomPoint"></div>
                            {clickedDay === 0 ? (<input
                                className="roomMember"
                                type="text"
                                value={hotelData?.member2Day1 ?? ""}
                                placeholder="友達の名前"
                                onChange={(event) => handleChanged("member2Day1", event)}
                            />) : (<></>)}
                            {clickedDay === 1 ? (<input
                                className="roomMember"
                                type="text"
                                value={hotelData?.member2Day2 ?? ""}
                                placeholder="友達の名前"
                                onChange={(event) => handleChanged("member2Day2", event)}
                            />) : (<></>)}
                            {clickedDay === 2 ? (<input
                                className="roomMember"
                                type="text"
                                value={hotelData?.member2Day3 ?? ""}
                                placeholder="友達の名前"
                                onChange={(event) => handleChanged("member2Day3", event)}
                            />) : (<></>)}
                        </div>
                        <div className="roomMemberDay">
                            <div className="roomPoint"></div>
                            {clickedDay === 0 ? (<input
                                className="roomMember"
                                type="text"
                                value={hotelData?.member3Day1 ?? ""}
                                placeholder="友達の名前"
                                onChange={(event) => handleChanged("member3Day1", event)}
                            />) : (<></>)}
                            {clickedDay === 1 ? (<input
                                className="roomMember"
                                type="text"
                                value={hotelData?.member3Day2 ?? ""}
                                placeholder="友達の名前"
                                onChange={(event) => handleChanged("member3Day2", event)}
                            />) : (<></>)}
                            {clickedDay === 2 ? (<input
                                className="roomMember"
                                type="text"
                                value={hotelData?.member3Day3 ?? ""}
                                placeholder="友達の名前"
                                onChange={(event) => handleChanged("member3Day3", event)}
                            />) : (<></>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomHTML;
