import React from 'react';

import './DisplayProfiles.scss';

import Socials from '../Socials';
import Skills from '../Skills/Skills';
import Experiences from '../Experiences';
import Educations from '../Educations';

const ProfileDisplay = ({ profile }) => {
  const {
    user,
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

  const { name, photo } = user;

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
        <div className="display-profiles__user-name">{user.name}</div>
        <div className="display-profiles__user-job">
          <div>
            <span>{status}</span> at <span>{company}</span>
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
          <Skills skills={skills} />
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
