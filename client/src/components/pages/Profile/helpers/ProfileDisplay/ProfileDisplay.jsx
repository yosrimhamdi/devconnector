import React from 'react';

import './ProfileDisplay.scss';

import Socials from '../Socials';
import SkillList from '../SkillList';
import Experiences from '../ExperienceList';
import EducationList from '../EducationsList';
import Nav from '../../../../layouts/Nav';

const ProfileDisplay = ({ profile }) => {
  const {
    user: { fullname, photo },
    status,
    company,
    location,
    website,
    social = {},
    skills,
    experience,
    education,
  } = profile;

  if (website) {
    social.website = website;
  }

  return (
    <div className="profile-display">
      <Nav />
      <section className="profile-display__user-photo-wrapper">
        <img
          className="profile-display__user-photo"
          src={photo.path}
          alt={fullname}
        />
      </section>
      <section className="profile-display__user-details">
        <div className="profile-display__content-wrapper">
          <div className="profile-display__detail-title">name surname</div>
          <div className="profile-display__detail">{fullname}</div>
          <div className="profile-display__detail-title">position</div>
          <div className="profile-display__detail">{status}</div>
          <div className="profile-display__detail-title">location</div>
          <div className="profile-display__detail">{location}</div>
          <div className="profile-display__detail-title">company</div>
          <div className="profile-display__detail">{company}</div>
          <div className="profile-display__detail-title profile-display__detail-title--mb-small">
            socials
          </div>
          <Socials socials={social} />
          <div className="profile-display__detail-title profile-display__detail-title--mb-small">
            skills
          </div>
          <SkillList skills={skills} />
          <Experiences experiences={experience} />
          <EducationList educations={education} />
        </div>
      </section>
    </div>
  );
};

export default ProfileDisplay;
