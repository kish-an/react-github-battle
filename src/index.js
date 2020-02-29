import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from './contexts/theme';
import Nav from './components/Navbar/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';

const Popular = React.lazy(() => import('./components/Repos/Popular'));
const Battle = React.lazy(() => import('./components/Battle/Battle'));
const Results = React.lazy(() => import('./components/Battle/Results'));

const App = () => {
    const [theme, setTheme] = useState('light');

    // No longer passing theme and toggleTheme together in a state object as only Nav needs access to toggleTheme
    const toggleTheme = () => {
        setTheme((theme) => theme === 'light' ? 'dark' : 'light');
    }

    return (
        <Router>
            <ThemeProvider value={theme}>
                <div className={theme}>
                    <div className="container">
                        <Nav toggleTheme={toggleTheme} />

                        <React.Suspense fallback={<Loading />}>
                            <Switch>
                                <Route exact path="/" component={Popular} />
                                <Route exact path="/battle" component={Battle} />
                                <Route path='/battle/results' component={Results} />
                                <Route
                                    render={() => <h1 style={{ textAlign: 'center', color: '#c0392b' }}>404 🚨</h1>}
                                />
                            </Switch>
                        </React.Suspense>
                    </div>
                </div>
            </ThemeProvider>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));

