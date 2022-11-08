import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import _ from "lodash";
import "./header.css";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type Anchor = "top" | "left" | "bottom" | "right";

function Header() {
    function ListSelect(index: number) {
        const copiedPage = _.cloneDeep(onPage);
        for (let n = 0; n < 5; n++) {
            copiedPage[n] = false;
        }
        copiedPage[index] = !copiedPage[index];
        updateOnPage(copiedPage);
    }

    const [state, setState] = React.useState({
        left: false,
    });
    const [onPage, updateOnPage] = useState([
        true,
        false,
        false,
        false,
        false,
        false,
    ]);

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {
                    <div>
                        <Link to="/" className={onPage[0] ? "yellow" : "red"}>
                            <p onClick={() => ListSelect(0)}>HOME</p>
                        </Link>
                        <Link
                            to="/contents"
                            className={onPage[1] ? "yellow" : "red"}
                        >
                            <p onClick={() => ListSelect(1)}>部屋割り</p>
                        </Link>
                        <Link
                            to="/map"
                            className={onPage[2] ? "yellow" : "red"}
                        >
                            <p onClick={() => ListSelect(2)}>MAP</p>
                        </Link>
                    </div>
                }
            </List>
            <Divider />
            <List>
                {
                    <div>
                        <Link
                            to="/checklist"
                            className={onPage[3] ? "yellow" : "red"}
                        >
                            <p onClick={() => ListSelect(3)}>持ち物リスト</p>
                        </Link>
                        <Link
                            to="/attention"
                            className={onPage[4] ? "yellow" : "red"}
                        >
                            <p onClick={() => ListSelect(4)}>注意事項</p>
                        </Link>
                        <Link
                            to="/schedule"
                            className={onPage[5] ? "yellow" : "red"}
                        >
                            <p onClick={() => ListSelect(5)}>スケジュール</p>
                        </Link>
                    </div>
                }
            </List>
        </Box>
    );

    return (
        <div>
            <div>
                {(["left"] as const).map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>
                            {anchor}
                        </Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default Header;
