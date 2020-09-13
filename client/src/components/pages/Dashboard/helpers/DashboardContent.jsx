import React from 'react';
import { Link } from 'react-router-dom';

import ExperienceList from './ExperienceList';
import EducationList from './EducationList';
import Spinner from '../../../common/Spinner';

const DashBoardContent = ({ profile, loading }) => {
  if (loading) {
    return <Spinner />;
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
      <ExperienceList experiences={experience} />
      <EducationList educations={education} />
    </div>
  );
};

export default DashBoardContent;
