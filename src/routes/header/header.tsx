import React, { useState } from "react";
import { Link } from "react-router-dom";




function Header(){
    
    const [Events,SetEvents] = useState(false);
    const [Menu,SetMenu] = useState(false);

    function Burger() {
        return  (
            <div className="hum">
            <ul>
                <button onClick={(event)=>MenuOpen(event)}>back</button>
                <Link to="/">
                <li>HOME</li>
                </Link>
                <li>want</li>
                <li>to</li>
                <li>eat</li>
                 <li>ham</li>
                <li>burger</li>
                {Events}
            </ul>
        </div>
       )
    }

    function MenuOpen(event:React.MouseEvent<HTMLButtonElement>):void{
        SetMenu(!Menu);
        console.log(event);
    }

    return(
    <div>
        <button onClick={(event)=>MenuOpen(event)} className="Menubutton">
            <div className="Menu">
                <div className="bar"></div>
                <div className="bar1"></div>
                <div className="bar"></div>
                <div className="bar1"></div>
                <div className="bar"></div>
            </div>
        </button>
            {Menu ? <div>{Burger()}</div> :<div></div>}
    </div>
    )
}

export default Header;