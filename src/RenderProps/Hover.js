import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Hover extends Component {
    static propTypes = {
        children: PropTypes.func.isRequired,
    }
    
    state = {
        hovering: false
    }

    handleMouseOver = () => {
        this.setState({ hovering: true });
    }

    handleMouseOut = () => {
        this.setState({ hovering: false });
    }

    render() {
        return (
            <div
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
            >
                {this.props.children(this.state.hovering)}
            </div>
        )
    }
}

export default Hover;

