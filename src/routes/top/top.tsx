import React, { useState, useEffect, useLayoutEffect } from "react";
import "./top.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Loading from "../load/loading";

function Top() {
    useEffect(() => {
        SetLoading(true);
    });

    const [isLoading, SetLoading] = useState(false);

    return (
        <div className="background_top">
            {isLoading ? (
                <div className="load_top">
                    <Loading/>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default Top;
