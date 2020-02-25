import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaCompass, FaBriefcase, FaUsers, FaUserFriends, FaCode, FaUser } from 'react-icons/fa';

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


class ProfileList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hoveringLocation: false,
            hoveringCompany: false,
        }

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver(id) {
        this.setState({
            [id]: true,
        });
    }

    handleMouseOut(id) {
        this.setState({
            [id]: false,
        });
    }

    render() {
        const { name, location, company, followers, following } = this.props.profile;
        const { hoveringLocation, hoveringCompany } = this.state;

        return (
            <ul className="card-list">
                <li>
                    <FaUser color="rgb(239,115,115)" size={22} />
                    {name}
                </li>
                {location && (
                    <li
                        onMouseOver={() => this.handleMouseOver('hoveringLocation')}
                        onMouseOut={() => this.handleMouseOut('hoveringLocation')}
                        style={styles.container}
                    >
                        {hoveringLocation && <div style={styles.tooltip}>User's location</div>}
                        <FaCompass color="rgb(144,115,255)" size={22} />
                        {location}
                    </li>
                )}
                {company && (
                    <li
                        onMouseOver={() => this.handleMouseOver('hoveringCompany')}
                        onMouseOut={() => this.handleMouseOut('hoveringCompany')}
                        style={styles.container}
                    >
                        {hoveringCompany && <div style={styles.tooltip}>User's company</div>}
                        <FaBriefcase color="#795548" size={22} />
                        {location}
                    </li>
                )}
                <li>
                    <FaUsers color="rgb(129,195,245)" size={22} />
                    {followers.toLocaleString()} followers
                        </li>
                <li>
                    <FaUserFriends color="rgb(64,183,95)" size={22} />
                    {following.toLocaleString()} followers
                </li>
            </ul>
        )
    }

}

ProfileList.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileList;


