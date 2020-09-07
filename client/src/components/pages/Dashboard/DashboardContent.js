import React from 'react';

import CostumLink from '../../CostumLink';
import Experiences from './Experiences';
import Educations from './Educations';
import Spinner from '../../Spinner';

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
        <CostumLink
          to="/profiles/new"
          bgColor="#17a2b8"
          color="white"
          text="create profile"
        />
      </div>
    );
  }

  const { experience, education } = profile;

  return (
    <div>
      <div className="dashboard__navigation-links">
        <CostumLink to="/profiles/update" text="update profile" />
        <CostumLink to="/profiles/experience/new" text="add experience" />
        <CostumLink to="/profiles/education/new" text="add education" />
      </div>
      <Experiences experiences={experience} />
      <Educations educations={education} />
    </div>
  );
};

export default DashBoardContent;
