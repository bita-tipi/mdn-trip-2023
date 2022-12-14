import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import _ from "lodash";
import "./header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getImg } from "model/assets";

const imgHamburgerButton = getImg("humberger_button.png");

type Anchor = "top" | "left" | "bottom" | "right";

function Header() {
    function ListSelect(index: number) {
        const copiedPage = _.cloneDeep(onPage);
        for (let n = 0; n < 6; n++) {
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
                width: anchor === "top" || anchor === "bottom" ? "auto" : 200,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className="background_menu"
        >
            <div className="padding-menu">
                <List className="List_menu">
                    {
                        <div>
                            <h2 className="header_title_menu">MENU</h2>
                            <li>
                                <Link to="/" className="header_link">
                                    <p
                                        onClick={() => ListSelect(0)}
                                        className={onPage[0] ? "yellow" : "red"}
                                    >
                                        HOME
                                    </p>
                                </Link>
                            </li>

                            <li>
                                <Link to="/room" className="header_link">
                                    <p
                                        onClick={() => ListSelect(1)}
                                        className={onPage[1] ? "yellow" : "red"}
                                    >
                                        ????????????
                                    </p>
                                </Link>
                            </li>

                            <li>
                                <Link to="/map" className="header_link">
                                    <p
                                        onClick={() => ListSelect(2)}
                                        className={onPage[2] ? "yellow" : "red"}
                                    >
                                        MAP
                                    </p>
                                </Link>
                            </li>
                        </div>
                    }
                    {
                        <div>
                            <li>
                                <Link to="/checklist" className="header_link">
                                    <p
                                        onClick={() => ListSelect(3)}
                                        className={onPage[3] ? "yellow" : "red"}
                                    >
                                        ??????????????????
                                    </p>
                                </Link>
                            </li>

                            <li>
                                <Link to="/attention" className="header_link">
                                    <p
                                        onClick={() => ListSelect(4)}
                                        className={onPage[4] ? "yellow" : "red"}
                                    >
                                        ????????????
                                    </p>
                                </Link>
                            </li>

                            <li>
                                <Link to="/schedule" className="header_link">
                                    <p
                                        onClick={() => ListSelect(5)}
                                        className={onPage[5] ? "yellow" : "red"}
                                    >
                                        ??????????????????
                                    </p>
                                </Link>
                            </li>
                        </div>
                    }
                </List>
            </div>
        </Box>
    );

    return (
        <div>
            <div className="header-background">
                {(["left"] as const).map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>
                            <div className="header-back">
                                <div className="header-bar"></div>
                                <div className="header-bar"></div>
                                <div className="header-bar"></div>
                            </div>
                        </Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            className="drawer_opacity"
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
