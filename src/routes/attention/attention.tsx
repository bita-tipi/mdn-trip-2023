import React, { useState } from "react";
import "./attention.css";
import _ from "lodash";
import imgGembakuDome from "../../assets/img/attention_genbakudorm.svg";
import imgTemple from "../../assets/img/attention_temple.svg";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Attention() {

    const [isListOpen, updateIsListOpen] = useState([false, false, false, false, false, false, false]);

    function ListSelect(index: number) {
        const copiedList = _.cloneDeep(isListOpen);
        copiedList[index] = !copiedList[index];
        updateIsListOpen(copiedList);
    }

    return (
        <body className="attentionbody">
            <div>
                <p>注意事項pic</p>
            </div>
            <div>
                <ul className="tyui">
                    <h2 onClick={() => (ListSelect(0))} className="tyuuititle">
                        <div className="arrow-character">
                            v
                        </div>    
                        &emsp;ころなについて
                    </h2>
                    {isListOpen[0] ?
                        <div className="pulldown explanation-container">
                            <div>
                                <li>感染者と他の同居者の部屋を可能な限り分ける</li>
                                <li>感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする</li>
                                <li>できるだけ全員がマスクを使用する</li>
                                <li>小まめにうがい・手洗いをする</li>
                                <li>いいいいいいいいい</li>
                                <li>いいいいいいいいい</li>
                            </div>
                                 <img src={imgGembakuDome} />
                        </div> : <></>}
                </ul>

                <ul className="tyui">
                    <h2 onClick={() => (ListSelect(1))} className="tyuuititle">ドコモ光ご利用時</h2>
                    {isListOpen[1] ?
                        <div className="pulldown explanation-container">
                            <div>
                                <li>感染者と他の同居者の部屋を可能な限り分ける</li>
                                <li>感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする</li>
                                <li>できるだけ全員がマスクを使用する</li>
                                <li>小まめにうがい・手洗いをする</li>
                                <li>いいいいいいいいい</li>
                                <li>いいいいいいいいい</li>
                            </div>
                                 <img src={imgTemple} />
                        </div> : <></>}
                      
                </ul>
                <ul className="tyui">
                    <h2 onClick={() => (ListSelect(2))} className="tyuuititle">服装について</h2>
                    {isListOpen[2] ?
                        <div className="pulldown explanation-container">
                            <div>
                                <li>感染者と他の同居者の部屋を可能な限り分ける</li>
                                <li>感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする</li>
                                <li>できるだけ全員がマスクを使用する</li>
                                <li>小まめにうがい・手洗いをする</li>
                                <li>いいいいいいいいい</li>
                                <li>いいいいいいいいい</li>
                            </div>
                                 <img src={imgTemple} />
                        </div> : <></>}
                </ul>

                <ul className="tyui">
                    <h2 onClick={() => (ListSelect(3))} className="tyuuititle">ヒョウドウについて</h2>
                    {isListOpen[3] ?
                        <div className="pulldown explanation-container">
                            <div>
                                <li>感染者と他の同居者の部屋を可能な限り分ける</li>
                                <li>感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする</li>
                                <li>できるだけ全員がマスクを使用する</li>
                                <li>小まめにうがい・手洗いをする</li>
                                <li>いいいいいいいいい</li>
                                <li>いいいいいいいいい</li>
                            </div>
                                 <img src={imgTemple} />
                        </div> : <></>}
                </ul>
                <ul className="tyui">
                    <h2 onClick={() => (ListSelect(4))} className="tyuuititle">ゆうまについて</h2>
                    {isListOpen[4] ?
                        <div className="pulldown explanation-container">
                            <div>
                                <li>感染者と他の同居者の部屋を可能な限り分ける</li>
                                <li>感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする</li>
                                <li>できるだけ全員がマスクを使用する</li>
                                <li>小まめにうがい・手洗いをする</li>
                                <li>いいいいいいいいい</li>
                                <li>いいいいいいいいい</li>
                            </div>
                                 <img src={imgTemple} />
                        </div> : <></>}
                </ul>
                <ul className="tyui">
                    <h2 onClick={() => (ListSelect(5))} className="tyuuititle">ながのについて</h2>
                    {isListOpen[5] ?
                        <div className="pulldown explanation-container">
                            <div>
                                <li>感染者と他の同居者の部屋を可能な限り分ける</li>
                                <li>感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする</li>
                                <li>できるだけ全員がマスクを使用する</li>
                                <li>小まめにうがい・手洗いをする</li>
                                <li>いいいいいいいいい</li>
                                <li>いいいいいいいいい</li>
                            </div>
                                 <img src={imgTemple} />
                        </div> : <></>}
                </ul>
                <ul className="tyui">
                    <h2 onClick={() => (ListSelect(6))} className="tyuuititle">しばたについて</h2>
                    {isListOpen[6] ?
                        <div className="pulldown explanation-container">
                            <div>
                                <li>感染者と他の同居者の部屋を可能な限り分ける</li>
                                <li>感染者の世話をする人は、できるだけ限られた方（一人が望ましい）にする</li>
                                <li>できるだけ全員がマスクを使用する</li>
                                <li>小まめにうがい・手洗いをする</li>
                                <li>いいいいいいいいい</li>
                                <li>いいいいいいいいい</li>
                            </div>
                                 <img src={imgTemple} />
                        </div> : <></>}
                </ul>

            </div>
            
           
        </body>
    );
}

export default Attention;
