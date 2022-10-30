import React, { useState, useEffect, useLayoutEffect } from "react";
import "./top.css";
import yoshii from "../../assets/img/yoshi.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import Loading from "../load/loading";
import {
    YoshiDataState,
    YoshiData,
    IndexData,
    IndexDataState,
} from "../../assets/atom";

function Top() {
    useEffect(() => {
        SetLoading(true);
    });

    const [isLoading, SetLoading] = useState(false);
    const [isTrue, SetYoshi] = useState(false);
    const Yoshi: YoshiData = {IfYoshi: isTrue};


    return (
        <div className="background_top">
            <Box sx={{ "& button": { m: 1 } }}>
                <div>
                    <Link to={"/contents"}>
                        <Button variant="contained" size="large">
                            contents
                        </Button>
                    </Link>
                    <Link to={"/mosya"}>
                        <Button variant="contained" size="large">
                            mosya
                        </Button>
                    </Link>
                    {isLoading ? (
                        <div>
                            <Loading />
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </Box>
        </div>
    );
}

export default Top;
export type { YoshiData };
