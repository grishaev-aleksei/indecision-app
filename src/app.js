import React from 'react';
import ReactDOM from 'react-dom'
import {IndecisionApp} from "./components/IndecisionApp";
import './styles/styles.scss'
import 'normalize.css/normalize.css'


const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    )
};

const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page.</p>
    </div>
);

ReactDOM.render(<IndecisionApp/>, document.getElementById('root'));

