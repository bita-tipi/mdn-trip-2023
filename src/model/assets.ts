import { ASSETS, IMG } from "./assets-def";

export const assert = (val: boolean) => {
    if (!val) {
        throw new Error("Assertion Error!");
    }
};

export const getAssets = (path: ASSETS): string => {
    const assetsUrl = process.env.REACT_APP_API_URL as string;
    const containerId = process.env.REACT_APP_CONTAINER_ID as string;

    assert((path.match(/\./g) || []).length === 1);
    assert(path[1] !== "/");

    if (process.env.NODE_ENV === "development") {
        return `/assets/${path}`;
    } else {
        return `${assetsUrl}/${containerId}/get/inst_file_url/${path}`;
    }
};

export const getImg = (imgPath: IMG): string => {
    return getAssets(`img/${imgPath}`);
};
