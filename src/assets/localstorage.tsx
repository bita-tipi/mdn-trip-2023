export const KEYS = {
    SAMPLE_TEXT : "",
    FREEAREA : "",
    NUMBER : "",
    CLASS : "G2A",
    NAME : "",
    FRIENDsONE : "",
    FRIENDsTWO : "",
    FRIENDsTHREE : "",
    FRIENDsFOUR : "",
    IsLoaded : "false",
}   as const;

export type valueOf<T> = T[keyof T];

type KEYS = valueOf<typeof KEYS>;

export function getItem(key: KEYS) {
    const Value = localStorage.getItem(key);
    if (Value !== null) {
        return Value;
    }
    return "";
}

export function removeItem(key: KEYS) {
    localStorage.removeItem(key);
}

export function setItem(key: KEYS, value: any) {
    localStorage.setItem(key, value);
}
