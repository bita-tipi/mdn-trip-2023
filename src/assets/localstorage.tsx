export enum KEYS {
    SAMPLE_TEXT = "SAMPLE_TEXT",
}

export function getItem(key: KEYS) {
    const value = localStorage.getItem(KEYS.SAMPLE_TEXT);
    if (value !== null) {
        return value;
    }
    return "";
}

export function removeItem(key: KEYS) {
    localStorage.removeItem(key);
}

export function setItem(key: KEYS, value: any) {
    localStorage.setItem(key, value);
}
