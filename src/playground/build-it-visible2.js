let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render()
};


const appRoot = document.getElementById('app');


const render = () => {
    const jsx = (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Show Details' : 'HideDetails'}</button>
            {visibility && (
                <div>
                    <p>
                        Hey. These are some details you can now see!
                    </p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(jsx, appRoot);


};
render();