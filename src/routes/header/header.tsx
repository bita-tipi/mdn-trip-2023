import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [Events, SetEvents] = useState(false);
    const [Menu, SetMenu] = useState(false);

    function Burger() {
        return (
            <div className="hum">
                <ul>
                    <button onClick={(event) => MenuOpen(event)}>back</button>
                    <Link to="/">
                        <li onClick={MenuClose}>HOME</li>
                    </Link>
                    <Link to="/contents">
                        <li onClick={MenuClose}>部屋割り</li>
                    </Link>
                    <Link to="/checklist">
                        <li onClick={MenuClose}>持ち物リスト</li>
                    </Link>
                    <Link to="/attention">
                        <li onClick={MenuClose}>注意事項</li>
                    </Link>
                    <Link to="/map">
                        <li onClick={MenuClose}>MAP</li>
                    </Link>
                    {Events}
                </ul>
            </div>
        );
    }

    function MenuClose() {
        SetMenu(!Menu);
    }

    function MenuOpen(event: React.MouseEvent<HTMLButtonElement>): void {
        SetMenu(!Menu);
        console.log(event);
    }

    return (
        <div>
            <button onClick={(event) => MenuOpen(event)} className="Menubutton">
                <div className="Menu">
                    <div className="bar"></div>
                    <div className="bar1"></div>
                    <div className="bar"></div>
                    <div className="bar1"></div>
                    <div className="bar"></div>
                </div>
            </button>
            {Menu ? <div>{Burger()}</div> : <div></div>}
        </div>
    );
}

export default Header;
