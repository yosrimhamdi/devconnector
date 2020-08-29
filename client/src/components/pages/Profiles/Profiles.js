import React from 'react';

import './Profiles.scss';
import ProfileList from './ProfileList';

class Profiles extends React.Component {
  render() {
    return (
      <div className="profiles">
        <h1 className="profiles__title">developer profiles</h1>
        <p className="profiles__message">Browse and connect with developers.</p>
        <ProfileList />
      </div>
    );
  }
}

export default Profiles;
