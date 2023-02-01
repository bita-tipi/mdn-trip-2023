import React, { useEffect, useState } from "react";

// src/assets/data/ClassName.ts とか？
export type HotelData = {
  roomNumber?: number;
  className?: string;
  personName?: string;
};

export type LoadData = {
  IsLoading?: number;
  Loading?:string;
}

export type MemoData = {
  MemoText?: string;
}

type HotelDataKey = keyof HotelData; // "roomNumber" | "className" | "personName"

// src/assets/LocalStorage.ts とか？
class HotelDataRepo {
  // タイプミスが怖いから, ここで1回だけ定義しておく
  private key = "hotel_data";

  public get(): HotelData | undefined {
    const data = localStorage.getItem(this.key);
    if (data) {
      return JSON.parse(data) as HotelData;
    }
  }

  public set(data: HotelData) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  public clear() {
    localStorage.removeItem(this.key);
  }
}

// ここだ
export default function StorageTest() {
  const [hotelData, setHotelData] = useState<HotelData>();

  useEffect(() => {
    // ここで localStorage からデータを取得して、
    const data = new HotelDataRepo().get();
    // undefined チェック (初めてページを開いたときも undefined になるね)
    if (!data) return;

    // それぞれの値が undefined でなければ、state にセットする
    if (data.roomNumber && data.className && data.personName) {
      setHotelData(data);
    } else {
      console.error("[x] data in `hotel_data` of localStorage is invalid");
    }
  }, []);

  function handleChanged(
    // key: 更新したいのは, "roomNumber" or "className" or "personName" のどれですか
    key: HotelDataKey,
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const value = event.target.value;
    const newHotelData = { ...hotelData, [key]: value };
    setHotelData(newHotelData);
    new HotelDataRepo().set(newHotelData);
  }

  return (
    <div>
      <h1>Storageテスト</h1>
      <p>roomNumber: {hotelData?.roomNumber}</p>
      <p>className: {hotelData?.className}</p>
      <p>personName: {hotelData?.personName}</p>

      <section>
        <input
          type="number"
          value={hotelData?.roomNumber ?? ""}
          placeholder="部屋番号"
          onChange={(event) => handleChanged("roomNumber", event)}
        />
        <br />
        <input
          type="text"
          value={hotelData?.className ?? ""}
          placeholder="クラス名"
          onChange={(event) => handleChanged("className", event)}
        />
        <br />
        <input
          type="text"
          value={hotelData?.personName ?? ""}
          placeholder="お名前"
          onChange={(event) => handleChanged("personName", event)}
        />
      </section>
    </div>
  );
}
