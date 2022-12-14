import { useEffect, useState } from "react";
import { KEYS, setItem, getItem, removeItem } from "assets/data/localstorage";
import "./checklist.css";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@mui/material";
import _ from "lodash";
import { getImg } from "model/assets";

const imgChecklist = getImg("checklist-logo.png");
const v = getImg("v.svg");

function Check() {
    const [text, setText] = useState("");
    const [label, setLabel] = useState("");

    useEffect(() => {
        getClick();
    }, []);

    const updateLabel = () => {
        setLabel(getItem(KEYS.SAMPLE_TEXT));
    };

    const handleChange = (e: any) => {
        setText(e.target.value);
    };

    const removeClick = () => {
        // LocalStorageの値を削除する
        removeItem(KEYS.SAMPLE_TEXT);
        updateLabel();
    };

    const setClick = () => {
        // テキストボックスの値をLocalStorageに保存する
        setItem(KEYS.SAMPLE_TEXT, text);
        updateLabel();
    };

    const getClick = () => {
        // LocalStorageの値をテキストボックスに入れる
        setText(getItem(KEYS.SAMPLE_TEXT));
        updateLabel();
    };

    function ListSelect(index: number) {
        const copiedList = _.cloneDeep(isListOpen);
        copiedList[index] = !copiedList[index];
        updateIsListOpen(copiedList);
    }

    const [isListOpen, updateIsListOpen] = useState([false, false, false]);

    return (
        <body className="checklist-body">
            <div>
                <h1 className="list-title">
                    <img src={imgChecklist} className="logo" />
                    持ち物リスト
                </h1>
                <main className="checklist-main">
                    <div className="checklist-subTitle">
                        {isListOpen[0] ? (
                            <img src={v} className="checkList-V" />
                        ) : (
                            <img src={v} className="checkList-VR" />
                        )}
                        <div>
                            <div
                                className="list-title"
                                onClick={() => {
                                    ListSelect(0);
                                }}
                            >
                                必要なもの
                            </div>
                            {isListOpen[0] ? (
                                <div className="list-pulldown">
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="制服"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="財布"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="あ"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="あ"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="あ"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="あ"
                                        />
                                    </FormGroup>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                    <div
                        className="list-title"
                        onClick={() => {
                            ListSelect(1);
                        }}
                    >
                        あると便利
                    </div>
                    {isListOpen[1] ? (
                        <div className="list-pulldown">
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="制服"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="財布"
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="あ"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="あ"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="あ"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="あ"
                                />
                            </FormGroup>
                        </div>
                    ) : (
                        <div></div>
                    )}
                    <div
                        className="list-title"
                        onClick={() => {
                            ListSelect(2);
                        }}
                    >
                        自分だけの持ち物
                    </div>
                    {isListOpen[2] ? (
                        <div className="my-list-pulldown">
                            <ul>
                                <li>
                                    <Checkbox />
                                    <input
                                        type="text"
                                        value={text}
                                        onChange={handleChange}
                                    />
                                    <button onClick={setClick}>保存する</button>
                                    <button onClick={getClick}>呼び出す</button>
                                    <button onClick={removeClick}>
                                        削除する
                                    </button>
                                </li>
                                <li>
                                    <Checkbox />
                                    <input
                                        type="text"
                                        value={text}
                                        onChange={handleChange}
                                    />
                                    <button onClick={setClick}>保存する</button>
                                    <button onClick={getClick}>呼び出す</button>
                                    <button onClick={removeClick}>
                                        削除する
                                    </button>
                                </li>
                                <li>
                                    <Checkbox />
                                    <input
                                        type="text"
                                        value={text}
                                        onChange={handleChange}
                                    />
                                    <button onClick={setClick}>保存する</button>
                                    <button onClick={getClick}>呼び出す</button>
                                    <button onClick={removeClick}>
                                        削除する
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </main>
            </div>
        </body>
    );
}
export default Check;
