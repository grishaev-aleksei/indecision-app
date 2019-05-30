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
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        const options = this.props.options;
        console.log(options);

        return (
            <div>
                Options Component Here
                <ul>
                    {/*<Option option={options}/>*/}
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
    render() {
        return (
            <div>
                AddOption component here
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));