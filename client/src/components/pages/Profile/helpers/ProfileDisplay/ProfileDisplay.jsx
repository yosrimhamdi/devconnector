import React from 'react';

import './ProfileDisplay.scss';

import Socials from '../Socials';
import SkillList from '../../../../common/SkillList';
import ExperienceList from '../ExperienceList';
import EducationList from '../EducationList';
import Company from '../../../../common/Company';

const ProfileDisplay = ({ profile }) => {
  const {
    user: { name, photo },
    status,
    company,
    location,
    website,
    social,
    bio,
    skills,
    experience,
    education,
  } = profile;

  if (website) {
    social.website = website;
  }

  return (
    <div className="profile-display">
      <section className="profile-display__intro">
        <img
          className="profile-display__user-image"
          src={`/images/${photo}`}
          alt={`${name} avatar`}
        />
        <div className="profile-display__user-name">{name}</div>
        <div className="profile-display__user-job">
          <div>
            <span>{status}</span>
            <Company company={company} />
          </div>
          <div>{location}</div>
        </div>
        <Socials socials={social} />
      </section>
      <section className="profile-display__details">
        <div className="profile-display__bio-wrapper">
          <div className="profile-display__header">{`${name}'s Bio`}</div>
          <div>{bio}</div>
        </div>
        <div className="profile-display__skills-wrapper">
          <div className="profile-display__header">skill set</div>
          <SkillList skills={skills} />
        </div>
      </section>
      <section className="profile-display__cridentials">
        <ExperienceList experiences={experience} />
        <EducationList educations={education} />
      </section>
    </div>
  );
};

export default ProfileDisplay;
