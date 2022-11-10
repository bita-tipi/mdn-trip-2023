import React, { useState } from "react";
import _ from "lodash";
import "./room.css";

function RoomHTML() {
  const [isListOpen, updateIsListOpen] = useState([
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

  function ListSelect(index: number) {
    const copiedList = _.cloneDeep(isListOpen);
    copiedList[index] = !copiedList[index];
    updateIsListOpen(copiedList);
  }
  return (
    <body>
      <header>
        <h1>ホテル名</h1>
        <p>roomHTML</p>
      </header>
      <main>
        <h2>クラス名・担任</h2>
        <section>
          <ul className="tyui">
            <h2 onClick={() => ListSelect(1)} className="heya">
              111
            </h2>
            {isListOpen[1] ? (
              <div className="pulldown">
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
              </div>
            ) : (
              <></>
            )}
          </ul>
          <ul className="tyui">
            <h2 onClick={() => ListSelect(2)} className="heya">
              112
            </h2>
            {isListOpen[2] ? (
              <div className="pulldown">
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
              </div>
            ) : (
              <></>
            )}
          </ul>
          <ul className="tyui">
            <h2 onClick={() => ListSelect(3)} className="heya">
              113
            </h2>
            {isListOpen[3] ? (
              <div className="pulldown">
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
              </div>
            ) : (
              <></>
            )}
          </ul>
          <ul className="tyui">
            <h2 onClick={() => ListSelect(4)} className="heya">
              114
            </h2>
            {isListOpen[4] ? (
              <div className="pulldown">
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
              </div>
            ) : (
              <></>
            )}
          </ul>
          <ul className="tyui">
            <h2 onClick={() => ListSelect(5)} className="heya">
              115
            </h2>
            {isListOpen[5] ? (
              <div className="pulldown">
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
              </div>
            ) : (
              <></>
            )}
          </ul>
          <ul className="tyui">
            <h2 onClick={() => ListSelect(6)} className="heya">
              116
            </h2>
            {isListOpen[6] ? (
              <div className="pulldown">
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
              </div>
            ) : (
              <></>
            )}
          </ul>
          <ul className="tyui">
            <h2 onClick={() => ListSelect(7)} className="heya">
              117
            </h2>
            {isListOpen[7] ? (
              <div className="pulldown">
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
              </div>
            ) : (
              <></>
            )}
          </ul>
          <ul className="tyui">
            <h2 onClick={() => ListSelect(8)} className="heya">
              118
            </h2>
            {isListOpen[8] ? (
              <div className="pulldown">
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
              </div>
            ) : (
              <></>
            )}
          </ul>
          <ul className="tyui">
            <h2 onClick={() => ListSelect(9)} className="heya">
              119
            </h2>
            {isListOpen[9] ? (
              <div className="pulldown">
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
              </div>
            ) : (
              <></>
            )}
          </ul>
          <ul className="tyui">
            <h2 onClick={() => ListSelect(10)} className="heya">
              120
            </h2>
            {isListOpen[10] ? (
              <div className="pulldown">
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
                <li>名前</li>
              </div>
            ) : (
              <></>
            )}
          </ul>
        </section>
        <section>
          <h2>○月○日</h2>
          <p>夕食○時○分 場所〇〇</p>
          <p>点呼 ○時○分</p>
          <p>消灯 ○時○分</p>
        </section>
        <section>
        <h2>○月○日</h2>
          <p>起床 ○時○分</p>
          <p>朝食 ○時○分 場所〇〇</p>
          <p>点呼 ○時○分</p>
          <p>消灯 ○時○分</p>
        </section>
        <section></section>
        <h2>○月○日</h2>
          <p>起床 ○時○分</p>
          <p>朝食 ○時○分 場所〇〇</p>
          <p>点呼 ○時○分</p>
          <p>消灯 ○時○分</p>
        <section>
        <h2>○月○日</h2>
          <p>起床 ○時○分</p>
          <p>朝食 ○時○分 場所〇〇</p>
          <p>集合 ○時○分</p>
          <p>出発 ○時○分</p>
        </section>
      </main>
    </body>
  );
}

export default RoomHTML;
