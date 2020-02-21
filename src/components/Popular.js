import React, { Component } from 'react';
import LanguagesNav from './LanguagesNav';
import { fetchPopularRepos } from '../utils/api';

class Popular extends Component {
    constructor(props) {
        super(props);

        this.state = {
            language: 'All',
            repos: null,
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
            repos: null,
            error: null
        });

        fetchPopularRepos(this.state.language)
        .then(repos => {
            this.setState({
                repos,
                error: null
            });
        })
        .catch(err => {
            console.warn('Error fetching repos: ', err);

            this.setState({
                error: 'There was an error fetching the repositories.'
            });
        });
    }

    isLoading() {
        return this.state.repos === null && this.state.error === null;
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

                {repos && <pre> {JSON.stringify(repos, null, 2)} </pre>}
            </React.Fragment>
        )
    }
}

export default Popular;
