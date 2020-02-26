import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popular from './components/Repos/Popular';
import Battle from './components/Battle/Battle';
import Results from './components/Battle/Results';
import { ThemeProvider } from './contexts/theme';
import Nav from './components/Navbar/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            theme: 'light',
            toggleTheme: () => {
                this.setState(({ theme }) => ({
                    theme: theme === 'light' ? 'dark' : 'light'
                }));
            },
        }
    }

    render() {
        return (
            <Router>
                <ThemeProvider value={this.state}>
                    <div className={this.state.theme}>
                        <div className="container">
                            <Nav />

                            <Switch>
                                <Route exact path="/" component={Popular} />
                                <Route exact path="/battle" component={Battle} />
                                <Route path='/battle/results' component={Results} />
                                <Route
                                    render={() => <h1 style={{ textAlign: 'center', color: '#c0392b'}}>404 🚨</h1>}
                                />
                            </Switch>
                        </div>
                    </div>
                </ThemeProvider>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

