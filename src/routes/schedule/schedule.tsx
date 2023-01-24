import React, { ReactElement, useEffect, useState } from "react";
import "./schedule.css";
import { ScheduleDay1 } from "./days/1";
import { ScheduleDay2 } from "./days/2";
import { ScheduleDay3 } from "./days/3";
import { ScheduleDay4 } from "./days/4";
import { assert } from "model/assets";
import { useLocation } from "react-router-dom";

export type ScheduleProps = {
    preferDateIndex: number;
};

const components = [
    <ScheduleDay1 />,
    <ScheduleDay2 />,
    <ScheduleDay3 />,
    <ScheduleDay4 />,
];

function Schedule() {
    // state
    const { state } = useLocation() as { state: ScheduleProps | undefined };
    const preferDateIndex = state?.preferDateIndex;
    const [dateIndex, updateDateIndex] = useState(preferDateIndex ?? 0);

    // local
    useEffect(() => {
        assert(dateIndex < components.length, "propsが不正です");
    }, [dateIndex]);

    // view
    function datePicker(): ReactElement {
        function generatePickers(): ReactElement[] {
            let pickers: ReactElement[] = [];

            for (let index = 0; index < components.length; index++) {
                pickers.push(
                    <h2
                        key={index}
                        className={`schedule_hinichi${
                            index === dateIndex ? "-pick" : ""
                        }`}
                        onClick={() => updateDateIndex(index)}
                    >
                        {index + 1}日目
                    </h2>
                );
            }

            return pickers;
        }
        return <div className="schedule_hiduke">{generatePickers()}</div>;
    }

    return (
        <div className="schedule-body">
            {datePicker()}
            {components[dateIndex]}
        </div>
    );
}
export default Schedule;
