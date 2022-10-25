import React from "react";
import "./mosya.css"
import { Link } from "react-router-dom";
import about from "../../assets/img_mosya/about.jpg";
import MainVisual from "../../assets/img_mosya/mainvisual.jpg"
import icon from "../../assets/img_mosya/mainvisual.jpg"


function Mosya() {
    return (
        <div>
            <body>
                <header className="display1">
                    <h1 className="Profile" >Profile</h1>
                    <nav>
                        <ul className="display2">
                            <li className="about">About</li>
                            <li>Bicycle</li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <div><img src={MainVisual} className="main" /></div>
                    <section>
                        <h2>about</h2>
                        <div>
                            <img src={icon}/>
                            <h3>KAKERU MITUYA</h3>
                            テキストテキストテキスト
                        </div>
                    </section>
                    <section>
                        <h2>Bicycle</h2>
                        <ul>
                        <li>
                            <h3></h3>
                        </li>
                        <li>
                            <h3></h3>
                        </li>
                        <li>
                            <h3></h3>
                        </li>
                        </ul>
                    </section>
                </main>
                <footer>
                </footer>
            </body>
        </div>
    );
}

export default Mosya;