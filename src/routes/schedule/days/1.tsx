import { getImg } from "model/assets";

const imgStationNagoya = getImg("名古屋駅.png");
const imgStationHirosima = getImg("広島駅.jpeg");
const imgStationMiyajima= getImg("宮島.jpeg");

export function ScheduleDay1() {
  return (
    <main>
      <section className="schedule_place">
        <p id="schedule-text" className="schedule-time">
        7:20
        </p>
        <div className="schedule-area2">
          <img
            src={imgStationNagoya}
            className="schedule-nagoyastation"
          >
          </img>
            <p id="schedule-text" className="schedule-area-do">
         集合
        </p>
        <p id="schedule-text" className="schedule-area-text">
          名古屋駅
        </p>
         
        </div>
      </section>
      
      <section className="schedule_place2">
        <p id="schedule-text" className="schedule-time2">
          7:51<span> ~ </span>10:01
        </p>
        <div className="schedule-area2">
          <p id="schedule-text" className="schedule-norimono">
            新幹線-のぞみ3号
          </p>
          <section className="schedule-place3">
            <p className="schedule-tatesen"></p>
            <p id="schedule-text" className="schedule-nagoya1">
              名古屋
            </p>
            <p id="schedule-text" className="schedule-nagoyasyou1">
              Nagoya
            </p>
          </section> 
          <p className="schedule-sannkaku1"></p>
          <p className="schedule-tatesen2"></p>
          <p id="schedule-text" className="schedule-hirosima1">
            広島
          </p>
          <p id="schedule-text" className="schedule-hirosimasyou1">
            hiroshima
          </p>
        </div>
      </section>
      <section className="schedule_place3">
        <p id="schedule-text" className="schedule-time3">
          10:01
        </p>
        <div className="schedule-area2">
          <img
            src={imgStationHirosima}
            className="schedule-Hirosimastation"
          >
          </img>
            <p id="schedule-text" className="schedule-area-norikae">
          乗り換え
        </p>
        <p id="schedule-text" className="schedule-area-hirosimaeki">
          広島駅
        </p>
         
        </div>
      </section>
      <section className="schedule_place2">
        <p id="schedule-text" className="schedule-time4">
          10:20<span> ~ </span>11:00
        </p>
        <div className="schedule-area2">
          <p id="schedule-text" className="schedule-norimono-bus">
            バス
          </p>
          <section className="schedule-place3">
            <p className="schedule-tatesen4"></p>
            <p id="schedule-text" className="schedule-nagoya1">
              広島駅
            </p>
            <p id="schedule-text" className="schedule-Hiroshima1">
              Hiroshima
            </p>
          </section>
          <p className="schedule-sannkaku2"></p>
          <p className="schedule-tatesen5"></p>
          <p id="schedule-text" className="schedule-miyajimaguchi">
            宮島口
          </p>
          <p id="schedule-text" className="schedule-miyajimasyou1">
            Miyajimaguchi
          </p>
        </div>
      </section>
      <section className="schedule_place2">
        <p id="schedule-text" className="schedule-time5">
          10:20<span> ~ </span>11:00
        </p>
        <div className="schedule-area3">
          <p id="schedule-text" className="schedule-norimono2">
            船
          </p>
          <section className="schedule-place3">
            <p className="schedule-tatesen"></p>
            <p id="schedule-text" className="schedule-nagoya1">
              宮島口
            </p>
            <p id="schedule-text" className="schedule-nagoyasyou1">
              miyajimaguchi
            </p>
          </section>
          <p className="schedule-sannkaku3"></p>
          <p className="schedule-tatesen3"></p>
          <p id="schedule-text" className="schedule-miyajima">
            宮島
          </p>
          <p id="schedule-text" className="schedule-miyajimasyou">
            Miyajima
          </p>
        </div>
      </section>
      <section className="schedule_place">
        <p id="schedule-text" className="schedule-time">
        11:00
        </p>
        <div className="schedule-area2">
          <img
            src={imgStationMiyajima}
            className="schedule-nagoyastation"
          >
          </img>
            <p id="schedule-text" className="schedule-area-do">
         観光
        </p>
        <p id="schedule-text" className="schedule-text-miyajima">
        　宮島
        </p>
         
        </div>
      </section>
      <div id="schedule-text"className="schedule-text-tyuusyoku">
       昼食は各自で
      </div>
     

      
    </main>
  );
}
