import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { CLASS, PassClass, PassSuccess } from "../../assets/atom";
import "./contents.css";
import classBox from "../../assets/img/list-box.svg";
import classListBox from "../../assets/img/list-box-class.svg";
import checkbox from "../../assets/img/check-box.png";
import _ from "lodash";

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
    const [isClicked, upDateIsClicked] = useState([true, false]);
    const [isClickedClass, upDateIsClickedClass] = useState([
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);
    let TF = false;

    function IsClicked(index: number) {
        const copiedList = _.cloneDeep(isClicked);
        for (let i = 0; i < 2; i++) {
            copiedList[i] = false;
        }
        copiedList[index] = true;
        upDateIsClicked(copiedList);
    }

    function IsClickedClass(index: number) {
        const copiedListclass = _.cloneDeep(isClickedClass);
        for (let i = 0; i < 15; i++) {
            copiedListclass[i] = false;
            console.log("adw");
        }
        copiedListclass[index] = true;
        upDateIsClickedClass(copiedListclass);
    }

    function handleOnClick(): void {
        SetPassword(TF);
        updatePassSuccessData(TF);
    }

    return (
        <div className="contents-background">
            <img
                src={classBox}
                onClick={() => setIsListOpen(!isListOpen)}
                className="contents-pull-box"
            />
            {isListOpen ? (
                <ul className="select_ul">
                    {isClicked[0] ? (
                        <button
                            className="contents-check-box-clicked"
                            onClick={() => {
                                SetCheck(true);
                                SetCheckName("普通科");
                                IsClicked(0);
                            }}
                        >
                            普通科
                        </button>
                    ) : (
                        <button
                            className="contents-check-box"
                            onClick={() => {
                                SetCheck(true);
                                SetCheckName("普通科");
                                IsClicked(0);
                            }}
                        >
                            普通科
                        </button>
                    )}
                    {isClicked[1] ? (
                        <button
                            className="contents-check-box-clicked"
                            onClick={() => {
                                SetCheck(false);
                                SetCheckName("専門科");
                                IsClicked(1);
                            }}
                        >
                            専門科
                        </button>
                    ) : (
                        <button
                            className="contents-check-box"
                            onClick={() => {
                                SetCheck(false);
                                SetCheckName("専門科");
                                IsClicked(1);
                            }}
                        >
                            専門科
                        </button>
                    )}
                </ul>
            ) : (
                <div></div>
            )}
            <div>
                <img
                    src={classListBox}
                    onClick={() => setIsListOpen2(!isListOpen2)}
                    className="contents-pull-box"
                />
                {isListOpen2 ? (
                    <div>
                        {" "}
                        {Check ? (
                            <ul className="select_ul">
                                {isClickedClass[0] ? (
                                    <button
                                        className="contents-check-box-clicked"
                                        onClick={() => {
                                            SetClassDate(g2a);
                                            SetClassName("G2A");
                                            updatePassClassData(CLASS.G2A);
                                            IsClickedClass(0);
                                        }}
                                    >
                                        G2A
                                    </button>
                                ) : (
                                    <button
                                        className="contents-check-box"
                                        onClick={() => {
                                            SetClassDate(g2a);
                                            SetClassName("G2A");
                                            updatePassClassData(CLASS.G2A);
                                            IsClickedClass(0);
                                        }}
                                    >
                                        G2A
                                    </button>
                                )}
                                {isClickedClass[1] ? (
                                    <button
                                        className="contents-check-box-clicked"
                                        onClick={() => {
                                            SetClassDate(g2b);
                                            SetClassName("G2B");
                                            updatePassClassData(CLASS.G2B);
                                            IsClickedClass(1);
                                        }}
                                    >
                                        G2B
                                    </button>
                                ) : (
                                    <button
                                        className="contents-check-box"
                                        onClick={() => {
                                            SetClassDate(g2b);
                                            SetClassName("G2B");
                                            updatePassClassData(CLASS.G2B);
                                            IsClickedClass(1);
                                        }}
                                    >
                                        G2B
                                    </button>
                                )}
                                {isClickedClass[2] ? (
                                    <button
                                        className="contents-check-box-clicked"
                                        onClick={() => {
                                            SetClassDate(g2c);
                                            SetClassName("G2C");
                                            updatePassClassData(CLASS.G2C);
                                            IsClickedClass(2);
                                        }}
                                    >
                                        G2C
                                    </button>
                                ) : (
                                    <button
                                        className="contents-check-box"
                                        onClick={() => {
                                            SetClassDate(g2c);
                                            SetClassName("G2C");
                                            updatePassClassData(CLASS.G2C);
                                            IsClickedClass(2);
                                        }}
                                    >
                                        G2C
                                    </button>
                                )}
                            </ul>
                        ) : (
                            <ul className="select_ul">
                                {isClickedClass[3] ? (
                                    <button
                                        className="contents-check-box-clicked"
                                        onClick={() => {
                                            SetClassDate(j2a);
                                            SetClassName("J2A");
                                            updatePassClassData(CLASS.J2A);
                                            IsClickedClass(3);
                                        }}
                                    >
                                        J2A
                                    </button>
                                ) : (
                                    <button
                                        className="contents-check-box"
                                        onClick={() => {
                                            SetClassDate(j2a);
                                            SetClassName("J2A");
                                            updatePassClassData(CLASS.J2A);
                                            IsClickedClass(3);
                                        }}
                                    >
                                        J2A
                                    </button>
                                )}
                                {isClickedClass[4] ? (
                                    <button
                                        className="contents-check-box-clicked"
                                        onClick={() => {
                                            SetClassDate(j2b);
                                            SetClassName("J2B");
                                            updatePassClassData(CLASS.J2B);
                                            IsClickedClass(4);
                                        }}
                                    >
                                        J2B
                                    </button>
                                ) : (
                                    <button
                                        className="contents-check-box"
                                        onClick={() => {
                                            SetClassDate(j2b);
                                            SetClassName("J2B");
                                            updatePassClassData(CLASS.J2B);
                                            IsClickedClass(4);
                                        }}
                                    >
                                        J2B
                                    </button>
                                )}
                                {isClickedClass[5] ? (
                                    <button
                                        className="contents-check-box-clicked"
                                        onClick={() => {
                                            SetClassDate(t2a);
                                            SetClassName("T2A");
                                            updatePassClassData(CLASS.T2A);
                                            IsClickedClass(5);
                                        }}
                                    >
                                        T2B
                                    </button>
                                ) : (
                                    <button
                                        className="contents-check-box"
                                        onClick={() => {
                                            SetClassDate(t2a);
                                            SetClassName("T2A");
                                            updatePassClassData(CLASS.T2A);
                                            IsClickedClass(5);
                                        }}
                                    >
                                        T2B
                                    </button>
                                )}
                            </ul>
                        )}
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
            <div>
                {Text === ClassDate ? (TF = true) : (TF = false)}
                {password ? <p></p> : <p>missing</p>}
                <p className="contents-text-pass">password</p>
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
                        決定
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Contents;
