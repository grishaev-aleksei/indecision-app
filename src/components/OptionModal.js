import React from 'react';

import Modal from 'react-modal';

export const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel={'Selected Option'}
        onRequestClose={props.handleOk}
        ariaHideApp={false}
        closeTimeoutMS={350}
        className={'modal'}
    >
        <h3 className={'modal__title'}>Selected Option</h3>
        {props.selectedOption && <p className={'modal__body'}>{props.selectedOption}</p>}
        <button className={'button'} onClick={props.handleOk}>done</button>
    </Modal>
);