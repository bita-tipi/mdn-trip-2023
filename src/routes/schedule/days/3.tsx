import "../Day4.css";
import { getImg } from "model/assets";

const triangle = getImg("triangle.svg");

export function ScheduleDay3() {
  return (
  <main className="Day-main">
    <div className="Day-box">
        <p>07:30</p>
        <p className="Day-underLineRed">朝食</p>
    </div>


    <div className="Day-box">
        <p className="Day-time">08:00</p>
        <div className="Day-busArea">
            <h5 className="Day-BusLine">バス</h5>
            <div className="Day-leftLineArea">
                <div className="Day-leftLine"></div>
                <div className="Day-textArea">
                    <p className="Day-textName">シーサイドホテル舞子ビラ</p>
                    <h6 className="">
                        SeaSide Hotel Maiko Villa Kobe
                    </h6>
                </div>
            </div>
        </div>
    </div>

    <img className="Day-triangle3" src={triangle}/>

    <div className="Day-box">
        <p className="Day-timeSmall">09:00</p>
        <div className="Day-leftLineAreaSmall">
            <div className="Day-leftLine"></div>
            <div className="Day-textArea">
            <p className="Day-textName">リーベルホテルアット</p>
            <p className="Day-textName">
                ユニバーサルスタジオジャパン
            </p>
            <h6 className="">
                Liber Hotel At Universal Studio Japan
            </h6>
            </div>
        </div>
    </div>

    <div className="Day-box-picture">
      <p className="Day-timePicture">09:30</p>
      <img className="Day-picture" />
    </div>

    <div className="Day-box">
        <p className="Day-time">09:30</p>
        <div className="Day-busArea">
            <h5 className="Day-BusLine">徒歩</h5>
            <div className="Day-leftLineArea">
                <div className="Day-leftLine"></div>
                <div className="Day-textArea">
                    <p className="Day-textName">リーベルホテルアット</p>
                    <p className="Day-textName">ユニバーサルスタジオジャパン</p>
                    <h6 className="">
                    Liber Hotel At Universal Studio Japan
                    </h6>
                </div>
            </div>
        </div>
    </div>

    <img className="Day-triangle3" src={triangle}/>

    <div className="Day-box">
        <p className="Day-timeSmall">10:00</p>
        <div className="Day-leftLineAreaSmall">
            <div className="Day-leftLine"></div>
            <div className="Day-textArea">
              <p className="Day-textName">
                  ユニバーサルスタジオジャパン
              </p>
              <h6 className="">
                Universal Studio Japan
              </h6>
            </div>
        </div>
    </div>

    <div className="Day-box-picture">
      <p className="Day-timePicture">10:00</p>
      <img className="Day-picture" />
    </div>

    <div className="Day-box">
        <p className="Day-time">19:00</p>
        <div className="Day-busArea">
            <h5 className="Day-BusLine">徒歩</h5>
            <div className="Day-leftLineArea">
                <div className="Day-leftLine"></div>
                <div className="Day-textArea">
                    <p className="Day-textName">ユニバーサルスタジオジャパン</p>
                    <h6 className="">
                      Universal Studio Japan
                    </h6>
                </div>
            </div>
        </div>
    </div>

    <img className="Day-triangle3" src={triangle}/>

    <div className="Day-box">
        <p className="Day-timeSmall">19:30</p>
        <div className="Day-leftLineAreaSmall">
            <div className="Day-leftLine"></div>
            <div className="Day-textArea">
              <p className="Day-textName">
                  ユニバーサルスタジオジャパン
              </p>
              <h6 className="">
                Universal Studio Japan
              </h6>
            </div>
        </div>
    </div>

    <div className="Day-box-picture">
      <p className="Day-timePicture">19:30</p>
      <img className="Day-picture" />
    </div>


</main>
  )
}
