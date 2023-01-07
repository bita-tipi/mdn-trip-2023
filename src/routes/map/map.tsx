import React, { useState } from "react";
import "./map.css";
import { getImg } from "../../model/assets";

const imgMapAichi = getImg("地図あいち.svg");
const imgYoshi = getImg("yoshi.png");
const imgMainLogo = getImg("main_logo.svg");
const imgFoods = getImg("食べ物.png");
const imgHogen = getImg("方言.png");
const imgPlace = getImg("場所.png");
const imgHistory = getImg("歴史.png");
const imgGift = getImg("おみやげ.png");
const imgBorder = getImg("境界.png");
const imgMap = getImg("地図.png");
const imgHistoryKurashiki = getImg("倉敷歴史.png");
const imgTopicArea = getImg("topic-area.png");

function Map() {
    const Sort_List = [Place(), Food(), Gift(), Language(), History()];
    const [sort, updateSort] = useState(0);
    const map_List = [imgMapAichi, imgYoshi, imgMainLogo];
    const [map, updateMap] = useState(0);
    const [isListOpen, updateIsListOpen] = useState(false);
    const [topicNumber, upDateTopicNumber] = useState(0);
    const topicList = [imgTopicArea, imgHistoryKurashiki];

    function Sort(i: number) {
        updateIsListOpen(false);
        updateMap(i);
    }

    function Place() {
        return (
            <div>
                <p className="map-text-color">TOPICS詳細　場所</p>
                <div className="map-topic-area">
                    <div className="map-topic-in">
                        <img src={imgPlace} className="" />
                        <p className="map-topic-text">場所</p>
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
                        <img src={imgFoods} className="" />
                        <p className="map-topic-text">食べ物</p>
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
                        <img src={imgGift} className="" />
                        <p className="map-topic-text">お土産</p>
                    </div>
                </div>
            </div>
        );
    }
    function Language() {
        return (
            <div>
                <p className="map-text-color">TOPICS詳細　方言</p>
                <div className="map-topic-area">
                    <div className="map-topic-in">
                        <img src={imgHogen} className="" />
                        <p className="map-topic-text">方言</p>
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
                        <img src={imgHistory} className="" />
                        <p className="map-topic-text">歴史</p>
                    </div>
                    <button onClick={() => upDateTopicNumber(1)}>倉敷</button>
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
                                    岡山
                                </p>
                                <p onClick={() => Sort(2)} className="map-pull">
                                    ユニバ
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
                                場所設定
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
                        <img src={imgHogen} onClick={() => updateSort(3)} />
                        <p className="map-text">方言</p>
                    </div>
                    <div className="map-icon">
                        <img src={imgHistory} onClick={() => updateSort(4)} />
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
