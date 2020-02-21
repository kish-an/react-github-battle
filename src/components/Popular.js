import React, { Component } from 'react';
import LanguagesNav from './LanguagesNav';

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
        const { language } = this.state;

        return (
            <React.Fragment>
                <LanguagesNav
                    selectedLang={language}
                    onUpdateLang={this.updateLangauge}
                />
            </React.Fragment>
        )
    }
}

export default Popular;
