import React from 'react';
import PropTypes from 'prop-types';

const LanguagesNav = ({ selectedLang, onUpdateLang }) => {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <nav>
            <ul className="flex-center">
                {languages.map(language => (
                    <li key={language}>
                        <button
                            className="btn-clear nav-link"
                            style={language === selectedLang ? { color: 'rgb(187, 46, 31)' } : null}
                            onClick={() => onUpdateLang(language)}
                        >
                            {language}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

LanguagesNav.propTypes = {
    selectedLang: PropTypes.string.isRequired,
    onUpdateLang: PropTypes.func.isRequired,
}

export default LanguagesNav;
