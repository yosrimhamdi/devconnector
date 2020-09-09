import React from 'react';

import './Skills.scss';

import tick from './tick.svg';

const Skills = ({ skills }) => {
  const renderedSkills = skills.map((skill, i) => (
    <div key={i} className="skills__item">
      <img src={tick} alt="tick" className="skills__icon" />
      <span>{skill}</span>
    </div>
  ));

  return <div className="skills">{renderedSkills}</div>;
};

export default Skills;
