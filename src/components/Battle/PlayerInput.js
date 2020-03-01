import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../contexts/theme';

const PlayerInput = ({ onSubmit, label }) => {
    const [username, setUsername] = useState('');
    const theme = useContext(ThemeContext);

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(username);
    }

    const handleChange = e => {
        setUsername(e.target.value);
    }

    return (
        <form className="column player" onSubmit={handleSubmit}>
            <label htmlFor={label} className="player-label">
                {label}
            </label>
            <div className="row player-inputs">
                <input
                    type="text"
                    id={label}
                    className={`input-${theme}`}
                    placeholder="Github username"
                    autoComplete="off"
                    value={username}
                    onChange={handleChange}
                />
                <button
                    className={`btn ${theme === 'light' ? 'dark' : 'light'}-btn`}
                    type="submit"
                    disabled={!username}
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

PlayerInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
}

export default PlayerInput;
