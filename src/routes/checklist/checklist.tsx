import { useEffect, useState } from "react";
import { KEYS, setItem, getItem, removeItem } from "assets/localstorage";
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
  const [localStorageIndex, upDataLocalStorageIndex] = useState(0);

  useEffect(() => {
    if (localStorageIndex == 1) {
      setClick();
      getClick();
    } else {
      getClick();
      setClick();
    }
    upDataLocalStorageIndex(1);
  }, [text]);

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
          自分だけの持ち物
        </div>
        {isListOpen[2] ? (
          <div className="my-list-pulldown">
            <ul>
              <Checkbox />
              <input type="text" value={text} onChange={handleChange} />
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
