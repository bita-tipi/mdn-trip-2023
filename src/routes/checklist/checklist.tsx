import React, { useState } from "react";
import "./checklist.css";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@mui/material";
import _ from "lodash";

function Check() {
  function ListSelect(index: number) {
    const copiedList = _.cloneDeep(isListOpen);
    copiedList[index] = !copiedList[index];
    updateIsListOpen(copiedList);
  }
  const [isListOpen, updateIsListOpen] = useState([false, false, false]);
  return (
    <div>
      <h1>持ち物リスト</h1>
      <main>

        <div
          className="list-title"
          onClick={() => {
            ListSelect(0);
          }}
        >
          <hr />
          必要なもの
        </div>
        {isListOpen[0] ? (
          <div className="pulldown">
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
        ) : (

          <div></div>
        )}
        <div
          className="list-title"
          onClick={() => {
            ListSelect(1);
          }}
        >
          <hr />
          あると便利
        </div>
        {isListOpen[1] ? (
          <div className="pulldown">
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
        ) : (

          <div></div>
        )}
         <div
          className="list-title"
          onClick={() => {
            ListSelect(2);
          }}
        >
          <hr />
          自分だけの持ち物
        </div>
        {isListOpen[2] ? (
          <div className="pulldown">
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
        ) : (
        <div></div>

         )} </main>
    </div>
  );
}

export default Check;
