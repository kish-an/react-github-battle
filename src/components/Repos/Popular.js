import React, { useState, useEffect, useReducer, useRef } from 'react';
import LanguagesNav from './LanguagesNav';
import { fetchPopularRepos } from '../../utils/api';
import ReposGrid from './ReposGrid';
import Loading from '../Loading';

const popularReducer = (state, action) => {
    switch (action.type) {
        case 'success':
            return {
                ...state,
                error: null,
                [action.language]: action.repos,
            }
        case 'error':
            return {
                ...state,
                error: 'There was an error fetching the repositories 😔',
            }
        default:
            throw new Error(`Action type: ${action.type} is not supported!`);
    }
}

const initState = {
    error: null,
}

const Popular = () => {
    const [language, setLanguage] = useState('All');
    const [state, dispatch] = useReducer(popularReducer, initState);

    const fetchedLanguages = useRef([]);

    useEffect(() => {
        if (fetchedLanguages.current.includes(language) === false) {
            fetchedLanguages.current.push(language);

            fetchPopularRepos(language)
                .then(repos => {
                    dispatch({
                        type: 'success',
                        language,
                        repos,
                    });
                })
                .catch(err => {
                    console.warn('Error fetching repos:', err);
                    dispatch({type: 'error'});
                })
        }
    }, [fetchedLanguages, language]);

    const isLoading = () => !state[language] && !state.error;

    return (
        <React.Fragment>
            <LanguagesNav
                selectedLang={language}
                onUpdateLang={setLanguage}
            />

            {isLoading() && <Loading text="Fetching Repos" />}

            {state.error && <p className="center-text error">{state.error}</p>}

            {state[language] && <ReposGrid repos={state[language]} />}
        </React.Fragment>
    );
 }

export default Popular;
