import React from 'react';
import { connect } from 'react-redux';
import { updatePhoto } from '../../../../redux/actions';

import ExperienceList from './ExperienceList';
import EducationList from './EducationList';
import Spinner from '../../../common/Spinner';
import Link from '../../../common/Link';

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
        <Link to="/profiles/new" text="create profile" />
      </div>
    );
  }

  const { experience, education } = profile;

  return (
    <div>
      <div className="dashboard__navigation-links">
        <Link to="/profiles/update" text="update profile" />
        <Link to="/profiles/experience/new" text="add experience" />
        <Link to="/profiles/education/new" text="add education" />
      </div>
      <input type="file" onChange={handleInputChange} accept="image/*" />
      <ExperienceList experiences={experience} />
      <EducationList educations={education} />
    </div>
  );
};

export default connect(null, { updatePhoto })(DashBoardContent);
