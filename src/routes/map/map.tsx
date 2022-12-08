import React, { useState } from "react";

function Map() {
    const Sort_List = [Place(), Type()];
    const [isListOpen, updateIsListOpen] = useState(false);
    const [sort, updateSort] = useState(0);

    function Sort(i: number) {
        updateIsListOpen(false);
        updateSort(i);
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
            <button onClick={() => updateIsListOpen(!isListOpen)}>
                並び替え
            </button>
            {isListOpen ? (
                <div>
                    <button onClick={() => Sort(0)}>場所ごと</button>
                    <button onClick={() => Sort(1)}>種類ごと</button>
                </div>
            ) : (
                <div></div>
            )}
            {Sort_List[sort]}
        </div>
    );
}

export default Map;
