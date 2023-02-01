import { useEffect, useState } from "react";
import {} from "assets/storage";
import "./checklist.css";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@mui/material";
import _ from "lodash";
import { getImg } from "model/assets";

const imgChecklist = getImg("checklist-logo.svg");
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
                <h1 className="list-MainTitle">
                    <img src={imgChecklist} className="logo" />
                    持ち物リスト
                </h1>
                <div
                    className="list-title"
                >
                    必要な持ち物
                </div>
                    <div className="my-list-pulldown">
                        <div className="List-bar"></div>
                        <div className="List-flexSet">
                            <div>
                                <div className="List-OneSet">
                                    <Checkbox />
                                    <p>マスク</p>
                                </div>
                                <div className="List-OneSet">
                                    <Checkbox />
                                    <p>雨具</p>
                                </div>
                            </div>
                        </div>
                        <div className="List-flexSet">
                                <div className="List-OneSet">
                                    <Checkbox />
                                    <p>筆記用具</p>
                                </div>
                                <div className="List-OneSet">
                                    <Checkbox />
                                    <p>着替え</p>
                                </div>
                        </div>
                        <div className="List-flexSet">
                                <div className="List-OneSet">
                                    <Checkbox />
                                    <p>常備薬</p>
                                </div>
                                <div className="List-OneSet">
                                    <Checkbox />
                                    <p>生徒手帳</p>
                                </div>
                        </div>
                    </div>
                <div
                    className="list-title"
                >
                    あるとべんりなもの
                </div>
                     <div className="my-list-pulldown">
                     <div className="List-bar"></div>
                     <div className="List-flexSet">
                         <div>
                             <div className="List-OneSet">
                                 <Checkbox />
                                 <p>防寒具</p>
                             </div>
                             <div className="List-OneSet">
                                 <Checkbox />
                                 <p>敷物</p>
                             </div>
                         </div>
                     </div>
                     <div className="List-flexSet">
                             <div className="List-OneSet">
                                 <Checkbox />
                                 <p>ティッシュ</p>
                             </div>
                             <div className="List-OneSet">
                                 <Checkbox />
                                 <p>小型バック</p>
                             </div>
                     </div>
                     <div className="List-flexSet">
                             <div className="List-OneSet">
                                 <Checkbox />
                                 <p>ハンカチ</p>
                             </div>
                     </div>
                 </div>
            </div>
        </div>
    );
}
export default Check;
