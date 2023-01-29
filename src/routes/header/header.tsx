import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import _ from "lodash";
import "./header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getImg } from "model/assets";

const imgHamburgerButton = getImg("menu.svg");

type Anchor = "top" | "left" | "bottom" | "right";

function Header() {
    function ListSelect(index: number) {
        const copiedPage = _.cloneDeep(onPage);
        for (let n = 0; n < 7; n++) {
            copiedPage[n] = false;
        }
        copiedPage[index] = !copiedPage[index];
        updateOnPage(copiedPage);
    }

    const [state, setState] = React.useState({
        right: false,
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
                            <li className="header-List">
                                <Link to="/" className="header_link" onClick={() => ListSelect(0)}>
                                    <div className="headerSelector">
                                        <div className={onPage[0] ? "headerBarYellow" : "headerBarRed"}></div>
                                        <div className="headerText">
                                            <p className="headerTextMain">ホーム</p>
                                            <p className="headerTextSub">Home</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="header-List">
                                <Link to="/schedule" className="header_link" onClick={() => ListSelect(1)}>
                                <div className="headerSelector">
                                        <div className={onPage[1] ? "headerBarYellow" : "headerBarRed"}></div>
                                        <div className="headerText">
                                            <p className="headerTextMainLong">スケジュール</p>
                                            <p className="headerTextSubMain">schedule</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="header-List">
                                <Link to="/map" className="header_link" onClick={() => ListSelect(2)}>
                                <div className="headerSelector">
                                        <div className={onPage[2] ? "headerBarYellow" : "headerBarRed"}></div>
                                        <div className="headerText">
                                            <p className="headerTextMain">マップ</p>
                                            <p className="headerTextSub">Map</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </div>
                    }
                    {
                        <div>
                            <li className="header-List">
                                <Link to="/room" className="header_link" onClick={() => ListSelect(3)}>
                                <div className="headerSelector">
                                        <div className={onPage[3] ? "headerBarYellow" : "headerBarRed"}></div>
                                        <div className="headerText">
                                            <p className="headerTextMainSub">部屋割り</p>
                                            <p className="headerTextSubLong">Room Allocation</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="header-List">
                                <Link to="/Seat" className="header_link" onClick={() => ListSelect(4)}>
                                <div className="headerSelector">
                                        <div className={onPage[4] ? "headerBarYellow" : "headerBarRed"}></div>
                                        <div className="headerText">
                                            <p className="headerTextMainSub">座席表</p>
                                            <p className="headerTextSubLong">Seating Chart</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="header-List">
                                <Link to="/checklist" className="header_link" onClick={() => ListSelect(5)}>
                                <div className="headerSelector">
                                        <div className={onPage[5] ? "headerBarYellow" : "headerBarRed"}></div>
                                        <div className="headerText">
                                            <p className="headerTextMainLong2">持ち物リスト</p>
                                            <p className="headerTextSubLong">Inventory List</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="header-List">
                                <Link to="/attention" className="header_link" onClick={() => ListSelect(6)}>
                                <div className="headerSelector">
                                        <div className={onPage[6] ? "headerBarYellow" : "headerBarRed"}></div>
                                        <div className="headerText">
                                            <p className="headerTextMainLong2">注意事項</p>
                                            <p className="headerTextSub">Notes</p>
                                        </div>
                                    </div>
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
                {(["right"] as const).map((anchor) => (
                    <React.Fragment key={anchor}>
                        <div className="textAlignCenter">

                            <Button onClick={toggleDrawer(anchor, true)}>
                               <img src={imgHamburgerButton} className="header-menu"></img>
                            </Button>
                            <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            className="drawer_opacity"
                            >
                                {list(anchor)}
                            </Drawer>
                            </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default Header;
