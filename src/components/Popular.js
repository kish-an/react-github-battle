import React, { Component } from 'react';
import LanguagesNav from './LanguagesNav';
import { fetchPopularRepos } from '../utils/api';

class Popular extends Component {
    constructor(props) {
        super(props);

        this.state = {
            language: 'All',
            repos: {},
            error: null,
        }

        this.updateLangauge = this.updateLangauge.bind(this);
        this.isLoading = this.isLoading.bind(this);
    }

    componentDidMount() {
        this.updateLangauge(this.state.language);
    }

    updateLangauge(language) {
        this.setState({
            language,
            error: null
        });

        if (!this.state.repos[language]) {
            fetchPopularRepos(this.state.language)
                .then(data => {
                    this.setState(({ repos }) => ({
                        repos: {
                            ...repos,
                            [language]: data
                        },
                    }));
                })
                .catch(err => {
                    console.warn('Error fetching repos:', err);

                    this.setState({
                        error: 'There was an error fetching the repositories.'
                    });
                });
        }

    }

    isLoading() {
        const { language, repos, error } = this.state;

        return !repos[language] && !error;
    }

    render() {
        const { language, repos, error } = this.state;

        return (
            <React.Fragment>
                <LanguagesNav
                    selectedLang={language}
                    onUpdateLang={this.updateLangauge}
                />

                {this.isLoading() && <p>Loading...</p>}

                {error && <p>{error}</p>}

                {repos[language] && <pre> {JSON.stringify(repos[language], null, 2)} </pre>}
            </React.Fragment>
        )
    }
}

export default Popular;
