import React, { useState } from "react";
import "./map.css";
import error from "../../assets/img/sannkau.png";
import yoshi from "../../assets/img/yoshi.png";
import main_logo from "../../assets/img/main_logo.svg";
import food from "../../assets/img/食べ物.png";
import language from "../../assets/img/方言.png";
import place from "../../assets/img/場所.png";
import history from "../../assets/img/歴史.png";
import omiyage from "../../assets/img/おみやげ.png";
import area from "../../assets/img/境界.png";
import topic from "../../assets/img/topic-box.png";
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
                <p>Place</p>
            </div>
        );
    }
    function Food() {
        return (
            <div>
                <p>Food</p>
            </div>
        );
    }
    function Gift() {
        return (
            <div>
                <p>Gift</p>
            </div>
        );
    }
    function Language() {
        return (
            <div>
                <p>Language</p>
            </div>
        );
    }
    function History() {
        return (
            <div>
                <p>History</p>
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
                <div className="map-sort">
                    <button
                        className="map-button"
                        onClick={() => updateIsListOpen(!isListOpen)}
                    >
                        場所設定
                    </button>
                </div>
                {isListOpen ? (
                    <div className="map-sort">
                        <button onClick={() => Sort(0)}>広島</button>
                        <button onClick={() => Sort(1)}>岡山</button>
                        <button onClick={() => Sort(2)}>ユニバ</button>
                    </div>
                ) : (
                    <div></div>
                )}
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
