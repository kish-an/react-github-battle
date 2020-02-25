import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
    container: {
        position: 'relative',
        display: 'flex',
        cursor: 'pointer'
    },
    tooltip: {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '160px',
        bottom: '100%',
        left: '50%',
        marginLeft: '-80px',
        borderRadius: '3px',
        backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
        padding: '7px',
        marginBottom: '5px',
        color: '#fff',
        textAlign: 'center',
        fontSize: '14px',
    }
}

class Tooltip extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hovering: false,
        }

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver() {
        this.setState({
            hovering: true,
        });
    }

    handleMouseOut() {
        this.setState({
            hovering: false,
        });
    }

    render() {
        const { text, children } = this.props;
        const { hovering } = this.state;

       return (
            <div
                style={styles.container}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
            >
                {hovering && <div style={styles.tooltip}>{text}</div>}
                {children}
            </div>
       )
    }
}

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Tooltip;
