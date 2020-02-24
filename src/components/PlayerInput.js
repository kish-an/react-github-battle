import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.onSubmit(this.state.username);
    }

    handleChange(e) {
        this.setState({
            username: e.target.value
        });
    }

    render() {
        return (
            <form className="column player" onSubmit={this.handleSubmit}>
                <label htmlFor={this.props.label} className="player-label">
                    {this.props.label}
                </label>
                <div className="row player-inputs">
                    <input
                        type="text"
                        id={this.props.label}
                        className="input-light"
                        placeholder="Github username"
                        autoComplete="off"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <button
                        className="btn dark-btn"
                        type="submit"
                        disabled={!this.state.username}
                    >
                        Submit
                    </button>
                </div>
            </form>
        )
    }
}

PlayerInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
}

export default PlayerInput;
