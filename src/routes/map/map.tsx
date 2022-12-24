import React, { useState } from "react";
import "./map.css";
import error from "../../assets/img/地図あいち.svg";
import yoshi from "../../assets/img/yoshi.png";
import main_logo from "../../assets/img/main_logo.svg";
import food from "../../assets/img/食べ物.png";
import language from "../../assets/img/方言.png";
import place from "../../assets/img/場所.png";
import history from "../../assets/img/歴史.png";
import omiyage from "../../assets/img/おみやげ.png";
import area from "../../assets/img/境界.png";
import map_svg from "../../assets/img/地図.png";
import his_kura from "../../assets/img/倉敷歴史.png";
import { boxSizing } from "@mui/system";

function Map() {
    const Sort_List = [Place(), Food(), Gift(), Language(), History()];
    const [sort, updateSort] = useState(0);
    const map_List = [error, yoshi, main_logo];
    const [map, updateMap] = useState(0);
    const [isListOpen, updateIsListOpen] = useState(false);

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
                        <img
                            src={place}
                            onClick={() => updateSort(0)}
                            className=""
                        />
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
                        <img
                            src={food}
                            onClick={() => updateSort(0)}
                            className=""
                        />
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
                        <img
                            src={omiyage}
                            onClick={() => updateSort(0)}
                            className=""
                        />
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
                        <img
                            src={language}
                            onClick={() => updateSort(0)}
                            className=""
                        />
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
                        <img
                            src={history}
                            onClick={() => updateSort(0)}
                            className=""
                        />
                        <p className="map-topic-text">歴史</p>
                    </div>
                    <img src={his_kura} className="topic-img-map" />
                </div>
            </div>
        );
    }

    return (
        <div className="map-body">
            <div className="map-main">
                <img className="map-map" src={map_List[map]} />
            </div>
            <img src={area} className="map-area" />
            <div className="map-TouchArea">
                <div className="map-pick">
                    {isListOpen ? (
                        <div className="map-moji">
                            <div className="map-map-list">
                                <img src={map_svg} className="map-svg-open" />
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
                            <img src={map_svg} className="map-svg" />
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
                        <img src={place} onClick={() => updateSort(0)} />
                        <p className="map-text">場所</p>
                    </div>
                    <div className="map-icon">
                        <img src={food} onClick={() => updateSort(1)} />
                        <p className="map-text">食べ物</p>
                    </div>
                    <div className="map-icon">
                        <img src={omiyage} onClick={() => updateSort(2)} />
                        <p className="map-text">お土産</p>
                    </div>
                    <div className="map-icon">
                        <img src={language} onClick={() => updateSort(3)} />
                        <p className="map-text">方言</p>
                    </div>
                    <div className="map-icon">
                        <img src={history} onClick={() => updateSort(4)} />
                        <p className="map-text">歴史</p>
                    </div>
                </div>
                <div className="map-topic">{Sort_List[sort]}</div>
            </div>
        </div>
    );
}

export default Map;
