import React from 'react';

import './SkillList.scss';
import tick from './tick.svg';

const SkillList = ({ skills }) => {
  const renderSkills = skills.map((skill, i) => (
    <div className="skill-list__skill" key={`00${i}`}>
      <img src={tick} className="skill-list__tick" alt="tick logo" /> {skill}
    </div>
  ));

  return (
    <div className="skill-list">
      <h1 className="skill-list__title">Skill Set</h1>
      <div className="skill-list__container">{renderSkills}</div>
    </div>
  );
};

export default SkillList;
