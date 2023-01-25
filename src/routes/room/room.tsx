import React, { useState,useEffect } from "react";
import _ from "lodash";
import "./room.css";
import { getImg } from "model/assets";
import { KEYS, setItem, getItem, removeItem,getName,getNumber,getClass } from "assets/localstorage";


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
useEffect(() => {
    if (localStorageIndex == 1) {
      setClick();
      getClick();
    } else {
      getClick();
      setClick();
    }
    upDataLocalStorageIndex(1);
  }, [Name,Class]);

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
    setItem(KEYS.NUMBER,Number);
    setItem(KEYS.CLASS,Class);
    setItem(KEYS.NAME,Name);
    updateLabel();
  };

  const getClick = () => {
    // LocalStorageの値をテキストボックスに入れる
    setNumber(getNumber(KEYS.NUMBER));
    setName(getName(KEYS.NAME));
    setClass(getClass(KEYS.CLASS));
    updateLabel();
  };

    const DayList = [Day1(), Day2(), Day3()];
    const [clickedDay, updateClickedDay] = useState(0);

    function ChangeDay(index: number) {
        updateClickedDay(index);
    }

    function Day1() {
        return (
            <div className="roomMain">

            <div className="roomOneBox">
                <div className="roomLeftAreaFirst">
                    <img src={lantern} className="roomLantern"></img>
                    <div className="roomBar"></div>
                </div>
                <div className="roomRightArea">
                    <div className="roomDayArea">
                        <p className="roomDay">一日目</p>
                        <img className="roomNext" src={next} onClick={() => ChangeDay(1)}/>
                    </div>
                    <div>
                        <div className="roomBox">
                            <img className="roomTorii" src={torii}></img>
                            <p className="roomText">ホテル</p>
                        </div>
                        <p className="roomHotelName">ヒルトン広島</p>
                    </div>
                    <div>
                        <div className="roomBox">
                            <img src={sennsu} className="roomSennsu"></img>
                            <p className="roomText">部屋</p>
                        </div>
                        <div className="roomNumberSelect">
                            <input  className="roomNumber" type="text" value={Number} onChange={handleChange} />
                            <p className="roomText">号室</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="roomTwoBox">
                <div className="roomLeftAreaSecond">
                    <img src={Redlantern} className="roomLanternSecond"></img>
                    <div className="roomBar"></div>
                </div>
                <div>
                    <div className="roomRightBox">
                        <div className="roomClass">
                            <p className="roomTextSecond">クラス</p>
                            <input  className="roomClassSecond2" type="text" value={Class} onChange={handleChange2} />
                        </div>
                        <div className="roomClass">
                            <p className="roomTextSecond">名前</p>
                            <input  className="roomClassSecond" type="text" value={Name} onChange={handleChange3} />
                        </div>
                            <div className="roomNameArea">
                                <div className="roomMemberTitle">
                                    <img src={turu} className="roomTuru"/>
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
        );
    }
    function Day2() {
        return (
            <div className="roomMain">

                <div className="roomOneBox">
                    <div className="roomLeftArea">
                        <img src={lantern} className="roomLantern"></img>
                        <div className="roomBarSecond"></div>
                    </div>
                    <div className="roomRightArea">
                        <div className="roomDayArea">
                            <img className="roomNext2" src={next} onClick={() => ChangeDay(0)}/>
                            <p className="roomDay">二日目</p>
                            <img className="roomNext" src={next} onClick={() => ChangeDay(2)}/>
                        </div>
                        <div>
                            <div className="roomBox">
                                <img className="roomTorii" src={torii}></img>
                                <p className="roomText">ホテル</p>
                            </div>
                            <p className="roomHotelName">ホテル舞子ビラ</p>
                        </div>
                        <div>
                            <div className="roomBox">
                                <img src={sennsu} className="roomSennsu"></img>
                                <p className="roomText">部屋</p>
                            </div>
                            <div className="roomNumberSelect">
                                <p className="roomNumber">805</p>
                                <p className="roomText">号室</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="roomTwoBox">
                    <div className="roomLeftAreaSecond">
                        <img src={Redlantern} className="roomLanternSecond"></img>
                        <div className="roomBar"></div>
                    </div>
                    <div>
                        <div className="roomRightBox">
                            <div className="roomClass">
                                <p className="roomTextSecond">クラス</p>
                                <p className="roomClassSecond">G2D</p>
                            </div>
                            <div className="roomClass">
                                <p className="roomTextSecond">名前</p>
                                <p className="roomClassSecond">深見吉良</p>
                            </div>
                                <div className="roomNameArea">
                                    <div className="roomMemberTitle">
                                        <img src={turu} className="roomTuru"/>
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

        );
    }
    function Day3() {
        return (
            <div className="roomMain">

            <div className="roomOneBox">
                <div className="roomLeftAreaFirst">
                    <img src={lantern} className="roomLantern"></img>
                    <div className="roomBar"></div>
                </div>
                <div className="roomRightArea">
                    <div className="roomDayArea">
                        <img className="roomNext2" src={next} onClick={() => ChangeDay(1)}/>
                        <p className="roomDay">三日目</p>
                    </div>
                    <div>
                        <div className="roomBox">
                            <img className="roomTorii" src={torii}></img>
                            <p className="roomText">ホテル</p>
                        </div>
                        <p className="roomHotelName">リーベルホテル</p>
                    </div>
                    <div>
                        <div className="roomBox">
                            <img src={sennsu} className="roomSennsu"></img>
                            <p className="roomText">部屋</p>
                        </div>
                        <div className="roomNumberSelect">
                            <p className="roomNumber">805</p>
                            <p className="roomText">号室</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="roomTwoBox">
                <div className="roomLeftAreaSecond">
                    <img src={Redlantern} className="roomLanternSecond"></img>
                    <div className="roomBar"></div>
                </div>
                <div>
                    <div className="roomRightBox">
                        <div className="roomClass">
                            <p className="roomTextSecond">クラス</p>
                            <p className="roomClassSecond">G2D</p>
                        </div>
                        <div className="roomClass">
                            <p className="roomTextSecond">名前</p>
                            <p className="roomClassSecond">深見吉良</p>
                        </div>
                            <div className="roomNameArea">
                                <div className="roomMemberTitle">
                                    <img src={turu} className="roomTuru"/>
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
        );
    }
    return (
        <body className="roomBackGround">
            {DayList[clickedDay]}
        </body>
    );
}

export default RoomHTML;
