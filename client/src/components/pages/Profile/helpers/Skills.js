import React from 'react';

import tick from '../icons/tick.svg';

const Skills = ({ skills }) => {
  const renderedSkills = skills.map((skill, i) => (
    <div key={i}>
      <img src={tick} alt="tick" className="profile__icon" />
      <span>{skill}</span>
    </div>
  ));

  return <div>{renderedSkills}</div>;
};

export default Skills;
