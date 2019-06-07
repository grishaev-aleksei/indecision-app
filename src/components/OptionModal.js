import React from 'react';

import Modal from 'react-modal';

export const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel={'Selected Option'}
        onRequestClose={props.handleOk}
        ariaHideApp={false}
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleOk}>Ok</button>
    </Modal>
);