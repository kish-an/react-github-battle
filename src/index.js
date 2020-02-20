import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popular from './components/Popular';

class App extends Component {
    render(props) {
        return (
            <div className="container">
                <Popular />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

