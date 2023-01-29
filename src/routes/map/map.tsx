import React, { useState } from "react";
import "./map.css";
import { getImg } from "model/assets";

const imgMapKiyomizu = getImg("清水寺.png");
const imgYoshi = getImg("yoshi.png");
const imgMainLogo = getImg("main_logo.svg");
const imgFoods = getImg("食べ物.png");
const imgPlace = getImg("場所.png");
const imgHistory = getImg("歴史.png");
const imgGift = getImg("おみやげ.png");
const imgBorder = getImg("境界.png");
const imgMap = getImg("地図.png");

const yuniba1 = getImg("topic/yuniba1.png");
const yuniba2 = getImg("topic/ゆにばアトラクション2.png");
const yuniba3 = getImg("topic/ゆにばアトラクション3.png");
const yuniba4 = getImg("topic/ゆにばお土産.png");
const yuniba5 = getImg("topic/ゆにばお土産2.png");
const yuniba6 = getImg("topic/ゆにばお土産3.png");
const yuniba7 = getImg("topic/ゆにばお土産4.png");
const kyotoArea = getImg("topic/京都場所.png");
const kyotoHitory = getImg("topic/京都歴史.png");
const hiroshima1 = getImg("topic/広島お土産.png");
const hiroshima2 = getImg("topic/広島お土産2.png");
const hiroshimaFood = getImg("topic/広島食べ物1.png");
const hiroshimaFood2 = getImg("topic/広島食べ物2.png");
const hiroshimaHistory = getImg("topic/広島歴史.png");
const kurashikiPlace1 = getImg("topic/倉敷場所.png");
const kurashiloPlace2 = getImg("topic/倉敷場所2.png");
const kurashiloPlace3 = getImg("topic/倉敷場所3.png");
const kurashiloFood1 = getImg("topic/倉敷食べ物2.png");
const kurashiloFood2 = getImg("topic/倉敷食べ物3.png");
const kurashiloHistory1 = getImg("topic/倉敷歴史.png");
const kurashiloHistory2 = getImg("topic/倉敷歴史2.png");
const miyajima1 = getImg("topic/宮島食べ物.png");
const miyajima2 = getImg("topic/宮島食べ物2.png");


const imgTopicArea = getImg("topic-area.png");

function Map() {
    const Sort_List = [Place(), Food(), Gift(), History()];
    const [sort, updateSort] = useState(0);
    const map_List = [imgMapKiyomizu, imgYoshi, imgMainLogo,imgMainLogo,imgMainLogo,imgMainLogo,imgMainLogo];
    const [map, updateMap] = useState(0);
    const [isListOpen, updateIsListOpen] = useState(false);
    const [topicNumber, upDateTopicNumber] = useState(0);
    const topicList = [imgTopicArea,yuniba1,yuniba4,kyotoArea,kyotoHitory,hiroshima1,hiroshimaFood,hiroshimaHistory,kurashikiPlace1,kurashiloFood1,kurashiloHistory1,miyajima1];
    const areaList = ["広島", "倉敷", "ユニバ", "清水寺", "北野天満宮", "嵐山"];
    const [areaNumber, upDataNumber] = useState(0);

    function Sort(i: number) {
        updateIsListOpen(false);
        updateMap(i);
        upDataNumber(i);
    }

    function Place() {
        return (
            <div>
                <p className="map-text-color">TOPICS詳細　場所</p>
                <div className="map-topic-area">
                    <div className="map-topic-in">
                        <img src={imgPlace} className="map-topic-icon" />
                        <p className="map-topic-text">場所</p>
                    </div>
                    <div className="topicButtonAreaSelect">
                        <button
                            onClick={() => upDateTopicNumber(8)}
                            className="map-selectButton"
                        >
                            倉敷
                        </button>
                        <button
                            onClick={() => upDateTopicNumber(1)}
                            className="map-selectButton"
                        >
                            ユニバ
                        </button>
                        <button
                            onClick={() => upDateTopicNumber(3)}
                            className="map-selectButton"
                        >
                            京都
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    function Food() {
        return (
            <div>
                <p className="map-text-color">TOPICS詳細　食べ物</p>
                <div className="map-topic-area">
                    <div className="map-topic-in">
                        <img src={imgFoods} className="map-topic-icon" />
                        <p className="map-topic-text">食べ物</p>
                    </div>
                    <div className="topicButtonAreaSelect">
                        <button
                            onClick={() => upDateTopicNumber(9)}
                            className="map-selectButton"
                        >
                            倉敷
                        </button>
                        <button
                            onClick={() => upDateTopicNumber(6)}
                            className="map-selectButton"
                        >
                            広島
                        </button>
                        <button
                            onClick={() => upDateTopicNumber(1)}
                            className="map-selectButton"
                        >
                            京都
                        </button>
                        <button
                            onClick={() => upDateTopicNumber(2)}
                            className="map-selectButton"
                        >
                            ユニバ
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    function Gift() {
        return (
            <div>
                <p className="map-text-color">TOPICS詳細　お土産</p>
                <div className="map-topic-area">
                    <div className="map-topic-in">
                        <img src={imgGift} className="map-topic-icon" />
                        <p className="map-topic-text">お土産</p>
                    </div>
                    <div className="topicButtonAreaSelect">
                        <button
                            onClick={() => upDateTopicNumber(5)}
                            className="map-selectButton"
                        >
                            広島
                        </button>
                        <button
                            onClick={() => upDateTopicNumber(11)}
                            className="map-selectButton"
                        >
                            宮島
                        </button>
                        <button
                            onClick={() => upDateTopicNumber(2)}
                            className="map-selectButton"
                        >
                            ユニバ
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    function History() {
        return (
            <div>
                <p className="map-text-color">TOPICS詳細　歴史</p>
                <div className="map-topic-area">
                    <div className="map-topic-in">
                        <img src={imgHistory} className="map-topic-icon" />
                        <p className="map-topic-text">歴史</p>
                    </div>
                    <div className="topicButtonAreaSelect">
                        <button
                            onClick={() => upDateTopicNumber(10)}
                            className="map-selectButton"
                        >
                            倉敷
                        </button>
                        <button
                            onClick={() => upDateTopicNumber(7)}
                            className="map-selectButton"
                        >
                            広島
                        </button>
                        <button
                            onClick={() => upDateTopicNumber(4)}
                            className="map-selectButton"
                        >
                            京都
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="map-body">
            <div className="map-main">
                <img className="map-map" src={map_List[map]} />
            </div>
            <img src={imgBorder} className="map-area" />
            <div className="map-TouchArea">
                <div className="map-pick">
                    {isListOpen ? (
                        <div className="map-moji">
                            <div className="map-map-list">
                                <img src={imgMap} className="map-svg-open" />
                                <div className="map-red-bar"></div>
                                <div className="map-red-circle"></div>
                                <div className="map-red-bar"></div>
                                <div className="map-red-circle"></div>
                                <div className="map-red-bar"></div>
                                <div className="map-red-circle"></div>
                                <div className="map-red-bar"></div>
                                <div className="map-red-circle"></div>
                                <div className="map-red-bar"></div>
                                <div className="map-red-circle"></div>
                                <div className="map-red-bar"></div>
                                <div className="map-red-circle"></div>
                            </div>
                            <div className="map-bar-open"></div>
                            <div className="map-pull-list">
                                <p
                                    className="map-pull"
                                    onClick={() =>
                                        updateIsListOpen(!isListOpen)
                                    }
                                >
                                    場所設定
                                </p>
                                <p onClick={() => Sort(0)} className="map-pull">
                                    広島
                                </p>
                                <p onClick={() => Sort(1)} className="map-pull">
                                    倉敷
                                </p>
                                <p onClick={() => Sort(2)} className="map-pull">
                                    ユニバ
                                </p>
                                <p onClick={() => Sort(3)} className="map-pull">
                                    清水寺
                                </p>
                                <p onClick={() => Sort(4)} className="map-pull">
                                    北野天満宮
                                </p>
                                <p onClick={() => Sort(5)} className="map-pull">
                                    嵐山
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="map-sort">
                            <img src={imgMap} className="map-svg" />
                            <div className="map-bar"></div>
                            <div
                                className="map-button"
                                onClick={() => updateIsListOpen(!isListOpen)}
                            >
                                {areaList[areaNumber]}
                            </div>
                        </div>
                    )}
                </div>
                <p className="map-text-color">TOPICS</p>
                <div className="map-icon-sort">
                    <div className="map-icon">
                        <img src={imgPlace} onClick={() => updateSort(0)} />
                        <p className="map-text">場所</p>
                    </div>
                    <div className="map-icon">
                        <img src={imgFoods} onClick={() => updateSort(1)} />
                        <p className="map-text">食べ物</p>
                    </div>
                    <div className="map-icon">
                        <img src={imgGift} onClick={() => updateSort(2)} />
                        <p className="map-text">お土産</p>
                    </div>
                    <div className="map-icon">
                        <img src={imgHistory} onClick={() => updateSort(3)} />
                        <p className="map-text">歴史</p>
                    </div>
                </div>
                <div className="map-topic">{Sort_List[sort]}</div>
                <img src={topicList[topicNumber]} className="map-topicArea" />
            </div>
        </div>
    );
}

export default Map;
