class BuildItVisibleComponentState extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            toggle: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState)=>{
            return {
                toggle: !prevState.toggle
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.handleToggleVisibility}>{!this.state.toggle ? 'Show Details' : 'Hide Details'}</button>
                {this.state.toggle && (
                    <div>
                        <p>
                            Hey. These are some details you can now see!
                        </p>
                    </div>
                )}
            </div>
        )
    }


}


ReactDOM.render(<BuildItVisibleComponentState/>, document.getElementById('app'));