import { atom } from "recoil";
import React, { useState } from "react";
import CLASS from "./data/classDate"

export type valueOf<T> = T[keyof T];
export type PickType<T, K extends keyof T> = T[K];

type CLASS_DATA = {
    className: string;
};


const PassClass = atom<CLASS_DATA>({
    key: "PassClass",
    default: CLASS.G2A,
});

const PassSuccess = atom<boolean>({
    key: "FATAL_KEY",
    default: false,
});

export { PassClass, PassSuccess, CLASS };
export type { CLASS_DATA };
