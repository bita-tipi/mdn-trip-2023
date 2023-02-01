import "../Day4.css";
import _ from "lodash";
import React, { useState } from "react";
import { getImg } from "model/assets";
import { Link, useNavigate } from "react-router-dom";

const arashiyama = getImg("嵐山image.png");
const triangle = getImg("triangle.svg");
const triangleWhite = getImg("triangle-white.svg");
const kitano = getImg("北野天満宮.png");
const ninen = getImg("二年坂.png");
const kyoto = getImg("京都駅.png");
const nagoya = getImg("nagoya.png");
const nishiki = getImg("錦市場.png");
const lunchi = getImg("ランチセット.svg");

export function ScheduleDay4() {
    const navigate = useNavigate();
    const [isListOpenDays, updateIsListOpenDays] = useState([
        false,
        false,
        false,
    ]);

    function ListSelectDays(index: number) {
        const copiedList = _.cloneDeep(isListOpenDays);
        copiedList[index] = !copiedList[index];
        updateIsListOpenDays(copiedList);
    }

    return (
        <main className="Day-main">
            <div className="Day-Boxbreak">
                <p>朝食の30分前</p>
                <p className="Day-underBox">起床</p>
            </div>
            <div className="Day-BoxBreak">
                <p>06:45</p>
                <div className="Day-morning2">
                    <p className="Day-underLineRed2">朝食</p>
                    <p>3階 Join</p>
                    <div className="Day-timeList">
                        <div className="Day-timeListTime">
                            <p className="Day-ClassMargin4">06:45</p>
                            <p className="Day-ClassMargin4">06:55</p>
                            <p className="Day-ClassMargin4">07:05</p>
                        </div>
                        <div>
                            <p className="Day-ClassMargin3">
                                G2H,G2I,G2J<br></br>G2F,G2G,G2K
                            </p>
                            <p className="Day-ClassMargin3">
                                J2A,J2B<br></br>G2D,G2E
                            </p>
                            <p className="Day-ClassMargin3">
                                T2A,T2B,T2C<br></br>G2A,G2B,G2C
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Day-box">
                <p className="Day-time">08:30</p>
                <div className="Day-busArea">
                    <h5 className="Day-BusLine">バス</h5>
                    <div className="Day-leftLineArea">
                        <div className="Day-leftLine"></div>
                        <div className="Day-textArea">
                            <p className="Day-textName2">
                                リーベルホテルアット
                            </p>
                            <p className="Day-textName">
                                ユニバーサルスタジオ<br></br>ジャパン
                            </p>
                            <h6 className="">
                                Liber Hotel At Universal Studio Japan
                            </h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Day-routeIf" onClick={() => ListSelectDays(0)}>
                {isListOpenDays[0] ? (
                    <img className="Day-triangle2" src={triangleWhite} />
                ) : (
                    <img className="Day-triangle" src={triangleWhite} />
                )}
                <h2 className="Day-ifTitle">1.北野天満宮/錦市場ルート</h2>
            </div>
            {isListOpenDays[0] ? (
                <div className="Day-pulldown2">
                    <img className="Day-triangle3" src={triangle}></img>
                    <p>
                        1班 1~3号車  2班 1~4号車
                    </p>
                    <div className="Day-box">
                        <p className="Day-timeSmall">10:15</p>
                        <div className="Day-leftLineAreaSmall">
                            <div className="Day-leftLine"></div>
                            <div className="Day-textArea">
                                <p className="Day-backSchedule">北野天満宮</p>
                                <h6 className="Day-backSchedule2">
                                    Kitano Tennmannguu
                                </h6>
                            </div>
                        </div>
                    </div>
                    <img
                        className="Day-picture"
                        src={kitano}
                        onClick={() =>
                            navigate("/map", {
                                state: { MapDateIndex: 4 },
                            })
                        }
                    />

                    <div className="Day-box">
                        <p className="Day-timeSmall">11:05</p>
                        <p className="Day-underBox">集合完了</p>
                    </div>

                    <div className="Day-box">
                        <div className="Day-timeBarArea">
                            <p className="Day-timeSmallBar">11:10</p>
                            <div className="Day-timeBar"></div>
                            <p className="Day-timeSmallBar2">11:30</p>
                        </div>
                        <div className="Day-busArea2">
                            <div className="Day-leftLineArea2">
                                <div className="Day-LeftLineBig"></div>
                                <div className="Day-textArea">
                                    <p className="Day-TextBig TextSmall">
                                        北野天満宮
                                    </p>
                                    <h6 className="Day-TextBigSub">Kitano</h6>
                                </div>
                            </div>
                        </div>
                        <img className="Day-triangle4" src={triangle}></img>
                        <div className="Day-leftLineArea2">
                            <div className="Day-LeftLineBig"></div>
                            <div className="Day-textArea">
                                <p className="Day-TextBig">錦市場</p>
                                <h6 className="Day-TextBigSub">Nisiki shijo</h6>
                            </div>
                        </div>
                    </div>

                    <img className="Day-picture" src={nishiki} />
                    <div className="Day-lunchBox">
                        <img src={lunchi} className="Day-lunchSet" />
                        <p className="Day-lunch">昼食は各自</p>
                    </div>
                    <div className="Day-box">
                        <p className="Day-time">14:05</p>
                        <div className="Day-busArea">
                            <h5 className="Day-BusLine">バス</h5>
                            <div className="Day-leftLineArea">
                                <div className="Day-leftLine"></div>
                                <div className="Day-textArea">
                                    <p className="Day-backSchedule">錦市場</p>
                                    <h6 className="Day-backSchedule2">
                                        Nishiki Itiba
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
              <></>
            )}
            <div className="Day-routeIf" onClick={() => ListSelectDays(1)}>
                {isListOpenDays[1] ? (
                    <img className="Day-triangle2" src={triangleWhite} />
                ) : (
                    <img className="Day-triangle" src={triangleWhite} />
                )}
                <h2 className="Day-ifTitle">2.二年坂/清水寺</h2>
            </div>
            {isListOpenDays[1] ? (
                <div className="Day-pulldown2">
                    <img className="Day-triangle3" src={triangle}></img>
                    <div className="Day-box">
                        <p className="Day-timeSmall">10:00</p>
                        <div className="Day-leftLineAreaSmall">
                            <div className="Day-leftLine"></div>
                            <div className="Day-textArea">
                                <p className="Day-backScheduleBig">円山公園</p>
                                <h6 className="Day-backSchedule2Big">
                                    Maruyama Park
                                </h6>
                            </div>
                        </div>
                    </div>
                    <img
                        className="Day-picture"
                        src={ninen}
                        onClick={() =>
                            navigate("/map", {
                                state: { MapDateIndex: 3 },
                            })
                        }
                    />
                    <div className="Day-lunchBox">
                        <img src={lunchi} className="Day-lunchSet" />
                        <p className="Day-lunch">昼食は各自</p>
                    </div>
                    <div className="Day-box">
                        <p className="Day-timeSmall">14:05</p>
                        <div className="Day-busArea">
                            <h5 className="Day-BusLineSmall">バス</h5>
                            <div className="Day-leftLineArea">
                                <div className="Day-leftLine2"></div>
                                <div className="Day-textArea">
                                    <p className="Day-backScheduleBig2">
                                        清水駐車場
                                    </p>
                                    <h6 className="Day-backSchedule2Big">
                                        Kiyomizu Parking
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
            <></>
            )}
            <div className="Day-routeIf" onClick={() => ListSelectDays(2)}>
                {isListOpenDays[2] ? (
                    <img className="Day-triangle2" src={triangleWhite} />
                ) : (
                    <img className="Day-triangle" src={triangleWhite} />
                )}
                <h2 className="Day-ifTitle">3.嵐山ルート</h2>
            </div>
            {isListOpenDays[2] ? (
                <div className="Day-pulldown">
                    <img className="Day-triangle3" src={triangle} />
                    <div className="Day-box">
                        <p className="Day-timeSmall">10:00</p>
                        <div className="Day-leftLineAreaSmall">
                            <div className="Day-leftLine"></div>
                            <div className="Day-textArea">
                                <p className="Day-backScheduleBig">嵐山</p>
                                <h6 className="Day-backSchedule2">
                                    Arashiyama
                                </h6>
                            </div>
                        </div>
                    </div>
                    <img
                        className="Day-picture"
                        src={arashiyama}
                        onClick={() =>
                            navigate("/map", {
                                state: { MapDateIndex: 5 },
                            })
                        }
                    />
                    <div className="Day-lunchBox">
                        <img src={lunchi} className="Day-lunchSet" />
                        <p className="Day-lunch">昼食は各自</p>
                    </div>
                    <div className="Day-box">
                        <p className="Day-timeSmall">13:45</p>
                        <div className="Day-busArea">
                            <h5 className="Day-BusLineSmall">バス</h5>
                            <div className="Day-leftLineArea">
                                <div className="Day-leftLine"></div>
                                <div className="Day-textArea">
                                    <p className="Day-backScheduleBig">嵐山</p>
                                    <h6 className="Day-backSchedule2">
                                        Arashiyama
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Day-RedLine"></div>
                </div>
            ) : (
            <></>
            )}
            <img className="Day-triangle3" src={triangle}></img>

            <img className="Day-picture" src={kyoto} />
            <div className="Day-box">
                <div className="Day-timeBarArea">
                    <p className="Day-timeSmallBar">15:13</p>
                    <div className="Day-timeBar"></div>
                    <p className="Day-timeSmallBar2">15:47</p>
                </div>
                <div className="Day-busArea2">
                    <div className="Day-leftLineArea2">
                        <div className="Day-LeftLineBig"></div>
                        <div className="Day-textArea">
                            <p className="Day-TextBig">京都駅</p>
                            <h6 className="Day-TextBigSub">Kyoto</h6>
                        </div>
                    </div>
                </div>
                <img className="Day-triangle4" src={triangle}></img>
                <div className="Day-leftLineArea2">
                    <div className="Day-LeftLineBig"></div>
                    <div className="Day-textArea">
                        <p className="Day-TextBig">名古屋駅</p>
                        <h6 className="Day-TextBigSub">Nagoya</h6>
                    </div>
                </div>
            </div>
            <img className="Day-picture" src={nagoya} />
            <p>教員引率で集合場所まで来たクラスから解散</p>
        </main>
    );
}
