import React, { useEffect, useState } from "react";

// src/assets/data/ClassName.ts とか？
export type HotelData = {
  roomNumberDay1?: number;
  roomNumberDay2?: number;
  roomNumberDay3?: number;
  className?: string;
  personName?: string;
  member1Day1?:string;
  member2Day1?:string;
  member3Day1?:string;
  member1Day2?:string;
  member2Day2?:string;
  member3Day2?:string;
  member1Day3?:string;
  member2Day3?:string;
  member3Day3?:string;
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

