import React from "react";
import { PassClass, PassSuccess } from "../../assets/atom";
import { useRecoilValue } from "recoil";
import RoomHTML from "./roomHTML";

function ClassRoom() {
    const currentClassData = useRecoilValue(PassClass);
    const currentSuccessData = useRecoilValue(PassSuccess);
    return (
        <div>
            {RoomHTML()}
            <p>room</p>
            <p>{currentClassData.className}</p>
            {currentSuccessData ? <p>success</p> : <p>error</p>}
        </div>
    );
}

export default ClassRoom;
