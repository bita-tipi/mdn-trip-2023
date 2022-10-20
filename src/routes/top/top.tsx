import React, { useState, useEffect, useLayoutEffect } from "react";
import "./top.css";
import yoshii from "../../assets/img/yoshi.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import berger from "../menu";
import { slide as Menu } from "react-burger-menu";
import Loading from "../loading";

function Top() {
    const [isLoading, SetLoading] = useState(false);
    const updateSetLoading = () => {
        SetLoading(!isLoading);
    };

    useEffect(() => {
        SetLoading(true);
    });

    return (
        <div className="background">
            <Menu width="600" className="berger">
                <a className="menu-item--small" href="">
                    修学旅行
                </a>
            </Menu>
            <Box sx={{ "& button": { m: 1 } }}>
                <div>
                    <Link to={"/contents"}>
                        <Button variant="contained" size="large">
                            contents
                        </Button>
                    </Link>
                    <p>{isLoading.toString()}</p>
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
