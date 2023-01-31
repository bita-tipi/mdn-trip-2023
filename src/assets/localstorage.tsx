export enum KEYS {
    SAMPLE_TEXT = "",
    FREEAREA = "",
    NUMBER ="",
    CLASS = "G2A",
    NAME = "",
    FRIENDsONE = "",
    FRIENDsTWO = "",
    FRIENDsTHREE = "",
    FRIENDsFOUR = "",
}

export function getItem(key: KEYS) {
    const value = localStorage.getItem(KEYS.SAMPLE_TEXT);
    if (value !== null) {
        return value;
    }
    return "";
}
export function getName(key: KEYS) {
    const name = localStorage.getName(KEYS.NAME);
    if (name !== null) {
        return name;
    }
    return "";
}
export function getClass(key: KEYS) {
    const className = localStorage.getClass(KEYS.CLASS);
    if (className!== null) {
        return className;
    }
    return "";
}
export function getNumber(key: KEYS) {
    const number = localStorage.getNumber(KEYS.NUMBER);
    if (number !== null) {
        return number;
    }
    return "";
}

export function removeItem(key: KEYS) {
    localStorage.removeItem(key);
}

export function setItem(key: KEYS, value: any) {
    localStorage.setItem(key, value);
}
