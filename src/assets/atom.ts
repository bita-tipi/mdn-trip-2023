import { atom } from "recoil";
import React, { useState } from "react";


/** Modalを表示させるのに必要な, `classData`と`FloorIndex`を持った複合objectを`ModalData`とする */
type YoshiData = {
    IfYoshi:boolean;
};

type IndexData = {
    Index:number;
}

const IndexDataState = atom<IndexData> ({
    key: "Index",
    default:{
        Index:0
    }
})
/**
 * ## modalDataState
 * `ModalData`の状態を持った`atom`
 */
const YoshiDataState = atom<YoshiData>({
    key: "Yoshi",
    default: {
        IfYoshi:false
    },
});

export type {YoshiData,IndexData};
export { YoshiDataState ,IndexDataState};
