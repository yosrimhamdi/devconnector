import React from 'react';

import './DisplayProfiles.scss';

import Socials from '../Socials';
import SkillList from '../../../../common/SkillList';
import Experiences from '../Experiences';
import Educations from '../Educations';
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
    <div className="display-profiles">
      <section className="display-profiles__intro">
        <img
          className="display-profiles__user-image"
          src={`/images/${photo}`}
          alt={`${name} avatar`}
        />
        <div className="display-profiles__user-name">{name}</div>
        <div className="display-profiles__user-job">
          <div>
            <span>{status}</span>
            <Company company={company} />
          </div>
          <div>{location}</div>
        </div>
        <Socials socials={social} />
      </section>
      <section className="display-profiles__details">
        <div className="display-profiles__bio-wrapper">
          <div className="display-profiles__header">{`${name}'s Bio`}</div>
          <div>{bio}</div>
        </div>
        <div className="display-profiles__skills-wrapper">
          <div className="display-profiles__header">skill set</div>
          <SkillList skills={skills} />
        </div>
      </section>
      <section className="display-profiles__cridentials">
        <Experiences experiences={experience} />
        <Educations educations={education} />
      </section>
    </div>
  );
};

export default ProfileDisplay;
