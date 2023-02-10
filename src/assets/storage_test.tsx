import { valueOf } from "./atom";

// ここから: model/storage.ts
export const localStorageKey = {
    userData: "user_data",
    hotelData: "hotel_data",
    memoData: "memo_data",
    visitedTimes: "visited_times",
} as const;

type LocalStorageKey = valueOf<typeof localStorageKey>;

export type UserData = {
    personName: string;
    className: string;
};

export type HotelData = {
    roomNumber: number;
    members: string[];
};

export type MemoData = {
    memoData: string;
};

export class LocalStorage<T> {
    constructor(private key: LocalStorageKey) {}

    public get(): T | undefined {
        const data = localStorage.getItem(this.key);
        return data ? (JSON.parse(data) as T) : undefined;
    }

    public set(data: T) {
        if (data === undefined) return;
        localStorage.setItem(this.key, JSON.stringify(data));
    }

    public clear() {
        localStorage.removeItem(this.key);
    }
}

export function clearStorage() {
    localStorage.clear();
}
// ここまで
