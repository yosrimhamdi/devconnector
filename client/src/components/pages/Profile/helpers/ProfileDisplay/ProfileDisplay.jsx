import React from 'react';

import './ProfileDisplay.scss';

import Socials from '../Socials';
import SkillList from '../SkillList';
import ExperienceList from '../ExperienceList';
import EducationList from '../EducationList';
import BackSection from '../../../../common/BackSection';

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
      <section className="profile-display__user-photo-wrapper">
        <img
          className="profile-display__user-photo"
          src={`/images/${photo}`}
          alt={fullname}
        />
      </section>
      <section className="profile-display__user-details">
        <BackSection title="go back" aligned />
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
          <div className="profile-display__detail-title profile-display__detail-title--mb-medium">
            experiences
          </div>
          <ExperienceList experiences={experience} />
          <div className="profile-display__detail-title profile-display__detail-title--mb-medium">
            educations
          </div>

          <EducationList educations={education} />
        </div>
      </section>
    </div>
  );
};

export default ProfileDisplay;
