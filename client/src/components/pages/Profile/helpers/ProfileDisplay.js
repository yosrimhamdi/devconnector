import React from 'react';

import Socials from './Socials';
import Skills from './Skills';

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
  } = profile;

  const { name, photo } = user;

  if (website) {
    social.website = website;
  }

  return (
    <div>
      <section style={{ background: '#17a2b8' }}>
        <img src={`/images/${photo}`} alt={`${name} avatar`} />
        <div>{user.name}</div>
        <div>
          <span>{status}</span> at
          <span>{company}</span>
        </div>
        <div>{location}</div>
        <Socials socials={social} />
      </section>
      <section>
        <div>{`${name}'s Bio`}</div>
        <div>{bio}</div>
      </section>
      <section>
        <div>skill set</div>
        <Skills skills={skills} />
      </section>
    </div>
  );
};

export default ProfileDisplay;
