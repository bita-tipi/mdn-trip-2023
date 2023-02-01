import React, { useState, useEffect } from "react";
import _ from "lodash";
import "./room.css";
import { getImg } from "model/assets";
import { useLocation } from "react-router-dom";
import { UserData, HotelData, localStorageKey, LocalStorage } from "assets/storage_test"

export type MapProps = {
    DayDateIndex: number;
};



const sennsu = getImg("扇子.svg");
const lantern = getImg("redlantern.svg");
const Redlantern = getImg("lantern.svg");
const torii = getImg("鳥居.svg");
const turu = getImg("turu.svg");
const next = getImg("矢印.svg");
const userDataRepo = new LocalStorage<UserData>(localStorageKey.userData);
const hotelDataRepo = new LocalStorage<HotelData[]>(localStorageKey.hotelData);




function RoomHTML() {
    const [userData, setUserData] = useState<UserData>(
        // initの宣言としてローカルストレージから持ってくるのはアリよりのアリ (useEffect 要らなくなる)
        userDataRepo.get() || { className: "", personName: "" },
    );
    const [hotelData, setHotelData] = useState<HotelData[]>(
        hotelDataRepo.get() || [],
    );

    function getHotelData(
        key: keyof HotelData, // "roomNumber" か "members" かどっちなんだい
        day: number,
        memberIndex?: number,
    ): string {
        switch (key) {
            case "roomNumber": {
                return hotelData[day]?.roomNumber?.toString() ?? "";
            }
            case "members": {
                if (memberIndex === undefined) return "";
                if (
                    typeof hotelData[day] === "undefined" ||
                    typeof hotelData[day].members === "undefined"
                ) {
                    return "";
                }
                return hotelData[day].members[memberIndex] ?? "";
            }
        }
    }

    // userDataに関してのupdate
    function updateUserData(
        event: React.ChangeEvent<HTMLInputElement>,
        key: keyof UserData, // "className" か "personName" かどっちなんだい
    ) {
        const newUserData = { ...userData, [key]: event.target.value };
        setUserData(newUserData);
        userDataRepo.set(newUserData);
    }

    // hotelDataに関してのupdate
    function updateHotelData(
        event: React.ChangeEvent<HTMLInputElement>,
        key: keyof HotelData, // "roomNumber" か "members" かどっちなんだい
        day: number, // 何日目？
        memberIndex?: number, // 何人目？ (任意)
    ) {
        const value = event.target.value;

        const newHotelData = [...hotelData]; // いったんclone

        switch (key) {
            case "roomNumber": {
                // roomNumberの場合 -> valueをnumberへ変換
                newHotelData[day] = {
                    ...newHotelData[day],
                    roomNumber: value as unknown as number,
                };
                break;
            }
            case "members": {
                // assert
                if (memberIndex === undefined) {
                    throw Error("memberIndex is undefined");
                }
                // membersの場合 -> valueをstringへ変換して, そのmemberIndex番目に入れる
                const newMembers = [...(newHotelData[day]?.members || [])];
                newMembers[memberIndex] = value as unknown as string;

                newHotelData[day] = {
                    ...newHotelData[day],
                    members: newMembers,
                };
            }
        }
        setHotelData(newHotelData);
        hotelDataRepo.set(newHotelData);
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
                                type="number"
                                className="roomNumber"
                                value={getHotelData("roomNumber", 0)}
                                placeholder="部屋番号"
                                onChange={(event) => updateHotelData(event, "roomNumber", 0)}
                            />) : (<></>)}
                            {clickedDay === 1 ? (<input
                                type="number"
                                className="roomNumber"
                                value={getHotelData("roomNumber", 1)}
                                placeholder="部屋番号"
                                onChange={(event) => updateHotelData(event, "roomNumber", 1)}
                            />) : (<></>)}
                            {clickedDay === 2 ? (<input
                                type="number"
                                className="roomNumber"
                                value={getHotelData("roomNumber", 2)}
                                placeholder="部屋番号"
                                onChange={(event) => updateHotelData(event, "roomNumber", 2)}
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
                            value={userData.className}
                            placeholder="クラス名"
                            onChange={(event) => updateUserData(event, "className")}
                        />
                    </div>
                    <div className="roomNameArea">
                        <p>名前</p>
                        <input
                            className="roomUserName"
                            type="text"
                            value={userData.personName}
                            placeholder="お名前"
                            onChange={(event) => updateUserData(event, "personName")}
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
                                value={getHotelData("members", 0, 0)}
                                placeholder="お友達"
                                onChange={(event) => updateHotelData(event, "members", 0, 0)}
                            />) : (<></>)}
                            {clickedDay === 1 ? (<input
                                className="roomMember"
                                type="text"
                                value={getHotelData("members", 1, 0)}
                                placeholder="お友達"
                                onChange={(event) => updateHotelData(event, "members", 1, 0)}
                            />) : (<></>)}
                            {clickedDay === 2 ? (<input
                                className="roomMember"
                                type="text"
                                value={getHotelData("members", 2, 0)}
                                placeholder="お友達"
                                onChange={(event) => updateHotelData(event, "members", 2, 0)}
                            />) : (<></>)}
                        </div>
                        <div className="roomMemberDay">
                            <div className="roomPoint"></div>
                            {clickedDay === 0 ? (<input
                                className="roomMember"
                                type="text"
                                value={getHotelData("members", 0, 1)}
                                placeholder="お友達"
                                onChange={(event) => updateHotelData(event, "members", 0, 1)}
                            />) : (<></>)}
                            {clickedDay === 1 ? (<input
                                className="roomMember"
                                type="text"
                                value={getHotelData("members", 1, 1)}
                                placeholder="お友達"
                                onChange={(event) => updateHotelData(event, "members", 1, 1)}
                            />) : (<></>)}
                            {clickedDay === 2 ? (<input
                                className="roomMember"
                                type="text"
                                value={getHotelData("members", 2, 1)}
                                placeholder="お友達"
                                onChange={(event) => updateHotelData(event, "members", 2, 1)}
                            />) : (<></>)}
                        </div>
                        <div className="roomMemberDay">
                            <div className="roomPoint"></div>
                            {clickedDay === 0 ? (<input
                                className="roomMember"
                                type="text"
                                value={getHotelData("members", 0, 2)}
                                placeholder="お友達"
                                onChange={(event) => updateHotelData(event, "members", 0, 2)}
                            />) : (<></>)}
                            {clickedDay === 1 ? (<input
                                className="roomMember"
                                type="text"
                                value={getHotelData("members", 1, 2)}
                                placeholder="お友達"
                                onChange={(event) => updateHotelData(event, "members", 1, 2)}
                            />) : (<></>)}
                            {clickedDay === 2 ? (<input
                                className="roomMember"
                                type="text"
                                value={getHotelData("members", 2, 2)}
                                placeholder="お友達"
                                onChange={(event) => updateHotelData(event, "members", 2, 2)}
                            />) : (<></>)}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomHTML;
