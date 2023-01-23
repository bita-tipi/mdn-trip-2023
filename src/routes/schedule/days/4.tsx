import "../Day4.css";
export function ScheduleDay4() {
    return (
        <main className="Day-main">
            <div className="Day-box">
                <p>7:30</p>
                <p>朝食</p>
            </div>
            <div className="Day-box">
                <p className="Day-time">08:30</p>
                <div className="Day-busArea">
                    <h4 className="Day-BusLine">バス</h4>
                    <div className="Day-leftLineArea">
                        <div className="Day-leftLine"></div>
                        <div className="Day-textArea">
                            <p className="Day-textName">リーベルホテルアット</p>
                            <p className="Day-textName">ユニバーサルスタジオジャパン</p>
                            <h6>Liber Hotel At Universal Studio Japan</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Day-routeIf">
                <h2>1.嵐山ルート</h2>
            </div>
            <div className="Day-box">
                <p className="Day-timeSmall">10:00</p>
                <div className="Day-leftLineAreaSmall">
                    <div className="Day-leftLine"></div>
                    <div className="Day-textArea">
                        <p className="Day-textNameSmall">嵐山</p>
                        <h6>Arashiyama</h6>
                    </div>
                </div>
            </div>
            <div className="Day-box">
                <p>10:00</p>
                <div>
                    <p>観光</p>
                    <p>嵐山</p>
                </div>
            </div>
            <div>
                <p>昼食は各自</p>
            </div>
            <div className="Day-box">
                <p className="Day-timeSmall">13:50</p>
                <div className="Day-busArea">
                    <h5 className="Day-BusLineSmall">バス</h5>
                    <div className="Day-leftLineArea">
                        <div className="Day-leftLine"></div>
                        <div className="Day-textArea">
                            <p className="Day-textName">嵐山</p>
                            <h6 className="Day-Rome">Arashiyama</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Day-routeIf">
                <h2>2.二年坂/清水寺</h2>
            </div>
            <div className="Day-box">
                <p className="Day-timeSmall">10:15</p>
                <div className="Day-leftLineAreaSmall">
                    <div  className="Day-leftLine"></div>
                    <div className="Day-textArea">
                        <p className="Day-textNameSmall2">北野天満宮</p>
                        <h6 >Kitano Tennmannguu</h6>
                    </div>
                </div>
            </div>
            <div>
                <p>10:15</p>
                <div>
                    <p>観光</p>
                    <p>北野天満宮</p>
                    <img></img>
                </div>
            </div>
            <div>
                <p>昼食は自由</p>
            </div>
            <div className="Day-box">
                <p className="Day-timeSmall">14:10</p>
                <div className="Day-busArea">
                    <h5 className="Day-BusLineSmall">バス</h5>
                    <div className="Day-leftLineArea">
                        <div className="Day-leftLine"></div>
                        <div className="Day-textArea">
                            <p className="Day-textName">清水駐車場</p>
                            <h6 className="Day-Rome">Kiyomizu Parking</h6>
                        </div>
                    </div>
                </div>
            </div>
            --------------------------
            <div className="Day-routeIf">
                <h2>3.北野天満宮/錦市場ルート</h2>
            </div>
            <div>
                <p>10:15</p>
                <div>
                    <div></div>
                    <div>
                        <p>北野天満宮</p>
                        <p>Kitano Tennmannguu</p>
                    </div>
                </div>
            </div>
            <div>
                <p>10:15</p>
                <div>
                    <p>観光</p>
                    <p>北野天満宮</p>
                    <img></img>
                </div>
            </div>
            <div>
                <p>昼食は自由</p>
            </div>
            <div>
                <p>14:10</p>
                <div>
                    <div>
                        <p>バス</p>
                        <div></div>
                    </div>
                    <div></div>
                    <div>
                        <p>清水駐車場</p>
                        <p>KiyomizuParking</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
