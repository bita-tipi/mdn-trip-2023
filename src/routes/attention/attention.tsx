import React, { useState } from "react";
import "./attention.css";
import _ from "lodash";
import { getImg } from "model/assets";

const base = "attention/logo";
const img = {
  kodo: getImg(`${base}/kodo.svg`),
  fukuso: getImg(`${base}/fukuso.svg`),
  mochimono: getImg(`${base}/mochimono.svg`),
  shinkansen: getImg(`${base}/shinkansen.svg`),
  hancho: getImg(`${base}/hancho.svg`),
  kesseki: getImg(`${base}/kesseki.svg`),
  shukuhaku: getImg(`${base}/shukuhaku.svg`),
  sumaho: getImg(`${base}/sumaho.svg`),
  temple: getImg("attention/temple.svg"),
};
export function Attention() {
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
            <div className="tyuititletext">&emsp;行動</div>
            <div>
              <img className="titledesign" src={img.kodo} />
            </div>
            <div className="separator"></div>
          </h2>
          {isListOpen[0] ? (
            <div className="pulldown explanation-container">
              <div className="attentiontext">
                <li>
                  集団の秩序を乱したり、他の人の迷惑になる自分勝手な行動をしない。
                </li>
                <li>集合や点呼は5分前集合を守り、速やかに行動する。</li>
                <li>できるだけ全員がマスクを使用する</li>
                <li>食事、入浴、就寝時以外は終日マスクを着用すること。</li>
                <li>
                  朝食前と夕食後に検温して発熱や体調不良があれば必ず担任の先生に連絡すること。
                </li>
                <li>
                  ホテルや訪問施設などでは、可能な範囲で密をさけるようにすること
                </li>
                <li>食事の前後や訪問先では、 消毒や手洗いを徹底すること。</li>
                <li>食事は前を向いて静かに食べる。 会話は控えること。</li>
                <li>
                  バスや新幹線の車内は原則飲食禁止とする。 (水分補給のみ可)
                </li>
              </div>
            </div>
          ) : (
            <></>
          )}
        </ul>

        <ul className="tyui">
          <div className="attention-header-container">
            <h2 onClick={() => ListSelect(1)} className="tyuuititle">
              <div className="arrow-character">v</div>
              <div className="tyuititletext">&emsp;服装</div>
              <div>
                <img className="titledesign" src={img.fukuso} />
              </div>
              <div className="separator"></div>
            </h2>
          </div>
          {isListOpen[1] ? (
            <div className="pulldown explanation-container">
              <div className="attentiontext">
                <li>
                  服装は本校指定の制服とする。 (ホテル内の私服着用は認める。)。
                </li>
                <li>
                  装飾品 (アクセサリー、華美な髪飾り等) の着用、化粧、
                  巻き髪は禁止とする。
                </li>
                <li>●靴は運動靴 (華美でないもの)が望ましい。</li>
              </div>
            </div>
          ) : (
            <></>
          )}
        </ul>
        <ul className="tyui">
          <div className="attention-header-container">
            <h2 onClick={() => ListSelect(2)} className="tyuuititle">
              <div className="arrow-character">v</div>
              <div className="tyuititletext">&emsp;持ち物</div>
              <div>
                <img className="titledesign" src={img.mochimono} />
              </div>
              <div className="separator"></div>
            </h2>
          </div>
          {isListOpen[2] ? (
            <div className="pulldown explanation-container">
              <div className="attentiontext">
                <li>
                  金銭は必要最小限にすること。
                  また、友人間での貸し借りをしないこと。
                </li>
                <li> 貴重品の管理は各自で行うこと。 </li>
                <li>
                  鞄は各自持っている旅行用鞄でよいが必ずクラス別ネームプレートをつけること。
                </li>
              </div>
            </div>
          ) : (
            <></>
          )}
        </ul>

        <ul className="tyui">
          <div className="attention-header-container">
            <h2 onClick={() => ListSelect(3)} className="tyuuititle">
              <div className="arrow-character">v</div>
              <div className="tyuititletext">&emsp;新幹線/バス</div>
              <div>
                <img className="titledesign" src={img.shinkansen} />
              </div>
              <div className="separator"></div>
            </h2>
          </div>
          {isListOpen[3] ? (
            <div className="pulldown explanation-container">
              <div className="attentiontext">
                <li>停車時間が短いので、全員が乗車することを最優先とする。</li>
                <li>
                  コロナ禍のため、座席を向かい合わせにすることは現在禁止されている。{" "}
                </li>
                <li>
                  勝手に席を替わったり、むやみに立ち歩いたりせず、静かに過ごす。
                </li>
                <li>ガイドの説明をしっかり聞き、 注意をよく守ること。</li>
                <li>手指用消毒液を乗降時に使用すること。</li>
              </div>
            </div>
          ) : (
            <></>
          )}
        </ul>
        <ul className="tyui">
          <div className="attention-header-container">
            <h2 onClick={() => ListSelect(4)} className="tyuuititle">
              <div className="arrow-character">v</div>
              <div className="tyuititletext">&emsp;部屋長</div>
              <div>
                <img className="titledesign" src={img.hancho} />
              </div>
              <div className="separator"></div>
            </h2>
          </div>
          {isListOpen[4] ? (
            <div className="pulldown explanation-container">
              <div className="attentiontext">
                <li>
                  ホテルに到着後、
                  部屋長会議で連絡事項を伝えるのでその指示をしっかりと聞く。
                </li>
                <li> 連絡事項は全て班長・部屋長から班員に連絡する。</li>
                <li>
                  班長・部屋長は先生との連絡を常に保ち、
                  班員の行動を把握すること
                </li>
                <li>小まめにうがい・手洗いをする</li>
                <li>いいいいいいいいい</li>
                <li>いいいいいいいいい</li>
              </div>
            </div>
          ) : (
            <></>
          )}
        </ul>
        <ul className="tyui">
          <div className="attention-header-container">
            <h2 onClick={() => ListSelect(5)} className="tyuuititle">
              <div className="arrow-character">v</div>
              <div className="tyuititletext">&emsp;宿泊</div>
              <div>
                <img className="titledesign" src={img.shukuhaku} />
              </div>
              <div className="separator"></div>
            </h2>
          </div>
          {isListOpen[5] ? (
            <div className="pulldown explanation-container">
              <div className="attentiontext">
                <li>
                  非常口・避難場所など、 緊急時における避難経路を確認すること。
                </li>
                <li>食事、点呼、 消灯、起床、 出発などの時間を厳守する</li>
                <li>ホテルのプール、 電話の使用は禁止とする。</li>
                <li>
                  ホテルのコインランドリーは使用不可。
                  洗濯をする場合、部屋内のバスルームで行うこと。
                </li>
                <li>ホテルから外出することは禁止とする。</li>
                <li>男女のフロアの行き来は禁止。</li>
                <li>
                  就寝前点呼から起床時間までは自分の部屋からの出入りは禁止する。
                </li>
                <li>
                  ホテルは貸し切りではないので、マナーやエチケットに注意し、
                  <span>
                    移動は静かにするなど、他の客の迷惑にならないよう気をつけること。
                  </span>
                </li>
                <li>
                  事故や近隣住民への迷惑となる恐れがあるので、部活動の早朝練習は禁止とする。
                </li>
                <li>
                  <span>
                    部屋のお風呂を使用する際、熱いお湯が出るかもしれないのでやけどには注意する。
                  </span>
                  <span>
                    シャワーカーテンをバスタブの内側に入れ、外にお湯がこぼれないようにすること。
                  </span>
                </li>
              </div>
            </div>
          ) : (
            <></>
          )}
        </ul>
        <ul className="tyui">
          <div className="attention-header-container">
            <h2 onClick={() => ListSelect(6)} className="tyuuititle">
              <div className="arrow-character">v</div>
              <div className="tyuititletext">&emsp;欠席</div>
              <div>
                <img className="titledesign" src={img.kesseki} />
              </div>
              <div className="separator"></div>
            </h2>
          </div>
          {isListOpen[6] ? (
            <div className="pulldown explanation-container">
              <div className="attentiontext">
                <li>
                  宿泊当日に緊急連絡が発生した場合、学校へ8:00までに電話orすぐーるで連絡すること。
                </li>
                <li>
                  修学旅行欠席の場合は、13日(月)から15日(水)に1・2班合同で学校で授業があります。
                </li>
              </div>
            </div>
          ) : (
            <></>
          )}
        </ul>
        <ul className="tyui">
          <div className="attention-header-container">
            <h2 onClick={() => ListSelect(7)} className="tyuuititle">
              <div className="arrow-character">v</div>
              <div className="tyuititletext">&emsp;スマホ</div>
              <div>
                <img className="titledesign" src={img.sumaho} />
              </div>
              <div className="separator"></div>
            </h2>
          </div>
          {isListOpen[7] ? (
            <div className="pulldown explanation-container">
              <div className="attentiontext">
                <li>
                  <span>
                    緊急連絡・撮影用として携帯電話やスマートフォンの持ち込みを許可する
                  </span>
                  ただし不適切・不必要な使用は絶対にしないこと。 (ゲームも含む)
                </li>
                <li>
                  個人情報 (承諾を得ていない動画 画像を含む)
                  をSNS等に掲載すること は厳禁。
                </li>
              </div>
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
