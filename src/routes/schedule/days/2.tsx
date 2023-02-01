import "../Day4.css";
import { getImg } from "model/assets";
import { Link, useNavigate } from "react-router-dom";

const triangle = getImg("triangle.svg");
const kurashiki = getImg("倉敷美観地区.png");
const bizen = getImg("備前焼き体験.png");
const lunchi = getImg("ランチセット.svg");
const maiko = getImg("bira.png");

export function ScheduleDay2() {
    const navigate = useNavigate();

    return (
        <main className="Day-main">
            <div className="Day-Boxbreak">
                <p>朝食の30分前</p>
                <p className="Day-underBox">起床</p>
            </div>
            <div className="Day-BoxBreak">
                <p className="DayTextPreset">06:45~</p>
                <div className="Day-morning">
                    <p className="Day-underLineRed2 DayTextPreset">朝食</p>
                    <p className="DayTextPreset">二階太田川</p>
                    <div className="Day-timeList">
                        <div className="Day-timeListTime">
                            <p className="Day-ClassMargin2">06:45</p>
                            <p className="Day-ClassMargin2">06:55</p>
                            <p className="Day-ClassMargin2">07:05</p>
                            <p className="Day-ClassMargin2">07:15</p>
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

            <div className="Day-BoxBreak">
                <p>07:45~</p>
                <div className="Day-morning">
                    <p className="Day-underLineRed2">集合時間</p>
                    <p className="DayTextPresetSmall">朝食の１時間後</p>
                    <p className="DayTextPreset">二階太田川の前</p>
                </div>
            </div>
            <div className="Day-box">
                <div className="Day-timeBarArea">
                    <p className="Day-timeSmallBar">08:00</p>
                    <div className="Day-timeBar"></div>
                    <p className="Day-timeSmallBar2">10:30</p>
                </div>
                <p></p>
                <div className="Day-busArea2">
                    <div className="Day-leftLineArea2">
                        <div className="Day-leftLine"></div>
                        <div className="Day-textArea">
                            <p className="Day-backScheduleHiroshima">
                                ヒルトン<br></br>広島
                            </p>
                            <h6 className="Day-backSchedule2">
                                Hilton Hiroshima
                            </h6>
                        </div>
                    </div>
                </div>
                <img className="Day-triangle4" src={triangle}></img>
                <div className="Day-leftLineAreaSmall2">
                    <div className="Day-leftLine"></div>
                    <div className="Day-Left">
                        <p className="Day-backScheduleHiroshima">
                            倉敷<br></br>美観地区
                        </p>
                        <h6 className="Day-backSchedule2Small">
                            Kurashiki bikanChiku
                        </h6>
                    </div>
                </div>
            </div>
            <img
                className="Day-picture"
                src={kurashiki}
                onClick={() =>
                    navigate("/map", {
                        state: { MapDateIndex: 1 },
                    })
                }
            />

            <div className="Day-lunchBox">
                <img src={lunchi} className="Day-lunchSet" />
                <p className="Day-lunch">昼食は各自</p>
            </div>

            <div className="Day-box">
                <div className="Day-timeBarArea">
                    <p className="Day-timeSmallBar">13:00</p>
                    <div className="Day-timeBar"></div>
                    <p className="Day-timeSmallBar2">14:00</p>
                </div>
                <div className="Day-busArea2">
                    <div className="Day-leftLineArea2">
                        <div className="Day-leftLine"></div>
                        <div className="Day-textArea">
                            <p className="Day-backScheduleSmall">
                                倉敷美観地区
                            </p>
                            <h6 className="Day-backSchedule2">
                                Kurashiki Bikanchiku
                            </h6>
                        </div>
                    </div>
                </div>
                <img className="Day-triangle4" src={triangle}></img>
                <div className="Day-leftLineArea2">
                    <div className="Day-leftLine"></div>
                    <div className="Day-textArea">
                        <p className="Day-backSchedule">備前市</p>
                        <h6 className="Day-backSchedule2">Bizen City</h6>
                    </div>
                </div>
            </div>
            <p>5分前にバス降車場所集合</p>

            <img className="Day-picture" src={bizen} />
            <div className="Day-changeBox">
                <p className="Day-underBox2">備州窯・夢幻庵へ（4クラスずつ）</p>
                <div className="Day-change">
                    <p className="Day-kama">備州窯</p>
                    <div>
                        <p className="Day-class">T2A,T2B,T2C,J2A</p>
                        <p>G2A,G2B,G2C,G2D</p>
                    </div>
                </div>

                <div className="Day-change">
                    <p className="Day-kama">夢幻庵</p>
                    <div>
                        <p className="Day-class">J2B,G2H,G2I,G2J</p>
                        <p>G2E,G2F,G2G,G2K</p>
                    </div>
                </div>
            </div>

            <div className="Day-box">
                <div className="Day-timeBarArea">
                    <p className="Day-timeSmallBar">15:30</p>
                    <div className="Day-timeBar"></div>
                    <p className="Day-timeSmallBar2">17:20</p>
                </div>
                <div className="Day-busArea2">
                    <div className="Day-leftLineArea2">
                        <div className="Day-leftLine"></div>
                        <div className="Day-textArea">
                            <p className="Day-backSchedule">備前市</p>
                            <h6 className="Day-backSchedule2">Bizen City</h6>
                        </div>
                    </div>
                </div>
                <img className="Day-triangle4" src={triangle}></img>
                <div className="Day-leftLineArea2">
                    <div className="Day-leftLine"></div>
                    <div className="Day-Left">
                        <p className="Day-backScheduleSmall">
                            シーサイドホテル<br></br>舞子ビラ
                        </p>
                        <h6 className="Day-backSchedule2">
                            SeaSide Hotel<br></br>Maiko Villa
                        </h6>
                    </div>
                </div>
            </div>

            <img
                className="Day-picture"
                src={maiko}
                onClick={() =>
                    navigate("/room", {
                        state: { DayDateIndex: 1 },
                    })
                }
            />

            <div className="Day-Boxbreak">
                <p>到着後すぐ</p>
                <p className="Day-underBox">部屋長会議</p>
            </div>
            <p>本館3階 舞子の間の前</p>
            <div className="Day-Boxbreak">
                <p>18:30</p>
                <p className="Day-underBox">夕食</p>
            </div>
            <p>本館3階 舞子の間</p>
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
