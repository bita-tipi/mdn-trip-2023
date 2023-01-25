import "../Day4.css";
import { getImg } from "model/assets";

const triangle = getImg("triangle.svg");
const univa = getImg("univa.png");
const univaa = getImg("univaa.png");

export function ScheduleDay3() {
  return (
    <main className="Day-main">
      <div className="Day-box">
        <p>07:30</p>
        <p className="Day-underLineRed">朝食</p>
      </div>

      <div className="Day-box">
        <div className="Day-timeBarArea">
          <p className="Day-timeSmallBar">08:30</p>
          <div className="Day-timeBar"></div>
          <p className="Day-timeSmallBar2">09:30</p>
        </div>
        <div className="Day-busArea">
          <h5 className="Day-BusLine">バス</h5>
          <div className="Day-leftLineArea">
            <div className="Day-leftLine"></div>
            <div className="Day-textArea">
              <p className="Day-backSchedule">シーサイドホテル舞子ビラ</p>
              <h6 className="Day-backSchedule2">
                SeaSide Hotel Maiko Villa Kobe
              </h6>
            </div>
          </div>
        </div>
      </div>

      <img className="Day-triangle3" src={triangle} />

      <div className="Day-box">
        <p className="Day-timeSmall">09:00</p>
        <div className="Day-leftLineAreaSmall">
          <div className="Day-leftLine"></div>
          <div className="Day-textArea">
            <p className="Day-textName">リーベルホテルアット</p>
            <p className="Day-textName">ユニバーサルスタジオジャパン</p>
            <h6 className="">Liber Hotel At Universal Studio Japan</h6>
          </div>
        </div>
      </div>

      <div className="Day-box">
        <p className="Day-time">09:30</p>
        <h5 className="Day-underBox">徒歩</h5>
      </div>

      <img className="Day-triangle3" src={triangle} />

      <div className="Day-box">
        <p className="Day-timeSmall">10:00</p>
        <div className="Day-leftLineAreaSmall">
          <div className="Day-leftLine"></div>
          <div className="Day-textArea">
            <p className="Day-backSchedule">ユニバーサルスタジオジャパン</p>
            <h6 className="Day-backSchedule2">Universal Studio Japan</h6>
          </div>
        </div>
      </div>

      <div className="Day-box-picture">
        <p className="Day-timePicture">10:00</p>
        <img className="Day-picture" src={univa} />
      </div>

      <div className="Day-box">
        <p className="Day-time">19:00</p>
        <div className="Day-busArea">
          <h5 className="Day-BusLine">徒歩</h5>
          <div className="Day-leftLineArea">
            <div className="Day-leftLine"></div>
            <div className="Day-textArea">
              <p className="Day-backSchedule">ユニバーサルスタジオジャパン</p>
              <h6 className="Day-backSchedule2">Universal Studio Japan</h6>
            </div>
          </div>
        </div>
      </div>

      <img className="Day-triangle3" src={triangle} />

      <div className="Day-box">
        <p className="Day-timeSmall">19:30</p>
        <div className="Day-leftLineAreaSmall">
          <div className="Day-leftLine"></div>
          <div className="Day-textArea">
            <p className="Day-backSchedule">ユニバーサルスタジオジャパン</p>
            <h6 className="Day-backSchedule2">Universal Studio Japan</h6>
          </div>
        </div>
      </div>

      <div className="Day-box-picture">
        <p className="Day-timePicture">19:30</p>
        <img className="Day-picture" src={univaa} />
      </div>

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
