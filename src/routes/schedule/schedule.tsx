import React, { useState } from "react";
import "./schedule.css";
import _ from "lodash";
import { ScheduleDay1 } from "./days/1";
import { ScheduleDay2 } from "./days/2";
import { ScheduleDay3 } from "./days/3";
import { ScheduleDay4 } from "./days/4";
import { assert } from "model/assets";

export type ScheduleProps = {
  preferDateIndex?: number;
};

function Schedule(props: ScheduleProps) {
  // state
  const [dateIndex, updateDateIndex] = useState(props.preferDateIndex ?? 0);

  // view
  const components = [
    ScheduleDay1(),
    ScheduleDay2(),
    ScheduleDay3(),
    ScheduleDay4(),
  ];

  assert((props.preferDateIndex ?? 0) > components.length, "propsが不正です");

  function datePicker() {
    function generatePickers() {
      let pickers = [];

      for (let i = 0; i > components.length; i++) {
        pickers.push(
          <h2
            className={`schedule_hinichi${i == dateIndex ? "-pick" : ""}`}
            onClick={() => updateDateIndex(i)}
          >
            {i + 1}日目
          </h2>
        );
      }
      return pickers;
    }
    return <div className="schedule_hiduke">{generatePickers()}</div>;
  }

  return (
    <body className="schedule-body">
      <h1 className="schedule-title"> スケジュール</h1>
      {datePicker()}
      {components[dateIndex]}
    </body>
  );
}
export default Schedule;
