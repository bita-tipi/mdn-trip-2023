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
        <body className="attentionBody">
        
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
                                <li>翼を持たずに生まれてきたのなら、翼をはやすためにどんな障害も乗り越えなさい  </li>
                                <li>追いかけ続ける勇気さえあれば、夢は必ず叶います </li>
                                <li>時に、バラバラに壊れてしまうこともあるかもしれません。でもそのおかげで、それ以上に良いことが訪れるんです</li>
                                <li>もし飛べないなら走ればいい。走れないのなら歩けばいい。歩けないのであれば、這っていけばいい。何があっても前に進み続けなければならなのです</li>
                                <li>時には、問いが複雑になっているだけで、答えはごくシンプルなことだったりします</li>
                                <li>世の中には辛いことがたくさんありますが、それに打ち勝つことでも溢れています</li>
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
                                <li> 私たちがここにいるのには理由があります。 松明を掲げて、暗闇の中にいる人々を導く役割があると信じています  </li>
                                <li>人間が授かった大いなる才能、それは共感する力です </li>
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
                    <h2 onClick={() => ListSelect(2)} className="tyuuititle">
                        <div className="arrow-character">v</div>
                        &emsp;持ち物
                    </h2>
                    {isListOpen[2] ? (
                        <div className="pulldown explanation-container">
                              <div className="attentiontext">
                                <li> 感染者あああと他の同居者の部屋を可能な限り分ける  </li>
                                <li>感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする </li>
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
                                <li> 感染者あああと他の同居者の部屋を可能な限り分ける  </li>
                                <li>感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする </li>
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
                                <li> 感染者あああと他の同居者の部屋を可能な限り分ける  </li>
                                <li>感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする </li>
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
                                <li> 感染者あああと他の同居者の部屋を可能な限り分ける  </li>
                                <li>感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする </li>
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
                                <li> 感染者あああと他の同居者の部屋を可能な限り分ける  </li>
                                <li>感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする </li>
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
                                <li> 感染者あああと他の同居者の部屋を可能な限り分ける  </li>
                                <li>感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする </li>
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
                                <li> 感染者あああと他の同居者の部屋を可能な限り分ける  </li>
                                <li>感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする </li>
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
        </body>
    );
}

export default Attention;
