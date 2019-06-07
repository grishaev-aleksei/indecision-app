import React from "react";

export const Action = (props) => (
    <div>
        <button className={"big_button"} onClick={props.handlePick} disabled={!props.hasOptions}>
            What should I do?
        </button>
    </div>
);