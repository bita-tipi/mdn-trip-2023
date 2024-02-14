import { ASSETS, IMG } from "./assets-def";

export const assert = (val: boolean, message?: string): void | never => {
    message ??= "";

    if (!val) {
        throw new Error(`[!] Assertion Error! =>\n ${message}`);
    }
};

export const getAssets = (path: ASSETS): string => {
    assert(
        (path.match(/\./g) || []).length === 1,
        "Requested asset url is invalid;  The number of file extension (period) is not 1",
    );
    assert(
        path[1] !== "/",
        "Requested asset url is invalid;  Do not add a leading slash",
    );
    return `/assets/${path}`;
};

export const getImg = (imgPath: IMG): string => {
    return getAssets(`img/${imgPath}`);
};
