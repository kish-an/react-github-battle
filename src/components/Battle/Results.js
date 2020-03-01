import React, { useReducer, useEffect } from 'react';
import { battle } from '../../utils/api';
import Card from '../Card';
import ProfileList from './ProfileList';
import Loading from '../Loading';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

const resultsReducer = (state, action) => {
    switch (action.type) {
        case 'missing-player':
            return {
                ...state,
                error: 'Did you enter two players? 🤨',
                loading: false,
            }
        case 'success':
            return {
                winner: action.winner,
                loser: action.loser,
                error: null,
                loading: false,
            }
        case 'error':
            return {
                ...state,
                error: action.errorMessage,
                loading: false,
            }
        default:
            throw new Error(`Action type: ${action.type} is not supported!`);
    }
}

const initState = {
    winner: null,
    loser: null,
    error: null,
    loading: true,
}

const Results = ({ location }) => {
    const [state, dispatch] = useReducer(resultsReducer, initState);

    useEffect(() => {
        const { playerOne, playerTwo } = queryString.parse(location.search);

        if (!playerOne || !playerTwo) {
            dispatch({type: 'missing-player'});
        } else {
            battle([playerOne, playerTwo])
                .then(players => dispatch({
                    type: 'success',
                    winner: players[0],
                    loser: players[1],
                }))
                .catch(({ message }) => dispatch({
                    type: 'error',
                    errorMessage: message,
                }));
        }
    }, [playerOne, playerTwo]);

    const { winner, loser, error, loading } = state;

    if (loading) {
        return <Loading text="Battling" />
    } else if (error) {
        return <p className="center-text error">{error}</p>
    }

    return (
        <React.Fragment>
            <div className="grid space-around container-sm">
                <Card
                    header={winner.score === loser.score ? 'Tie' : 'Winner'}
                    subheader={`Score: ${winner.score.toLocaleString()}`}
                    avatar={winner.profile.avatar_url}
                    href={winner.profile.html_url}
                    name={winner.profile.login}
                >
                    <ProfileList profile={winner.profile} />
                </Card>

                <Card
                    header={winner.score === loser.score ? 'Tie' : 'Loser'}
                    subheader={`Score: ${loser.score.toLocaleString()}`}
                    avatar={loser.profile.avatar_url}
                    href={loser.profile.html_url}
                    name={loser.profile.login}
                >
                    <ProfileList profile={loser.profile} />
                </Card>
            </div>
            <Link
                className="btn dark-btn btn-space"
                to="/battle"
            >
                Reset
            </Link>
        </React.Fragment>
    );
}

export default Results;
