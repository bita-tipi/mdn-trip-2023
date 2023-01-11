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
        <div className="hizuke">
          <h1>一日目</h1>
          <h1>二日目</h1>
          <h1>三日目</h1>
        </div>
      </header>
      <main>
        <section>
          <p>ホテル</p>
          <h3 className="hoterunonamae">〇〇ホテル</h3>
        </section>
        <section>
          <p>部屋</p>
          <div className="heyabanngou">
            <h3 className="hoterunonamae">１１１</h3>
            <p>号室</p>
          </div>
        </section>
        <section>
          <div className="heyabanngou">
            <p>クラス</p>
            <h3 className="hoterunonamae">G2D</h3>
          </div>
          <div className="heyabanngou">
            <p>名前</p>
            <h3 className="hoterunonamae">中村優馬</h3>
          </div>
          <div>
            <p>メンバー</p>
            <h3 className="mennba-nowaku">・メンバーの名前 ・メンバーの名前</h3>
          </div>
        </section>
      </main>
    </body>
  );
}

export default RoomHTML;
