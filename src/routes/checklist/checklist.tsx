import React from "react";
import "./checklist.css";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@mui/material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Check() {
  return (
    <div>
      <p className="top">持ち物リスト</p>

      <div className="list-container">

        <div className="list-title">
          <a>必要なもの</a>
        </div>

        <FormGroup className="checkbox-container grid">
          <FormControlLabel control={<Checkbox />} label="制服" />
          <FormControlLabel control={<Checkbox />} label="財布" />
          <FormControlLabel control={<Checkbox />} label="あ" />
          <FormControlLabel control={<Checkbox />} label="あ" />
          <FormControlLabel control={<Checkbox />} label="あ" />
          <FormControlLabel control={<Checkbox />} label="あ" />
        </FormGroup>
      </div>

      <div className="list-title">
          <a>あると便利</a>
        </div>

      <div>
      <FormGroup className="checkbox-container grid">
          <FormControlLabel control={<Checkbox />} label="制服" />
          <FormControlLabel control={<Checkbox />} label="財布" />
          <FormControlLabel control={<Checkbox />} label="あ" />
          <FormControlLabel control={<Checkbox />} label="あ" />
          <FormControlLabel control={<Checkbox />} label="あ" />
          <FormControlLabel control={<Checkbox />} label="あ" />
        </FormGroup>
      </div>

      <div className="list-title">
          <a>自分だけのもの</a>
        </div>

        <div>
      <FormGroup className="checkbox-container grid">
          <FormControlLabel control={<Checkbox />} label="制服" />
          <FormControlLabel control={<Checkbox />} label="財布" />
          <FormControlLabel control={<Checkbox />} label="あ" />
          <FormControlLabel control={<Checkbox />} label="あ" />
        </FormGroup>
      </div>

    </div>
  );
}

export default Check;
