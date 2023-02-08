import React, { useState } from "react";
import "./map.css";
import { getImg } from "model/assets";
import { useLocation } from "react-router-dom";
import PanZoom, { Element } from "@sasza/react-panzoom";

export type MapProps = {
    MapDateIndex: number;
    TopicDateIndex: number;
};

const imgMapKiyomizu = getImg("清水寺.png");
const imgMapKurashiki = getImg("kurashikiMap.png");
const imgMapHiroshima = getImg("HiroshimaMap.png");
const imgMapKitano = getImg("kitanoMap.png");
const imgMapUsj = getImg("univaMap.png");

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
const yuniba8 = getImg("topic/usj食べ物.png");
const kyotoArea = getImg("topic/京都場所.png");
const kyotoHitory = getImg("topic/京都歴史.png");
const hiroshima1 = getImg("topic/広島お土産.png");
const hiroshima2 = getImg("topic/広島お土産2.png");
const hiroshimaFood = getImg("topic/広島食べ物1.png");
const hiroshimaFood2 = getImg("topic/広島食べ物2.png");
const hiroshimaHistory = getImg("topic/広島歴史.png");
const hiroshimaArea = getImg("topic/広島場所.png");
const kurashikiPlace1 = getImg("topic/倉敷場所.png");
const kurashiloPlace2 = getImg("topic/倉敷場所2.png");
const kurashiloPlace3 = getImg("topic/倉敷場所3.png");
const kurashiloFood1 = getImg("topic/倉敷食べ物1.png");
const kurashiloFood2 = getImg("topic/倉敷食べ物2.png");
const kurashiloFood3 = getImg("topic/倉敷食べ物3.png");
const kurashiloHistory1 = getImg("topic/倉敷歴史.png");
const kurashiloHistory2 = getImg("topic/倉敷歴史2.png");
const miyajima1 = getImg("topic/宮島食べ物.png");
const miyajima2 = getImg("topic/宮島食べ物2.png");
const Arashiyama = getImg("topic/嵐山.png");
const Kiyomizu = getImg("topic/清水寺.png");
const decoy = getImg("decoy.png");

const imgTopicArea = getImg("topic-area.png");
const YA = getImg("TopicYA.svg");

function Map() {
    const { state } = useLocation() as { state: MapProps | undefined };
    const MapDateIndex = state?.MapDateIndex;
    const IsTopicSelectNumber = [
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
    ];
    const TopicDateIndex = state?.TopicDateIndex;

    const Sort_List = [Usj(), Kyoto(), Kurashiki(), Hiroshima()];
    const topicFunction = ["",Topic1(),Topic2(),"","",Topic3(),Topic4(),"",Topic5(),Topic6(),Topic7(),Topic8(),Topic9(),"",""];
    const [sort, updateSort] = useState(0);
    const map_List = [
        decoy,
        decoy,
        decoy,
        decoy,
        decoy,
        decoy,
        imgMapHiroshima,
        imgMapKurashiki,
        imgMapUsj,
        imgMapKiyomizu,
        imgMapKitano,
        imgMapKitano,
    ];
    const [map, updateMap] = useState(MapDateIndex ?? 0);
    const [isListOpen, updateIsListOpen] = useState(false);
    const [topicNumber, upDateTopicNumber] = useState(TopicDateIndex ?? 0);
    const topicList = [
        imgTopicArea,
        yuniba1,
        yuniba4,
        kyotoArea,
        kyotoHitory,
        hiroshima1,
        hiroshimaFood,
        hiroshimaHistory,
        kurashikiPlace1,
        kurashiloFood1,
        kurashiloHistory1,
        miyajima1,
        Arashiyama,
        yuniba8,
        hiroshimaArea,
    ];
    const areaList = ["広島", "倉敷", "USJ", "清水寺", "北野天満宮", "嵐山"];
    const topicList2 = ["USJ", "京都", "倉敷", "広島"];
    const [TopicNumber, updateTopicNumber] = useState(0);
    const [SortPulldown, upDataSortPulldown] = useState(false);

    function Sort(i: number) {
        updateIsListOpen(false);
        updateMap(i);
    }
    function SortPick(i: number) {
        upDataSortPulldown(false);
        updateSort(i);
        updateTopicNumber(i);
    }

    function Usj() {
        return (
            <div className="mapIconSort">
                <div className="map-icon">
                    <img src={imgPlace} onClick={() => upDateTopicNumber(1)} />
                    <p className="map-text">乗り物</p>
                </div>
                <div className="map-icon">
                    <img src={imgFoods} onClick={() => upDateTopicNumber(13)} />
                    <p className="map-text">食べ物</p>
                </div>
                <div className="map-icon">
                    <img src={imgGift} onClick={() => upDateTopicNumber(2)} />
                    <p className="map-text">お土産</p>
                </div>
            </div>
        );
    }
    function Kyoto() {
        return (
            <div className="mapIconSort">
                <div className="map-icon">
                    <img src={imgPlace} onClick={() => upDateTopicNumber(3)} />
                    <p className="map-text">場所</p>
                </div>
                <div className="map-icon">
                    <img src={imgFoods} onClick={() => upDateTopicNumber(12)} />
                    <p className="map-text">食べ物</p>
                </div>
                <div className="map-icon">
                    <img
                        src={imgHistory}
                        onClick={() => upDateTopicNumber(4)}
                    />
                    <p className="map-text">歴史</p>
                </div>
            </div>
        );
    }
    function Kurashiki() {
        return (
            <div className="mapIconSort">
                <div className="map-icon">
                    <img src={imgPlace} onClick={() => upDateTopicNumber(8)} />
                    <p className="map-text">場所</p>
                </div>
                <div className="map-icon">
                    <img src={imgFoods} onClick={() => upDateTopicNumber(9)} />
                    <p className="map-text">食べ物</p>
                </div>
                <div className="map-icon">
                    <img
                        src={imgHistory}
                        onClick={() => upDateTopicNumber(10)}
                    />
                    <p className="map-text">歴史</p>
                </div>
            </div>
        );
    }
    function Hiroshima() {
        return (
            <div className="mapIconSort">
                <div className="map-icon">
                    <img src={imgPlace} onClick={() => upDateTopicNumber(14)} />
                    <p className="map-text">場所</p>
                </div>
                <div className="map-icon">
                    <img src={imgFoods} onClick={() => upDateTopicNumber(6)} />
                    <p className="map-text">食べ物</p>
                </div>
                <div className="map-icon">
                    <img src={imgGift} onClick={() => upDateTopicNumber(5)} />
                    <p className="map-text">お土産</p>
                </div>
                <div className="map-icon">
                    <img
                        src={imgHistory}
                        onClick={() => upDateTopicNumber(7)}
                    />
                    <p className="map-text">歴史</p>
                </div>
            </div>
        );
    }

    return (
        <div className="map-body">
            <div className="map-main">
            <img className="map-map" src={map_List[map]}></img>
            </div>
            <img src={imgBorder} className="map-area" />
            <div className="map-TouchArea">
                <div className="MapTitleArea">
                    <div className="MapBarTitle"></div>
                    <div className="MapTitleText">
                        <p className="MapTitleMain">エリア選択</p>
                        <p className="MapTitleSub">Map Selection</p>
                    </div>
                </div>
                <div
                    className="MapPick"
                    onClick={() => updateIsListOpen(!isListOpen)}
                >
                    <div className="mapSvgArea">
                        <img src={imgMap} className="map-svg" />
                        {isListOpen ? (
                            <div className="circleArea mapPulldownAnimation">
                                {" "}
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
                        ) : (
                            <></>
                        )}
                    </div>
                    {isListOpen ? (
                        <div className="MapBarRed mapPulldownAnimation2"></div>
                    ) : (
                        <div className="MapBarRed"></div>
                    )}
                    <div>
                        {isListOpen ? <p>場所設定</p> : <p>{areaList[map]}</p>}

                        {isListOpen ? (
                            <div className="mapSelectArea mapPulldownAnimation">
                                <p onClick={() => Sort(0)} className="map-pull">
                                    広島
                                </p>
                                <p onClick={() => Sort(1)} className="map-pull">
                                    倉敷
                                </p>
                                <p onClick={() => Sort(2)} className="map-pull">
                                    USJ
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
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <div className="MapTitleArea">
                    <div className="MapBarTitle"></div>
                    <div className="MapTitleText">
                        <p className="MapTitleMain">トピック選択</p>
                        <p className="MapTitleSub">Topic Selection</p>
                    </div>
                </div>
                <div className="map-icon-sort">
                    <div>
                        <div
                            className="MapSelectPulldown"
                            onClick={() => upDataSortPulldown(!SortPulldown)}
                        >
                            <div className="MapSelectBar"></div>
                            {SortPulldown ? (
                                <p>行先</p>
                            ) : (
                                <div className="MapAsist">
                                    <p>{topicList2[TopicNumber]}</p>
                                    <img src={YA} />
                                    <p>Click</p>
                                </div>
                            )}
                            {SortPulldown ? (
                                <div className="MapSortPullBox">
                                    <div className="MapSortPullBar"></div>
                                    <p onClick={() => SortPick(0)}>USJ</p>
                                    <div className="MapSortPullBar"></div>
                                    <p onClick={() => SortPick(1)}>京都</p>
                                    <div className="MapSortPullBar"></div>
                                    <p onClick={() => SortPick(2)}>倉敷</p>
                                    <div className="MapSortPullBar"></div>
                                    <p onClick={() => SortPick(3)}>広島</p>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <div className="map-topic">{Sort_List[sort]}</div>
                </div>
                <div className="MapTitleArea">
                    <div className="MapBarTitle"></div>
                    <div className="MapTitleText">
                        <p className="MapTitleMain">トピック</p>
                        <p className="MapTitleSub">Topic</p>
                    </div>
                </div>
                <img src={topicList[topicNumber]} className="map-topicArea" />
                {IsTopicSelectNumber[topicNumber] ? (
                    <div>{topicFunction[topicNumber]}</div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default Map;

function Topic1() {
    return <div>ゆにば１</div>;
}

function Topic2() {
    return <div>ゆにば２</div>;
}

function Topic3() {
    return <div>ひろしま１</div>;
}

function Topic4() {
    return <div>ひろしまふーど</div>;
}

function Topic5() {
    return <div>ひろしま歴史</div>;
}

function Topic6() {
    return <div>くらしきばしょ</div>;
}

function Topic7() {
    return <div>くらしきれきし</div>;
}
function Topic8() {
    return <div>みやじま</div>;
}
function Topic9() {
    return <div>あらしやま</div>;
}