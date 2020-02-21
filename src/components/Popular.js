import React, { Component } from 'react';

class Popular extends Component {
    constructor(props) {
        super(props);

        this.state = {
            language: 'All',
        }

        this.updateLangauge = this.updateLangauge.bind(this);
    }

    updateLangauge(language) {
        this.setState({
            language
        });
    }

    render() {
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

        return (
            <nav>
                <ul className="flex-center">
                    {languages.map(language => (
                        <li key={language}>
                            <button
                            className="btn-clear nav-link"
                            style={language === this.state.language ? { color: 'rgb(187, 46, 31)' } : null}
                            onClick={()=> this.updateLangauge(language)}
                            >
                                {language}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}

export default Popular;
