import "../Day4.css";
import { getImg } from "model/assets";
import { Link, useNavigate } from "react-router-dom";

const triangle = getImg("triangle.svg");
const univa = getImg("univa.png");
const univaa = getImg("univaa.png");
const lunchi = getImg("ランチセット.svg");

export function ScheduleDay3() {
    const navigate = useNavigate();
    function linkSelect(to: string, dateIndex: number): void {
        navigate(to, {
            state: { MapDateIndex: dateIndex },
            preventScrollReset: true,
        })
    }
    return (
        <main className="Day-main">
            <div className="Day-box">
                <p className="Day-time">06:30</p>
                <p className="Day-underBox">起床</p>
            </div>
            <div className="Day-box">
                <p className="Day-time">07:00</p>
                <p className="Day-underBox">朝食</p>
            </div>
            <p>本館3階　舞子の間</p>

            <div className="Day-box">
                <p className="Day-timeSmall">08:30</p>
                <div className="Day-leftLineAreaSmall">
                    <div className="Day-leftLine"></div>
                    <div className="Day-textArea">
                        <p className="Day-textName">シーサイドホテル舞子ビラ</p>
                        <h6 className="">Sea Side Hotel Maiko Bira</h6>
                    </div>
                </div>
            </div>
            <p>本館前駐車場</p>

            <img className="Day-triangle3" src={triangle} />

            <div className="Day-box">
                <p className="Day-timeSmall">09:30</p>
                <div className="Day-leftLineAreaSmall">
                    <div className="Day-leftLine"></div>
                    <div className="Day-textArea">
                        <p className="Day-textName2">リーベルホテルアット</p>
                        <p className="Day-textName">
                            ユニバーサルスタジオ<br></br>ジャパン
                        </p>
                        <h6 className="">
                            Liber Hotel At Universal Studio Japan
                        </h6>
                    </div>
                </div>
            </div>

            <img className="Day-triangle3" src={triangle} />

            <div className="Day-box">
                <p className="Day-underBox">クラス写真撮影</p>
            </div>
            <img
                className="Day-picture"
                src={univa}
                onClick={() =>
                    linkSelect("/map",2)
                }
            />
            <p>USJ内限定で5000円分のクーポンあり</p>
            <div className="Day-lunchBox">
                <img src={lunchi} className="Day-lunchSet" />
                <p className="Day-lunch">昼食・夕食は各自</p>
            </div>
            <p>2000円分ミールクーポンあり</p>

            <div className="Day-box">
                <p className="Day-time">19:00</p>
                <div className="Day-busArea">
                    <h5 className="Day-BusLine">徒歩</h5>
                    <div className="Day-leftLineArea">
                        <div className="Day-leftLine"></div>
                        <div className="Day-textArea">
                            <p className="Day-backSchedule">
                                ユニバーサルスタジオ<br></br>ジャパン
                            </p>
                            <h6 className="Day-backSchedule2">
                                Universal Studio Japan
                            </h6>
                        </div>
                    </div>
                </div>
            </div>

            <img className="Day-triangle3" src={triangle} />
            <p>部屋に入れるのは18:30以降</p>
            <p>1F ツアーデスクで鍵を受け取ること</p>
            <img
                className="Day-picture"
                src={univaa}
                onClick={() =>
                    linkSelect("/room",2)
                }
            />

            <div className="Day-Boxbreak">
                <p>20:00</p>
                <p className="Day-underBox">部屋長会議</p>
            </div>
            <p>1F団体ロビー 名電高校ツアーデスク</p>
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
