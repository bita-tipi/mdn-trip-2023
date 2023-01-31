
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


export function ScheduleDay1() {
    const navigate = useNavigate();
    return (
        <main className="Day-main">
            <img className="Day-picture" src={nagoya} />

            <img/>

            <div className="Day-box">
                <div className="Day-timeBarArea">
                <img src={smoke} className="Day-smoke"/>
                    <p className="Day-timeSmallBar">07:51</p>
                    <div className="Day-timeBar"></div>
                    <p className="Day-timeSmallBar2">10:01</p>
                </div>
                <div className="Day-busArea2">
                    <div className="Day-leftLineArea2">
                        <div className="Day-LeftLineBig"></div>
                        <div className="Day-textArea">
                            <p className="Day-TextBig">
                                名古屋
                            </p>
                            <h6 className="Day-TextBigSub">
                                Nagoya
                            </h6>
                        </div>
                    </div>
                </div>
                <img className="Day-triangle4" src={triangle}></img>
                <div className="Day-leftLineArea2">
                    <div className="Day-LeftLineBig"></div>
                    <div className="Day-textArea">
                        <p className="Day-TextBig">広島</p>
                        <h6 className="Day-TextBigSub">Hiroshima</h6>
                        <img src={sinkansen} className="Day-sin"/>
                    </div>
                </div>
            </div>

            <img className="Day-picture" src={Hiroshima} />

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
                            <p className="Day-TextBig">
                                広島駅
                            </p>
                            <h6 className="Day-TextBigSub">
                                Hiroshima
                            </h6>
                        </div>
                    </div>
                </div>
                <img className="Day-triangle4" src={triangle}></img>
                <div className="Day-leftLineArea2">
                    <div className="Day-LeftLineBig"></div>
                    <div className="Day-textArea">
                        <p className="Day-TextBig">宮島口</p>
                        <h6 className="Day-TextBigSub">Miyajima</h6>
                        <img src={smoke} className="Day-smoke"/>
                    </div>
                </div>
            </div>

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
                            <p className="Day-TextBig">
                                宮島口
                            </p>
                            <h6 className="Day-TextBigSub">
                                Miyajima
                            </h6>
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
                            <p className="Day-TextBig">
                                宮島
                            </p>
                            <h6 className="Day-TextBigSub">
                                Miyajima
                            </h6>
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
                            <p className="Day-TextBig">
                                宮島口
                            </p>
                            <h6 className="Day-TextBigSub">
                                Miyajima
                            </h6>
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
                            <p className="Day-TextBig">
                                宮島口
                            </p>
                            <h6 className="Day-TextBigSub">
                                Miyajima
                            </h6>
                        </div>
                    </div>
                </div>
                <img className="Day-triangle4" src={triangle}></img>
                <div className="Day-leftLineArea2">
                    <div className="Day-LeftLineBig"></div>
                    <div className="Day-textArea">
                        <p className="Day-TextBig Day-textSmall">平和記念<br></br>資料館</p>
                        <h6 className="Day-TextBigSub Day-TextSmallSub">Hirosima Peace<br></br>Memorial Museam</h6>
                    </div>
                </div>
            </div>

            <img className="Day-picture" src={Siryoukan} />

            <div className="Day-box">
                <div className="Day-timeBarArea">
                    <p className="Day-timeSmallBar">14:30</p>
                    <div className="Day-timeBar"></div>
                    <p className="Day-timeSmallBar2">14:45</p>
                </div>
                <p className="Day-underBox">被爆体験講和</p>
            </div>
            
            <img className="Day-picture" src={Hilton} />

            <div className="Day-Boxbreak">
                <p>20:00</p>
                <p className="Day-underBox">部屋長会議</p>
            </div>
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
