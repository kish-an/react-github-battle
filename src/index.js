import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from './contexts/theme';
import Nav from './components/Navbar/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';

const Popular = React.lazy(() => import('./components/Repos/Popular'));
const Battle = React.lazy(() => import('./components/Battle/Battle'));
const Results = React.lazy(() => import('./components/Battle/Results'));

class App extends Component {
    state = {
        theme: 'light',
        toggleTheme: () => {
            this.setState(({ theme }) => ({
                theme: theme === 'light' ? 'dark' : 'light'
            }));
        },
    }

    render() {
        return (
            <Router>
                <ThemeProvider value={this.state}>
                    <div className={this.state.theme}>
                        <div className="container">
                            <Nav />

                            <React.Suspense fallback={<Loading />}>
                                <Switch>
                                    <Route exact path="/" component={Popular} />
                                    <Route exact path="/battle" component={Battle} />
                                    <Route path='/battle/results' component={Results} />
                                    <Route
                                        render={() => <h1 style={{ textAlign: 'center', color: '#c0392b'}}>404 🚨</h1>}
                                    />
                                </Switch>
                            </React.Suspense>
                        </div>
                    </div>
                </ThemeProvider>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

