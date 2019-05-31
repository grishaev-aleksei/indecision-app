class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handleClick() {
        alert('handle click')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }

    handleRemoveAll() {
        // alert('Joke, nothing removed')
        console.log(this.props.options)
    }

    render() {
        const options = this.props.options;

        return (
            <div>
                <AddOption/>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <ul>
                    {
                        options.map(option => <Option option={option} key={options.indexOf(option)}/>)
                    }
                </ul>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>
                {this.props.option}
            </li>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
            e.target.elements.option.value = '';
        }
        e.target.elements.option.value = '';
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input autoFocus placeholder={'option'} type="text" name={'option'}/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));