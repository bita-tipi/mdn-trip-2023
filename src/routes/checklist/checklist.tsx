import React from "react";
import "./checklist.css";
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Check() {
    return (
        <div>
            <p className="top">
             持ち物リスト
             </p>
            
            <div className="must button">
             <a href="#">
                必要なもの
                </a>

                 <ul>
                 <Checkbox {...label} />
                 <Checkbox {...label} />
                 <Checkbox {...label} />
                 <Checkbox {...label} />
                 </ul>
                 <ul>
                 <Checkbox {...label} />
                 <Checkbox {...label} />
                 <Checkbox {...label} />
                 <Checkbox {...label} />
                 </ul>
            </div>

            <div className="benri button">
             <a href="#">
                あると便利なもの
             </a>

                <ul>
                 <Checkbox {...label} />
                 <Checkbox {...label} />
                 <Checkbox {...label} />
                 <Checkbox {...label} />
                 </ul>
                 <ul>
                 <Checkbox {...label} />
                 <Checkbox {...label} />
                 <Checkbox {...label} />
                 <Checkbox {...label} />
                 </ul>
            </div>

            <div className="my button">
             <a href="#">
                自分だけの持ち物
             </a>

                <ul>
                 <Checkbox {...label} />
                 <Checkbox {...label} />
                 <Checkbox {...label} />
                 <Checkbox {...label} />
                 </ul>
            </div>
            
            <div>
                コメント
            </div>

        </div>
        
    );
}

export default Check;
