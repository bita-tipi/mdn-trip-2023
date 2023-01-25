import "../Day4.css";
import _ from "lodash";
import React, { useState } from "react";
import { getImg } from "model/assets";

const arashiyama = getImg("嵐山image.png");
const triangle = getImg("triangle.svg");
const triangleWhite = getImg("triangle-white.svg");
const kitano = getImg("北野天満宮.png");
const ninen = getImg("二年坂.png");

export function ScheduleDay4() {
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
            <div className="Day-box">
                <p>07:30</p>
                <p className="Day-underLineRed">朝食</p>
            </div>
            <div className="Day-box">
                <p className="Day-time">08:30</p>
                <div className="Day-busArea">
                    <h5 className="Day-BusLine">バス</h5>
                    <div className="Day-leftLineArea">
                        <div className="Day-leftLine"></div>
                        <div className="Day-textArea">
                            <p className="Day-textName">リーベルホテルアット</p>
                            <p className="Day-textName">
                                ユニバーサルスタジオジャパン
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
                <h2 className="Day-ifTitle">1.嵐山ルート</h2>
            </div>
            {isListOpenDays[0] ? (
                <div className="Day-pulldown">
                    <img className="Day-triangle3" src={triangle} />
                    <div className="Day-box">
                        <p className="Day-timeSmall">10:00</p>
                        <div className="Day-leftLineAreaSmall">
                            <div className="Day-leftLine"></div>
                            <div className="Day-textArea">
                                <p className="Day-textNameSmall">嵐山</p>
                                <h6>Arashiyama</h6>
                            </div>
                        </div>
                    </div>
                    <div className="Day-box-picture">
                        <p className="Day-timePicture">10:00</p>
                        <img className="Day-picture" src={arashiyama} />
                    </div>
                    <div>
                        <p className="Day-lunch">昼食は各自</p>
                    </div>
                    <div className="Day-box">
                        <p className="Day-timeSmall">13:50</p>
                        <div className="Day-busArea">
                            <h5 className="Day-BusLineSmall">バス</h5>
                            <div className="Day-leftLineArea">
                                <div className="Day-leftLine"></div>
                                <div className="Day-textArea">
                                    <p className="Day-textName">嵐山</p>
                                    <h6 className="Day-Rome">Arashiyama</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="Day-pulldownClose">
                    <img className="Day-triangle3" src={triangle}></img>
                    <div className="Day-box">
                        <p className="Day-timeSmall">10:00</p>
                        <div className="Day-leftLineAreaSmall">
                            <div className="Day-leftLine"></div>
                            <div className="Day-textArea">
                                <p className="Day-textNameSmall">嵐山</p>
                                <h6>Arashiyama</h6>
                            </div>
                        </div>
                    </div>
                    <div className="Day-box-picture">
                        <p className="Day-timePicture">10:00</p>
                        <img className="Day-picture" src={arashiyama} />
                    </div>
                    <div>
                        <p className="Day-lunch">昼食は各自</p>
                    </div>
                    <div className="Day-box">
                        <p className="Day-timeSmall">13:50</p>
                        <div className="Day-busArea">
                            <h5 className="Day-BusLineSmall">バス</h5>
                            <div className="Day-leftLineArea">
                                <div className="Day-leftLine"></div>
                                <div className="Day-textArea">
                                    <p className="Day-textName">嵐山</p>
                                    <h6 className="Day-Rome">Arashiyama</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                    <div className="Day-box">
                        <p className="Day-timeSmall">10:15</p>
                        <div className="Day-leftLineAreaSmall">
                            <div className="Day-leftLine"></div>
                            <div className="Day-textArea">
                                <p className="Day-textNameSmall2">円山公園</p>
                                <h6>Maruyama Park</h6>
                            </div>
                        </div>
                    </div>
                    <div className="Day-box-picture">
                        <p className="Day-timePicture">10:15</p>
                        <img className="Day-picture" src={ninen} />
                    </div>
                    <div>
                        <p className="Day-lunch">昼食は自由</p>
                    </div>
                    <div className="Day-box">
                        <p className="Day-timeSmall">14:10</p>
                        <div className="Day-busArea">
                            <h5 className="Day-BusLineSmall">バス</h5>
                            <div className="Day-leftLineArea">
                                <div className="Day-leftLine"></div>
                                <div className="Day-textArea">
                                    <p className="Day-textName">清水駐車場</p>
                                    <h6 className="Day-Rome">
                                        Kiyomizu Parking
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="Day-pulldownClose2">
                    <div className="Day-box">
                        <p className="Day-timeSmall">10:15</p>
                        <div className="Day-leftLineAreaSmall">
                            <div className="Day-leftLine"></div>
                            <div className="Day-textArea">
                                <p className="Day-textNameSmall2">北野天満宮</p>
                                <h6>Kitano Tennmannguu</h6>
                            </div>
                        </div>
                    </div>
                    <div className="Day-box-picture">
                        <p className="Day-timePicture">10:15</p>
                        <img className="Day-picture" src={ninen} />
                    </div>
                    <div>
                        <p className="Day-lunch">昼食は自由</p>
                    </div>
                    <div className="Day-box">
                        <p className="Day-timeSmall">14:10</p>
                        <div className="Day-busArea">
                            <h5 className="Day-BusLineSmall">バス</h5>
                            <div className="Day-leftLineArea">
                                <div className="Day-leftLine"></div>
                                <div className="Day-textArea">
                                    <p className="Day-textName">清水駐車場</p>
                                    <h6 className="Day-Rome">
                                        Kiyomizu Parking
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="Day-routeIf" onClick={() => ListSelectDays(2)}>
                {isListOpenDays[2] ? (
                    <img className="Day-triangle2" src={triangleWhite} />
                ) : (
                    <img className="Day-triangle" src={triangleWhite} />
                )}
                <h2 className="Day-ifTitle">3.北野天満宮/錦市場ルート</h2>
            </div>
            {isListOpenDays[2] ? (
                <div className="Day-pulldown2">
                    <div className="Day-box">
                        <p className="Day-timeSmall">10:15</p>
                        <div className="Day-leftLineAreaSmall">
                            <div className="Day-leftLine"></div>
                            <div className="Day-textArea">
                                <p className="Day-textNameSmall2">北野天満宮</p>
                                <h6>Kitano Tennmannguu</h6>
                            </div>
                        </div>
                    </div>
                    <div className="Day-box-picture">
                        <p className="Day-timePicture">10:15</p>
                        <img className="Day-picture" src={kitano} />
                    </div>
                    <div className="Day-box-picture">
                        <p className="Day-timePicture">11:15</p>
                        <img className="Day-picture" src={kitano} />
                    </div>
                    <div>
                        <p className="Day-lunch">昼食は自由</p>
                    </div>
                    <div className="Day-box">
                        <p className="Day-time">14:10</p>
                        <div className="Day-busArea">
                            <h5 className="Day-BusLine">バス</h5>
                            <div className="Day-leftLineArea">
                                <div className="Day-leftLine"></div>
                                <div className="Day-textArea">
                                    <p className="Day-textName">錦市場</p>
                                    <h6 className="">Nishiki Itiba</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Day-RedLine"></div>
                </div>
            ) : (
                <div className="Day-pulldownClose2">
                    <div className="Day-box">
                        <p className="Day-timeSmall">10:15</p>
                        <div className="Day-leftLineAreaSmall">
                            <div className="Day-leftLine"></div>
                            <div className="Day-textArea">
                                <p className="Day-textNameSmall2">北野天満宮</p>
                                <h6>Kitano Tennmannguu</h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>10:15</p>
                        <div>
                            <p>観光</p>
                            <p>北野天満宮</p>
                            <img></img>
                        </div>
                    </div>
                    <div>
                        <p className="Day-lunch">昼食は自由</p>
                    </div>
                    <div className="Day-box">
                        <p className="Day-time">14:10</p>
                        <div className="Day-busArea">
                            <h5 className="Day-BusLine">バス</h5>
                            <div className="Day-leftLineArea">
                                <div className="Day-leftLine"></div>
                                <div className="Day-textArea">
                                    <p className="Day-textName">錦市場</p>
                                    <h6 className="">Nishiki Itiba</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Day-RedLine"></div>
                </div>
            )}
            <img className="Day-triangle3" src={triangle}></img>

            <div className="Day-box">
                <p className="Day-timeSmall">14:30</p>
                <div className="Day-leftLineAreaSmall">
                    <div className="Day-leftLine"></div>
                    <div className="Day-textArea">
                        <p className="Day-textNameSmall">京都駅</p>
                        <h6>Kyouto Station</h6>
                    </div>
                </div>
            </div>

            <div className="Day-box-picture">
                <p className="Day-timePicture">14:30</p>
                <img className="Day-picture" src={kitano} />
            </div>

            <div className="Day-box">
                <p className="Day-timeSmall">13:50</p>
                <div></div>
                <h5 className="Day-BusLineSmall">バス</h5>
                <div className="Day-busArea">
                    <div className="Day-leftLineArea">
                        <div className="Day-leftLine"></div>
                        <div className="Day-textArea">
                            <p className="Day-textName">京都</p>
                            <h6 className="Day-Rome">Kyouto</h6>
                        </div>
                    </div>
                </div>
                <img className="Day-triangle3" src={triangle}></img>
                <div className="Day-leftLineAreaSmall2">
                    <div className="Day-leftLine"></div>
                    <div>
                        <p className="Day-backSchedule2">名古屋</p>
                        <h6 className="Day-backSchedule">Nagoya</h6>
                    </div>
                </div>
            </div>
        </main>
    );
}
