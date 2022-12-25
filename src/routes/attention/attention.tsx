import React, { useState } from "react";
import "./attention.css";
import _ from "lodash";
import genbakudrom from "../../assets/img/attention_genbakudorm.svg";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Attention() {

    const [isListOpen, updateIsListOpen] = useState([false, false, false, false, false, false, false]);

    function ListSelect(index: number) {
        const copiedList = _.cloneDeep(isListOpen);
        copiedList[index] = !copiedList[index];
        updateIsListOpen(copiedList);
    }

    return (
        <body >
            <div>
                <p>注意事項pic</p>
            </div>
            <div>
                <ul className="tyui">
                    <h2 onClick={() => (ListSelect(0))} className="tyuuititle">ころなについて</h2>
                    {isListOpen[0] ?
                        <div className="pulldown">
                            <li>感染者と他の同居者の部屋を可能な限り分ける</li>
                            <li>感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする</li>
                            <li>できるだけ全員がマスクを使用する</li>
                            <li>小まめにうがい・手洗いをする</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                        </div> : <></>}
                </ul>

                <ul className="tyui">
                    <h2 onClick={() => (ListSelect(1))} className="tyuuititle">ドコモ光ご利用時</h2>
                    {isListOpen[1] ?
                        <div className="pulldown">
                            <li>事前に機器を送付させていただく場合、開通工事当日の午前9時までにお客さまご自身で機器の接続をお願いいたします</li>
                            <li>ご予約いただいた工事日を経過しても機器の接続が確認できない場合当社よりお客さまへ機器接続のお願いをご連絡することがあります。</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                        </div> : <></>}
                </ul>
                <ul className="tyui">
                    <h2 onClick={() => (ListSelect(2))} className="tyuuititle">服装について</h2>
                    {isListOpen[2] ?
                        <div className="pulldown">
                            <li>あああああああああ</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                        </div> : <></>}
                </ul>

                <ul className="tyui">
                    <h2 onClick={() => (ListSelect(3))} className="tyuuititle">ヒョウドウについて</h2>
                    {isListOpen[3] ?
                        <div className="pulldown">
                            <li>あああああああああ</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                        </div> : <></>}
                </ul>
                <ul className="tyui">
                    <h2 onClick={() => (ListSelect(4))} className="tyuuititle">ゆうまについて</h2>
                    {isListOpen[4] ?
                        <div className="pulldown">
                            <li>あああああああああ</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                        </div> : <></>}
                </ul>
                <ul className="tyui">
                    <h2 onClick={() => (ListSelect(5))} className="tyuuititle">ながのについて</h2>
                    {isListOpen[5] ?
                        <div className="pulldown">
                            <li>あああああああああ</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                        </div> : <></>}
                </ul>
                <ul className="tyui">
                    <h2 onClick={() => (ListSelect(6))} className="tyuuititle">しばたについて</h2>
                    {isListOpen[6] ?
                        <div className="pulldown">
                            <li>あああああああああ</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                            <li>いいいいいいいいい</li>
                        </div> : <></>}
                </ul>

            </div>
            <div>
                <img src={genbakudrom} />
           </div>
        </body>
    );
}

export default Attention;
