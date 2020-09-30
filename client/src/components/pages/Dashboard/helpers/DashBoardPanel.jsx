import React from 'react';
import { connect } from 'react-redux';

import Link from '../../../common/Link';
import ExperienceList from './ExperienceList';
import EducationList from './EducationList';
import { updatePhoto } from '../../../../redux/actions';

const DashBoardPanel = ({ profile, updatePhoto }) => {
  const { experience, education } = profile;

  const handleInputChange = e => {
    const form = new FormData();

    form.append('photo', e.target.files[0]);

    updatePhoto(form);
  };

  return (
    <div>
      <div>
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

export default connect(null, { updatePhoto })(DashBoardPanel);
