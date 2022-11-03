import React from "react";

function Check() {
    return (
        <div>
            <p className="top">
             持ち物リスト
            </p>
            
            <div className="must button">
             <a href="#">必要なもの</a>
            </div>

            <div className="benri button">
             <a href="#">あると便利なもの</a>
            </div>

            <div className="my button">
             <a href="#">自分だけの持ち物</a>
            </div>


        </div>
        
    );
}

export default Check;
