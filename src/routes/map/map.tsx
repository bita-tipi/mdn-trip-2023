import React, { useState } from "react";
import "./map.css";
import error from "../../assets/img/sannkau.png";
import yoshi from "../../assets/img/yoshi.png";
import main_logo from "../../assets/img/main_logo.svg"

function Map() {
    const Sort_List = [Place(), Type(),History(),Culture()];
    const [sort, updateSort] = useState(0);
    const map_List = [error,yoshi,main_logo]
    const [map, updateMap] = useState(0);
    const [isListOpen, updateIsListOpen] = useState(false);

    function Sort(i: number) {
        updateIsListOpen(false);
        updateMap(i);
    }

    function History() {
        return (
            <div>
                <p>History</p>
            </div>
        );
    }
    function Culture() {
        return (
            <div>
                <p>Culture</p>
            </div>
        );
    }
    function Place() {
        return (
            <div>
                <p>Place</p>
            </div>
        );
    }
    function Type() {
        return (
            <div>
                <p>Type</p>
            </div>
        );
    }

    return (
        <div>
            <div className="map-main">
                <img className="map-map" src={map_List[map]}/>
            </div>
            <div className="map-TouchArea">
                <div className="map-sort">
                <button className="map-button" onClick={() => updateIsListOpen(!isListOpen)}>
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
                    <div className="map-sort">
                        <button onClick={() => updateSort(0)}>場所</button>
                        <button onClick={() => updateSort(1)}>食べ物</button>
                        <button onClick={() => updateSort(2)}>歴史</button>
                        <button onClick={() => updateSort(3)}>文化</button>
                    </div>
                <div className="map-topic">
                    {Sort_List[sort]}
                </div>
            </div>
        </div>
    );
}

export default Map;
