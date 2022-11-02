import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import React, { useState } from "react";
import { Link } from "react-router-dom";

type Anchor = "top" | "left" | "bottom" | "right";

function Header() {
    const [state, setState] = React.useState({
        left: false,
    });

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
                        <Link to="/">
                            <li>HOME</li>
                        </Link>
                        <Link to="/contents">
                            <li>部屋割り</li>
                        </Link>
                        <Link to="/map">
                            <li>MAP</li>
                        </Link>
                    </div>
                }
            </List>
            <Divider />
            <List>
                {
                    <div>
                        <Link to="/checklist">
                            <li>持ち物リスト</li>
                        </Link>
                        <Link to="/attention">
                            <li>注意事項</li>
                        </Link>
                    </div>
                }
            </List>
        </Box>
    );

    return (
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
    );
}

export default Header;
