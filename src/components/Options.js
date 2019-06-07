import {Option} from "./Option";
import React from "react";

export const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please, add an option to get started!</p>}
        <ul>
            {
                props.options.map(option => (
                    <Option
                        option={option}
                        key={props.options.indexOf(option)}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </ul>
    </div>
);