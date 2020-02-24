import React, { Component } from 'react';

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <h1>Results</h1>
                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </div>
        )
    }
}

export default Results;
