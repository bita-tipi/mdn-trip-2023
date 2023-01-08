import { ASSETS, IMG } from "./assets-def";

export const assert = (val: boolean, message?: string): void | never => {
    message ??= "";

    if (!val) {
        throw new Error(`[!] Assertion Error! =>\n ${message}`);
    }
};

export const getAssets = (path: ASSETS): string => {
    const envMode = process.env.NODE_ENV;
    const assetsUrl = process.env.REACT_APP_API_URL;
    const containerId = process.env.REACT_APP_CONTAINER_ID;

    if (envMode === "production") {
        assert(
            assetsUrl !== undefined,
            "REACT_APP_API_URL is undefined.  Check your environment file available",
        );
        assert(
            containerId !== undefined,
            "REACT_APP_CONTAINER_ID is undefined.  Check your environment file available",
        );
    } else {
        if (assetsUrl === undefined || containerId === undefined) {
            console.warn("[･] Environment file not found... (dev)");
        }
    }

    assert(
        (path.match(/\./g) || []).length === 1,
        "Requested asset url is invalid;  The number of file extension (period) is not 1",
    );
    assert(
        path[1] !== "/",
        "Requested asset url is invalid;  Do not add a leading slash",
    );

    if (envMode === "production") {
        return `${assetsUrl}/${containerId}/get/inst_file_url/${path}`;
    } else {
        return `/assets/${path}`;
    }
};

export const getImg = (imgPath: IMG): string => {
    return getAssets(`img/${imgPath}`);
};
