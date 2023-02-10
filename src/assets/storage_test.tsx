import React, { useState } from "react";
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
        if (!data) return;
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

// ここから: routes/room/room.tsx
const userDataRepo = new LocalStorage<UserData>(localStorageKey.userData);
const hotelDataRepo = new LocalStorage<HotelData[]>(localStorageKey.hotelData);

export default function StorageTest() {
    const [userData, setUserData] = useState<UserData>(
        // initの宣言としてローカルストレージから持ってくるのはアリよりのアリ (useEffect 要らなくなる)
        userDataRepo.get() || { className: "", personName: "" }
    );
    const [hotelData, setHotelData] = useState<HotelData[]>(
        hotelDataRepo.get() || []
    );

    function getHotelData(
        key: keyof HotelData, // "roomNumber" か "members" かどっちなんだい
        day: number,
        memberIndex?: number
    ): string {
        switch (key) {
            case "roomNumber": {
                return hotelData[day]?.roomNumber?.toString() ?? "";
            }
            case "members": {
                if (memberIndex === undefined) return "";
                if (
                    typeof hotelData[day] === "undefined" ||
                    typeof hotelData[day].members === "undefined"
                ) {
                    return "";
                }
                return hotelData[day].members[memberIndex] ?? "";
            }
        }
    }

    // userDataに関してのupdate
    function updateUserData(
        event: React.ChangeEvent<HTMLInputElement>,
        key: keyof UserData // "className" か "personName" かどっちなんだい
    ) {
        const newUserData = { ...userData, [key]: event.target.value };
        setUserData(newUserData);
        userDataRepo.set(newUserData);
    }

    // hotelDataに関してのupdate
    function updateHotelData(
        event: React.ChangeEvent<HTMLInputElement>,
        key: keyof HotelData, // "roomNumber" か "members" かどっちなんだい
        day: number, // 何日目？
        memberIndex?: number // 何人目？ (任意)
    ) {
        const value = event.target.value;
        if (!value) return;

        const newHotelData = [...hotelData]; // いったんclone

        switch (key) {
            case "roomNumber": {
                // roomNumberの場合 -> valueをnumberへ変換
                newHotelData[day] = {
                    ...newHotelData[day],
                    roomNumber: value as unknown as number,
                };
                break;
            }
            case "members": {
                // assert
                if (memberIndex === undefined) {
                    throw Error("memberIndex is undefined");
                }
                // membersの場合 -> valueをstringへ変換して, そのmemberIndex番目に入れる
                const newMembers = [...(newHotelData[day]?.members || [])];
                newMembers[memberIndex] = value as unknown as string;

                newHotelData[day] = {
                    ...newHotelData[day],
                    members: newMembers,
                };
            }
        }
        setHotelData(newHotelData);
        hotelDataRepo.set(newHotelData);
    }

    return (
        <div>
            <h1>Storageテスト</h1>
            <p>userData: {JSON.stringify(userData)}</p>
            <p>hotelData: {JSON.stringify(hotelData)}</p>

            <section>
                <input
                    type="text"
                    value={userData.className}
                    placeholder="クラス名"
                    onChange={(event) => updateUserData(event, "className")}
                />
                <br />
                <input
                    type="text"
                    value={userData.personName}
                    placeholder="お名前"
                    onChange={(event) => updateUserData(event, "personName")}
                />
                <br />
                {/* え？  わかりやすいようにゴリ押しだよ */}
                <h2>hotelData (配列ﾀﾞｯ)</h2>
                <h3>1日目</h3>
                <input
                    type="number"
                    value={getHotelData("roomNumber", 0)}
                    placeholder="部屋番号"
                    onChange={(event) =>
                        updateHotelData(event, "roomNumber", 0)
                    }
                />
                <br />
                <input
                    type="text"
                    value={getHotelData("members", 0, 0)}
                    placeholder="お友達[0]"
                    onChange={(event) =>
                        updateHotelData(event, "members", 0, 0)
                    }
                />
                <input
                    type="text"
                    value={getHotelData("members", 0, 1)}
                    placeholder="お友達[1]"
                    onChange={(event) =>
                        updateHotelData(event, "members", 0, 1)
                    }
                />
                <h3>2日目</h3>
                <input
                    type="number"
                    value={getHotelData("roomNumber", 1)}
                    placeholder="部屋番号"
                    onChange={(event) =>
                        updateHotelData(event, "roomNumber", 1)
                    }
                />
                <br />
                <input
                    type="text"
                    value={getHotelData("members", 1, 0)}
                    placeholder="お友達[0]"
                    onChange={(event) =>
                        updateHotelData(event, "members", 1, 0)
                    }
                />
                <input
                    type="text"
                    value={getHotelData("members", 1, 1)}
                    placeholder="お友達[1]"
                    onChange={(event) =>
                        updateHotelData(event, "members", 1, 1)
                    }
                />
                <h3>3日目</h3>
                <input
                    type="number"
                    value={getHotelData("roomNumber", 2)}
                    placeholder="部屋番号"
                    onChange={(event) =>
                        updateHotelData(event, "roomNumber", 2)
                    }
                />
                <br />
                <input
                    type="text"
                    value={getHotelData("members", 2, 0)}
                    placeholder="お友達[0]"
                    onChange={(event) =>
                        updateHotelData(event, "members", 2, 0)
                    }
                />
                <input
                    type="text"
                    value={getHotelData("members", 2, 1)}
                    placeholder="お友達[1]"
                    onChange={(event) =>
                        updateHotelData(event, "members", 2, 1)
                    }
                />
            </section>
        </div>
    );
}
// ここまで
