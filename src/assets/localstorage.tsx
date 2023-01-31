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

export function getText(key: KEYS) {
    const value = localStorage.getItem(KEYS.SAMPLE_TEXT);
    if (value !== null) {
        return value;
    }
    return "";
}
export function getName(key: KEYS) {
    const roomUserName = localStorage.getItem(KEYS.NAME);
    if (roomUserName !== null) {
        return roomUserName;
    }
    return "";
}
export function getClass(key: KEYS) {
    const roomClassName = localStorage.getItem(KEYS.CLASS);
    if (roomClassName!== null) {
        return roomClassName;
    }
    return "";
}
export function getNumber(key: KEYS) {
    const roomNumber = localStorage.getItem(KEYS.NUMBER);
    if (roomNumber !== null) {
        return roomNumber;
    }
    return "";
}

export function removeItem(key: KEYS) {
    localStorage.removeItem(key);
}

export function setItem(key: KEYS, value: any) {
    localStorage.setItem(key, value);
}
