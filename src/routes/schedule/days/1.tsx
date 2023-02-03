import "../Day4.css";
import { getImg } from "model/assets";
import { Link, useNavigate } from "react-router-dom";

const triangle = getImg("triangle.svg");
const univa = getImg("univa.png");
const univaa = getImg("univaa.png");
const nagoya = getImg("nagoyaDay1.png");
const Hiroshima = getImg("HiroshimaEki.png");
const Hilton = getImg("Hilton.png");
const Miyazima = getImg("Miyazima.png");
const Siryoukan = getImg("Siryoukan.png");
const lunchi = getImg("ランチセット.svg");
const sinkansen = getImg("sinkansen.png");
const hune = getImg("hune.png");
const hito = getImg("hito.png");
const bus = getImg("bus.png");
const smoke = getImg("smoke.png");
const Space = getImg("nagoyaSpace.png");

export function ScheduleDay1() {
    const navigate = useNavigate();
    return (
        <main className="Day-main">
            <img className="Day-picture" src={nagoya} />

            <img />
            <img className="Day-picture DaySpace" src={Space} />

            <div className="Day-box">
                <div className="Day-timeBarArea">
                    <img src={smoke} className="Day-smoke" />
                    <p className="Day-timeSmallBar">07:51</p>
                    <div className="Day-timeBar"></div>
                    <p className="Day-timeSmallBar2">10:01</p>
                </div>
                <div className="Day-busArea2">
                    <div className="Day-leftLineArea2">
                        <div className="Day-LeftLineBig"></div>
                        <div className="Day-textArea">
                            <p className="Day-TextBig">名古屋</p>
                            <h6 className="Day-TextBigSub">Nagoya</h6>
                        </div>
                    </div>
                </div>
                <img className="Day-triangle4" src={triangle}></img>
                <div className="Day-leftLineArea2">
                    <div className="Day-LeftLineBig"></div>
                    <div className="Day-textArea">
                        <p className="Day-TextBig">広島</p>
                        <h6 className="Day-TextBigSub">Hiroshima</h6>
                        <img src={sinkansen} className="Day-sin" />
                    </div>
                </div>
            </div>

            <img className="Day-picture" src={Hiroshima} onClick={() =>
                navigate("/map", {
                    state: { MapDateIndex: 0 },
                })
            } />

            <div className="Day-box">
                <div className="Day-timeBarArea">
                    <p className="Day-timeSmallBar">10:20</p>
                    <div className="Day-timeBar"></div>
                    <p className="Day-timeSmallBar2">11:00</p>
                </div>
                <div className="Day-busArea2">
                    <div className="Day-leftLineArea2">
                        <div className="Day-LeftLineBig"></div>
                        <div className="Day-textArea">
                            <p className="Day-TextBig">広島駅</p>
                            <h6 className="Day-TextBigSub">Hiroshima</h6>
                        </div>
                    </div>
                </div>
                <img className="Day-triangle4" src={triangle}></img>
                <div className="Day-leftLineArea2">
                    <div className="Day-LeftLineBig"></div>
                    <div className="Day-textArea">
                        <p className="Day-TextBig">宮島口</p>
                        <h6 className="Day-TextBigSub">Miyajima</h6>
                        <img src={smoke} className="Day-smoke" />
                    </div>
                </div>
            </div>

            <div className="Day-box">
                <div className="Day-timeBarArea">
                    <p className="Day-timeSmallBar">11:20</p>
                    <div className="Day-timeBar"></div>
                    <p className="Day-timeSmallBar2">11:30</p>
                </div>
                <div className="Day-busArea2">
                    <div className="Day-leftLineArea2">
                        <div className="Day-LeftLineBig"></div>
                        <div className="Day-textArea">
                            <p className="Day-TextBig">宮島口</p>
                            <h6 className="Day-TextBigSub">Miyajima</h6>
                        </div>
                    </div>
                </div>
                <img className="Day-triangle4" src={triangle}></img>
                <div className="Day-leftLineArea2">
                    <div className="Day-LeftLineBig"></div>
                    <div className="Day-textArea">
                        <p className="Day-TextBig">宮島</p>
                        <h6 className="Day-TextBigSub">Miyajima</h6>
                    </div>
                </div>
            </div>
            <img className="Day-picture" src={Miyazima} />

            <div className="Day-lunchBox">
                <img src={lunchi} className="Day-lunchSet" />
                <p className="Day-lunch">昼食は各自</p>
            </div>

            <div className="Day-Boxbreak">
                <p>13:15</p>
                <p className="Day-underBox Day-textSmall">フェリー乗り場集合</p>
            </div>

            <div className="Day-box">
                <div className="Day-timeBarArea">
                    <p className="Day-timeSmallBar">13:30</p>
                    <div className="Day-timeBar"></div>
                    <p className="Day-timeSmallBar2">13:40</p>
                </div>
                <div className="Day-busArea2">
                    <div className="Day-leftLineArea2">
                        <div className="Day-LeftLineBig"></div>
                        <div className="Day-textArea">
                            <p className="Day-TextBig">宮島</p>
                            <h6 className="Day-TextBigSub">Miyajima</h6>
                        </div>
                    </div>
                </div>
                <img className="Day-triangle4" src={triangle}></img>
                <div className="Day-leftLineArea2">
                    <div className="Day-LeftLineBig"></div>
                    <div className="Day-textArea">
                        <p className="Day-TextBig">宮島口</p>
                        <h6 className="Day-TextBigSub">Miyajima</h6>
                    </div>
                </div>
            </div>

            <div className="Day-box">
                <div className="Day-timeBarArea">
                    <p className="Day-timeSmallBar">14:00</p>
                    <div className="Day-timeBar"></div>
                    <p className="Day-timeSmallBar2">14:30</p>
                </div>
                <div className="Day-busArea2">
                    <div className="Day-leftLineArea2">
                        <div className="Day-LeftLineBig"></div>
                        <div className="Day-textArea">
                            <p className="Day-TextBig">宮島口</p>
                            <h6 className="Day-TextBigSub">Miyajima</h6>
                        </div>
                    </div>
                </div>
                <img className="Day-triangle4" src={triangle}></img>
                <div className="Day-leftLineArea2">
                    <div className="Day-LeftLineBig"></div>
                    <div className="Day-textArea">
                        <p className="Day-TextBig">相生橋</p>
                        <h6 className="Day-TextBigSub">Aioi Bashi</h6>
                    </div>
                </div>
            </div>

            <div className="Day-box">
                <div className="Day-timeBarArea">
                    <p className="Day-timeSmallBar">14:30</p>
                    <div className="Day-timeBar"></div>
                    <p className="Day-timeSmallBar2">14:45</p>
                </div>
                <div className="Day-busArea2">
                    <div className="Day-leftLineArea2">
                        <div className="Day-LeftLineBig"></div>
                        <div className="Day-textArea">
                            <p className="Day-TextBig">相生橋</p>
                            <h6 className="Day-TextBigSub">Aioi Bashi</h6>
                        </div>
                    </div>
                </div>
                <img className="Day-triangle4" src={triangle}></img>
                <div className="Day-leftLineArea2">
                    <div className="Day-LeftLineBig"></div>
                    <div className="Day-textArea">
                        <p className="Day-TextBig Day-textSmall">
                            平和記念<br></br>資料館
                        </p>
                        <h6 className="Day-TextBigSub Day-TextSmallSub">
                            Hirosima Peace<br></br>Memorial Museam
                        </h6>
                    </div>
                </div>
            </div>

            <img className="Day-picture" src={Siryoukan} />

            <div className="Day-box">
                <div className="Day-timeBarArea">
                    <p className="Day-timeSmallBar">16:00</p>
                    <div className="Day-timeBar"></div>
                    <p className="Day-timeSmallBar2">17:00</p>
                </div>
                <div className="DayBox">
                    <p className="Day-underBox">被爆体験講話</p>
                    <div className="DayFlexBox">
                        <div>
                            <p>メモリアルホール</p>
                            <div className="DaySpace2">
                                <p>会議室１</p>
                                <p>会議室２</p>
                            </div>
                        </div>
                        <p>(東館地下一階)</p>
                    </div>
                    <p className="DayFlexBox">研修室３(追悼平和記念館)</p>
                </div>
            </div>


            <img className="Day-picture" src={Hilton}
                onClick={() =>
                    navigate("/room", {
                        state: { DayDateIndex: 0 },
                    })} />

            <div className="Day-BoxBreak">
                <p className="DayTextPreset">18:00~</p>
                <div className="Day-morning">
                    <p className="Day-underLineRed2 DayTextPreset">夕食</p>
                    <p className="DayTextPreset">二階太田川</p>
                    <div className="Day-timeList">
                        <div className="Day-timeListTime">
                            <p className="Day-ClassMargin2">18:00</p>
                            <p className="Day-ClassMargin2">18:10</p>
                            <p className="Day-ClassMargin2">18:20</p>
                            <p className="Day-ClassMargin2">18:30</p>
                        </div>
                        <div>
                            <p className="Day-ClassMargin">T2A,T2B,G2A,G2B</p>
                            <p className="Day-ClassMargin">T2C,J2A,G2C,G2D</p>
                            <p className="Day-ClassMargin">J2B,G2H,G2E,G2F</p>
                            <p className="Day-ClassMargin">G2I,G2J,G2G,G2K</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Day-Boxbreak">
                <p>20:00</p>
                <p className="Day-underBox">部屋長会議</p>
            </div>
            <p>二階太田川前</p>
            <div className="Day-Boxbreak">
                <p>~21:30</p>
                <p className="Day-underBox">自由時間</p>
            </div>
            <p>これ以降部屋から出ること禁止</p>
            <div className="Day-Boxbreak">
                <p>22:00</p>
                <p className="Day-underBox">点呼</p>
            </div>
            <div className="Day-Boxbreak">
                <p>22:30</p>
                <p className="Day-underBox">消灯</p>
            </div>
        </main>
    );
}
