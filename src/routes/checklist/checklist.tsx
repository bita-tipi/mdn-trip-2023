import { useEffect, useState } from "react";
import {} from "assets/storage";
import "./checklist.css";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@mui/material";
import _ from "lodash";
import { getImg } from "model/assets";

const imgChecklist = getImg("checklist-logo.png");
const v = getImg("v.svg");

function Check() {
    const [checkListText, setText] = useState("");

    useEffect(() => {
        getClick();
    }, []);

    const handleChange = (e: any) => {
    };

    const getClick = () => {
    };

    function ListSelect(index: number) {
        const copiedList = _.cloneDeep(isListOpen);
        copiedList[index] = !copiedList[index];
        updateIsListOpen(copiedList);
    }

    const [isListOpen, updateIsListOpen] = useState([true, false, false]);

    return (
        <div className="checklist-body">
            <div>
                <h1 className="list-title">
                    <img src={imgChecklist} className="logo" />
                    持ち物リスト
                </h1>
                <div
                    className="list-title"
                    onClick={() => {
                        ListSelect(0);
                    }}
                >
                    必要な持ち物
                </div>
                {isListOpen[0] ? (
                    <div className="my-list-pulldown">
                        <div className="List-flexSet">
                            <div className="List-bar"></div>
                            <div>
                                <div className="List-OneSet">
                                    <Checkbox />
                                    <p>マスク</p>
                                </div>
                                <div className="List-OneSet">
                                    <Checkbox />
                                    <p>雨具</p>
                                </div>
                                <div className="List-OneSet">
                                    <Checkbox />
                                    <p>常備薬</p>
                                </div>
                            </div>
                        </div>
                        <div className="List-flexSet">
                            <div className="List-bar"></div>
                            <div>
                                <div className="List-OneSet">
                                    <Checkbox />
                                    <p>筆記用具</p>
                                </div>
                                <div className="List-OneSet">
                                    <Checkbox />
                                    <p>現金(昼食代含む)</p>
                                </div>
                                <div className="List-OneSet">
                                    <Checkbox />
                                    <p>着替え</p>
                                </div>
                            </div>
                        </div>
                        <div className="List-flexSet">
                            <div className="List-bar"></div>
                            <div>
                                <div className="List-OneSet">
                                    <Checkbox />
                                    <p>生徒手帳</p>
                                </div>
                                <div className="List-OneSet">
                                    <Checkbox />
                                    <p></p>
                                </div>
                                <div className="List-OneSet">
                                    <Checkbox />
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="List-closeAnimation">
                        <div className="My-List-pulldown">
                            <div className="List-flexSet">
                                <div className="List-bar"></div>
                                <div>
                                    <div className="List-OneSet">
                                        <Checkbox />
                                        <p>財布</p>
                                    </div>
                                    <div className="List-OneSet">
                                        <Checkbox />
                                        <p>財布</p>
                                    </div>
                                    <div className="List-OneSet">
                                        <Checkbox />
                                        <p>財布</p>
                                    </div>
                                </div>
                            </div>
                            <div className="List-flexSet">
                                <div className="List-bar"></div>
                                <div>
                                    <div className="List-OneSet">
                                        <Checkbox />
                                        <p>財布</p>
                                    </div>
                                    <div className="List-OneSet">
                                        <Checkbox />
                                        <p>財布</p>
                                    </div>
                                    <div className="List-OneSet">
                                        <Checkbox />
                                        <p>財布</p>
                                    </div>
                                </div>
                            </div>
                            <div className="List-flexSet">
                                <div className="List-bar"></div>
                                <div>
                                    <div className="List-OneSet">
                                        <Checkbox />
                                        <p>財布</p>
                                    </div>
                                    <div className="List-OneSet">
                                        <Checkbox />
                                        <p>財布</p>
                                    </div>
                                    <div className="List-OneSet">
                                        <Checkbox />
                                        <p>財布</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div
                    className="list-title"
                    onClick={() => {
                        ListSelect(2);
                    }}
                >
                    あるとべんりなもの
                </div>
                {isListOpen[2] ? (
                    <div className="my-list-pulldown">
                        <ul>
                            <Checkbox />
                            <input
                                type="text"
                                value={checkListText}
                                onChange={handleChange}
                            />
                        </ul>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
}
export default Check;
