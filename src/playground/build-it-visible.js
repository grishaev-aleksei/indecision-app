const obj = {
    buttonText: 'Show details',
    hideStatus: 'hidden',

};

const onClickEvent = () => {
    if (obj.hideStatus === 'appear') {
        obj.hideStatus = 'hidden';
        obj.buttonText = 'Show details';
        render()
    } else {
        obj.hideStatus = 'appear';
        obj.buttonText = 'Hide details';
        render()
    }
};
const getDetails = () => obj.hideStatus !== 'hidden' && <p>Hey. These are some details you can see now</p>;

const appRoot = document.getElementById('app');


const render = () => {
    const jsx = (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={onClickEvent}>{obj.buttonText}</button>
            {getDetails()}
        </div>
    );
    ReactDOM.render(jsx, appRoot);
};
render();