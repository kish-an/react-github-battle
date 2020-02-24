import React from 'react';
import PropTypes from 'prop-types';
import { FaCompass, FaBriefcase, FaUsers, FaUserFriends, FaCode, FaUser } from 'react-icons/fa';

function ProfileList({ profile }) {
    const { name, location, company, followers, following } = profile;

    return (
        <ul className="card-list">
            <li>
                <FaUser color="rgb(239,115,115)" size={22} />
                {name}
            </li>
            {location && (
                <li>
                    <FaCompass color="rgb(144,115,255)" size={22} />
                    {location}
                </li>
            )}
            {company && (
                <li>
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

ProfileList.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileList;


