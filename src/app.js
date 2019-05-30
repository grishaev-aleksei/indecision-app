console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option.trim()) {
        app.options.push(option.toString());
        e.target.elements.option.value = '';
        render()
    }
    e.target.elements.option.value = '';
};

const removeOptions = () => {
    app.options = [];
    render();
};
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const numbers = [55, 101, 1000];

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeOptions}>Remove All</button>
            <ul>
                {
                    app.options.map(option => {
                        return <li key={app.options.indexOf(option)}>{option}</li>
                    })
                }
            </ul>

            <form onSubmit={onFormSubmit}>
                <input type="text" name={"option"}/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
render();
