import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { CLASS, PassClass, PassSuccess } from "../../assets/atom";
import "./contents.css";
import classBox from "../../assets/img/list-box.png";

function Contents() {
    const updatePassClassData = useSetRecoilState(PassClass);
    const updatePassSuccessData = useSetRecoilState(PassSuccess);

    const g2a = "1111";
    const g2b = "2222";
    const g2c = "3333";
    const j2a = "4444";
    const j2b = "5555";
    const t2a = "5454";
    const [isListOpen, setIsListOpen] = useState(false);
    const [isListOpen2, setIsListOpen2] = useState(false);
    const [Check, SetCheck] = useState(true);
    const [password, SetPassword] = useState(true);
    const [ClassDate, SetClassDate] = useState("null");
    const [ClassName, SetClassName] = useState("");
    const [CheckName, SetCheckName] = useState("");
    const [Text, SetText] = useState("");
    const [isClickedsetIsclicked] = useState(true);
    let TF = false;

    function handleOnClick(): void {
        SetPassword(TF);
        updatePassSuccessData(TF);
    }

    return (
        <div className="contents-background">
            <p
                onClick={() => setIsListOpen(!isListOpen)}
                className="contents-pull-box"
            >
                学科
            </p>

            {isListOpen ? (
                <ul className="select_ul">
                    <button
                        className="contents-check-box"
                        onClick={() => {
                            SetCheck(true);
                            SetCheckName("普通科");
                        }}
                    >
                        普通科
                    </button>
                    <button
                        className="contents-check-box"
                        onClick={() => {
                            SetCheck(false);
                            SetCheckName("専門科");
                        }}
                    >
                        専門科
                    </button>
                </ul>
            ) : (
                <div></div>
            )}
            <div>
                <p
                    onClick={() => setIsListOpen2(!isListOpen2)}
                    className="contents-pull-box"
                >
                    クラス
                </p>
                {isListOpen2 ? (
                    <div>
                        {" "}
                        {Check ? (
                            <ul className="select_ul">
                                <button
                                    className="contents-check-box"
                                    onClick={() => {
                                        SetClassDate(g2a);
                                        SetClassName("G2A");
                                        updatePassClassData(CLASS.G2A);
                                    }}
                                >
                                    G2A
                                </button>
                                <button
                                    className="contents-check-box"
                                    onClick={() => {
                                        SetClassDate(g2b);
                                        SetClassName("G2B");
                                        updatePassClassData(CLASS.G2B);
                                    }}
                                >
                                    G2B
                                </button>
                                <button
                                    className="contents-check-box"
                                    onClick={() => {
                                        SetClassDate(g2c);
                                        SetClassName("G2C");
                                        updatePassClassData(CLASS.G2C);
                                    }}
                                >
                                    G2C
                                </button>
                            </ul>
                        ) : (
                            <ul className="select_ul">
                                <button
                                    className="contents-check-box"
                                    onClick={() => {
                                        SetClassDate(j2a);
                                        SetClassName("J2A");
                                        updatePassClassData(CLASS.J2A);
                                    }}
                                >
                                    J2A
                                </button>
                                <button
                                    className="contents-check-box"
                                    onClick={() => {
                                        SetClassDate(j2b);
                                        SetClassName("J2B");
                                        updatePassClassData(CLASS.J2B);
                                    }}
                                >
                                    J2B
                                </button>
                                <button
                                    className="contents-check-box"
                                    onClick={() => {
                                        SetClassDate(t2a);
                                        SetClassName("T2A");
                                        updatePassClassData(CLASS.T2A);
                                    }}
                                >
                                    T2A
                                </button>
                            </ul>
                        )}
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
            {ClassName}
            <div>
                {Text === ClassDate ? (TF = true) : (TF = false)}
                {password ? <p></p> : <p>missing</p>}
                <input
                    maxLength={Number(4)}
                    value={Text}
                    type="number"
                    onChange={(event) => SetText(event.target.value)}
                    className="contents-text-box"
                ></input>
                <Link to={TF ? "/room" : "/contents"}>
                    <button
                        className="contents-button-box"
                        onClick={() => handleOnClick()}
                    >
                        確定
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Contents;
