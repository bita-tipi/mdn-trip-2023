import React, { useState } from "react";
import "./attention.css";
import _ from "lodash";
import { getImg } from "model/assets";

const imgGembakuDome = getImg("attention_genbakudorm.svg");
const imgTemple = getImg("attention_temple.svg");

function Attention() {
    const [isListOpen, updateIsListOpen] = useState([
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
    ]);

    function ListSelect(index: number) {
        const copiedList = _.cloneDeep(isListOpen);
        copiedList[index] = !copiedList[index];
        updateIsListOpen(copiedList);
    }

    return (
        <div className="attentionBody">
            <div className="attentionLine"></div>
            <div>
                <ul className="tyui">
                    <h2 onClick={() => ListSelect(0)} className="tyuuititle">
                        <div className="arrow-character">v</div>
                        &emsp;行動
                    </h2>
                    {isListOpen[0] ? (
                        <div className="pulldown explanation-container">
                            <div className="attentiontext">
                                <li>
                                    翼を持たずに生まれてきたのなら、翼をはやすためにどんな障害も乗り越えなさい{" "}
                                </li>
                                <li>
                                    追いかけ続ける勇気さえあれば、夢は必ず叶います{" "}
                                </li>
                                <li>
                                    時に、バラバラに壊れてしまうこともあるかもしれません。でもそのおかげで、それ以上に良いことが訪れるんです
                                </li>
                                <li>
                                    もし飛べないなら走ればいい。走れないのなら歩けばいい。歩けないのであれば、這っていけばいい。何があっても前に進み続けなければならなのです
                                </li>
                                <li>
                                    時には、問いが複雑になっているだけで、答えはごくシンプルなことだったりします
                                </li>
                                <li>
                                    世の中には辛いことがたくさんありますが、それに打ち勝つことでも溢れています
                                </li>
                            </div>
                            <img src={imgGembakuDome} />
                        </div>
                    ) : (
                        <></>
                    )}
                </ul>

                <ul className="tyui">
                    <h2 onClick={() => ListSelect(1)} className="tyuuititle">
                        <div className="arrow-character">v</div>
                        &emsp;服装
                    </h2>
                    {isListOpen[1] ? (
                        <div className="pulldown explanation-container">
                            <div className="attentiontext">
                                <li>
                                    集団の秩序を乱したり、他の人の迷惑になる自分勝手な行動をしない。
                                </li>
                                <li>
                                    集合や点呼は5分前集合を守り、
                                    速やかに行動する。
                                </li>
                                <li>できるだけ全員がマスクを使用する</li>
                                <li>
                                    食事、入浴、
                                    就寝時以外は終日マスクを着用すること。
                                </li>
                                <li>
                                    朝食前と夕食後に検温して、
                                    発熱や体調不良があれば必ず担任の先生に連絡すること。
                                </li>
                                <li>
                                    ホテルや訪問施設などでは、可能な範囲で密をさけるようにすること。
                                </li>
                                <li>
                                    食事の前後や訪問先では、
                                    消毒や手洗いを徹底すること。
                                </li>
                                <li>
                                    食事は前を向いて静かに食べる。
                                    会話は控えること
                                </li>
                                <li>
                                    バスや新幹線の車内は原則飲食禁止とする。
                                    (水分補給のみ可)
                                </li>
                            </div>
                            <img src={imgTemple} />
                        </div>
                    ) : (
                        <></>
                    )}
                </ul>
                <ul className="tyui">
                    <h2 onClick={() => ListSelect(2)} className="tyuuititle">
                        <div className="arrow-character">v</div>
                        &emsp;持ち物
                    </h2>
                    {isListOpen[2] ? (
                        <div className="pulldown explanation-container">
                            <div className="attentiontext">
                                <li>
                                    {" "}
                                    感染者あああと他の同居者の部屋を可能な限り分ける{" "}
                                </li>
                                <li>
                                    感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする{" "}
                                </li>
                                <li>できるだけ全員がマスクを使用する</li>
                                <li>小まめにうがい・手洗いをする</li>
                                <li>いいいいいいいいい</li>
                                <li>いいいいいいいいい</li>
                            </div>
                            <img src={imgTemple} />
                        </div>
                    ) : (
                        <></>
                    )}
                </ul>

                <ul className="tyui">
                    <h2 onClick={() => ListSelect(3)} className="tyuuititle">
                        <div className="arrow-character">v</div>
                        &emsp;新幹線・バス
                    </h2>
                    {isListOpen[3] ? (
                        <div className="pulldown explanation-container">
                            <div className="attentiontext">
                                <li>
                                    {" "}
                                    感染者あああと他の同居者の部屋を可能な限り分ける{" "}
                                </li>
                                <li>
                                    感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする{" "}
                                </li>
                                <li>できるだけ全員がマスクを使用する</li>
                                <li>小まめにうがい・手洗いをする</li>
                                <li>いいいいいいいいい</li>
                                <li>いいいいいいいいい</li>
                            </div>
                            <img src={imgTemple} />
                        </div>
                    ) : (
                        <></>
                    )}
                </ul>
                <ul className="tyui">
                    <h2 onClick={() => ListSelect(4)} className="tyuuititle">
                        <div className="arrow-character">v</div>
                        &emsp;対トル
                    </h2>
                    {isListOpen[4] ? (
                        <div className="pulldown explanation-container">
                            <div className="attentiontext">
                                <li>
                                    {" "}
                                    感染者あああと他の同居者の部屋を可能な限り分ける{" "}
                                </li>
                                <li>
                                    感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする{" "}
                                </li>
                                <li>できるだけ全員がマスクを使用する</li>
                                <li>小まめにうがい・手洗いをする</li>
                                <li>いいいいいいいいい</li>
                                <li>いいいいいいいいい</li>
                            </div>
                            <img src={imgTemple} />
                        </div>
                    ) : (
                        <></>
                    )}
                </ul>
                <ul className="tyui">
                    <h2 onClick={() => ListSelect(5)} className="tyuuititle">
                        <div className="arrow-character">v</div>
                        &emsp;班長・部屋長
                    </h2>
                    {isListOpen[5] ? (
                        <div className="pulldown explanation-container">
                            <div className="attentiontext">
                                <li>
                                    {" "}
                                    感染者あああと他の同居者の部屋を可能な限り分ける{" "}
                                </li>
                                <li>
                                    感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする{" "}
                                </li>
                                <li>できるだけ全員がマスクを使用する</li>
                                <li>小まめにうがい・手洗いをする</li>
                                <li>いいいいいいいいい</li>
                                <li>いいいいいいいいい</li>
                            </div>
                            <img src={imgTemple} />
                        </div>
                    ) : (
                        <></>
                    )}
                </ul>
                <ul className="tyui">
                    <h2 onClick={() => ListSelect(6)} className="tyuuititle">
                        <div className="arrow-character">v</div>
                        &emsp;欠席
                    </h2>
                    {isListOpen[6] ? (
                        <div className="pulldown explanation-container">
                            <div className="attentiontext">
                                <li>
                                    {" "}
                                    感染者あああと他の同居者の部屋を可能な限り分ける{" "}
                                </li>
                                <li>
                                    感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする{" "}
                                </li>
                                <li>できるだけ全員がマスクを使用する</li>
                                <li>小まめにうがい・手洗いをする</li>
                                <li>いいいいいいいいい</li>
                                <li>いいいいいいいいい</li>
                            </div>
                            <img src={imgTemple} />
                        </div>
                    ) : (
                        <></>
                    )}
                </ul>
                <ul className="tyui">
                    <h2 onClick={() => ListSelect(7)} className="tyuuititle">
                        <div className="arrow-character">v</div>
                        &emsp;宿泊
                    </h2>
                    {isListOpen[7] ? (
                        <div className="pulldown explanation-container">
                            <div className="attentiontext">
                                <li>
                                    {" "}
                                    感染者あああと他の同居者の部屋を可能な限り分ける{" "}
                                </li>
                                <li>
                                    感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする{" "}
                                </li>
                                <li>できるだけ全員がマスクを使用する</li>
                                <li>小まめにうがい・手洗いをする</li>
                                <li>いいいいいいいいい</li>
                                <li>いいいいいいいいい</li>
                            </div>
                            <img src={imgTemple} />
                        </div>
                    ) : (
                        <></>
                    )}
                </ul>
                <ul className="tyui">
                    <h2 onClick={() => ListSelect(8)} className="tyuuititle">
                        <div className="arrow-character">v</div>
                        &emsp;スマホ
                    </h2>
                    {isListOpen[8] ? (
                        <div className="pulldown explanation-container">
                            <div className="attentiontext">
                                <li>
                                    {" "}
                                    感染者あああと他の同居者の部屋を可能な限り分ける{" "}
                                </li>
                                <li>
                                    感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする{" "}
                                </li>
                                <li>できるだけ全員がマスクを使用する</li>
                                <li>小まめにうがい・手洗いをする</li>
                                <li>いいいいいいいいい</li>
                                <li>いいいいいいいいい</li>
                            </div>
                            <img src={imgTemple} />
                        </div>
                    ) : (
                        <></>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Attention;
