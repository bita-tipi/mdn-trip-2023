import React from "react";
import "./checklist.css";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@mui/material";

function Check() {
    return (
        <div>
            <h1>持ち物リスト</h1>
            <main>
                <div className="list-title">
                    <hr />
                    必要なもの
                </div>
                <div className="list-container">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="制服" />
                        <FormControlLabel control={<Checkbox />} label="財布" />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="あ" />
                        <FormControlLabel control={<Checkbox />} label="あ" />
                        <FormControlLabel control={<Checkbox />} label="あ" />
                        <FormControlLabel control={<Checkbox />} label="あ" />
                    </FormGroup>
                </div>

                <div className="list-title">
                    <hr />
                    あると便利
                </div>
                <div className="list-container">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="制服" />
                        <FormControlLabel control={<Checkbox />} label="財布" />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="あ" />
                        <FormControlLabel control={<Checkbox />} label="あ" />
                        <FormControlLabel control={<Checkbox />} label="あ" />
                        <FormControlLabel control={<Checkbox />} label="あ" />
                    </FormGroup>
                </div>

                <div className="list-title">
                    <hr />
                    自分だけのもの
                </div>
                <div className="list-container">
                    <FormGroup className="checkbox-container">
                        <FormControlLabel control={<Checkbox />} label="制服" />
                        <FormControlLabel control={<Checkbox />} label="財布" />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="あ" />
                        <FormControlLabel control={<Checkbox />} label="あ" />
                    </FormGroup>
                </div>
            </main>
        </div>
    );
}

export default Check;
