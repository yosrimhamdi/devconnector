import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePhoto } from '../../../../redux/actions';

import ExperienceList from './ExperienceList';
import EducationList from './EducationList';
import Spinner from '../../../common/Spinner';

const DashBoardContent = ({ profile, loading, updatePhoto }) => {
  const handleInputChange = e => {
    const form = new FormData();

    form.append('photo', e.target.files[0]);

    updatePhoto(form);
  };

  if (loading) {
    return <Spinner fullScreen />;
  }

  if (!profile) {
    return (
      <div>
        <div className="dashboard__create-profile-message">
          yo have no profile yet. Please create one.
        </div>
        <Link to="/profiles/new" className="link">
          create profile
        </Link>
      </div>
    );
  }

  const { experience, education } = profile;

  return (
    <div>
      <div className="dashboard__navigation-links">
        <Link to="/profiles/update" className="link">
          update profile
        </Link>
        <Link to="/profiles/experience/new" className="link">
          add experience
        </Link>
        <Link to="/profiles/education/new" className="link">
          add education
        </Link>
      </div>
      <input type="file" onChange={handleInputChange} accept="image/*" />
      <ExperienceList experiences={experience} />
      <EducationList educations={education} />
    </div>
  );
};

export default connect(null, { updatePhoto })(DashBoardContent);
