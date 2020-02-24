import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
    content: {
        fontSize: '2rem',
        position: 'absolute',
        left: 0,
        right: 0,
        marginTop: '1.25rem',
        textAlign: 'center',
    }
}

export class Loading extends Component {
    constructor(props) {
        super(props)

        this.state = {
            content: props.text
        }
    }

    componentDidMount() {
        const { text, speed } = this.props;

        this.loader = window.setInterval(() => {
            this.state.content === text + '...' ? (
                this.setState({ content: text })
            ) : (
                this.setState(prevState => ({ content: prevState.content + '.' }))
            );
        }, speed);
    }

    componentWillUnmount() {
        window.clearInterval(this.loader);
    }

    render() {
        return (
            <p style={styles.content}>
                {this.state.content}
            </p>
        )
    }
}

Loading.propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number,
}

Loading.defaultProps = {
    text: 'Loading',
    speed: 300,
}

export default Loading;

