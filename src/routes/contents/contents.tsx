import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import yoshii from "../../assets/img/yoshi.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { pink } from "@mui/material/colors";

function Contents() {
    const g2a = "1111";
    const g2b = "2222";
    const g2c = "3333";

    const [ClassDate, SetClassDate] = useState("0000");
    const [value, setValue] = React.useState("female");
    const [Text, SetText] = useState("2345");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <div className="background">
            <Link to={"/"}>
                <button>back</button>
            </Link>
            <div>
                <button onClick={() => SetClassDate(g2a)}>G2A</button>
                <button onClick={() => SetClassDate(g2b)}>G2B</button>
                <button onClick={() => SetClassDate(g2c)}>G2C</button>
            </div>

            {Text === ClassDate ? <p>success</p> : <p>missing</p>}
            <input
                maxLength={Number(4)}
                value={Text}
                type="number"
                onChange={(event) => SetText(event.target.value)}
            ></input>
        </div>
    );
}

export default Contents;
