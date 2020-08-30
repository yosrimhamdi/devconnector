import React from 'react';

import SkillItem from '../SkillItem';
import './SkillList.scss';

const SkillList = ({ skills }) => {
  const renderSkills = skills.map((skill, i) => <SkillItem skill={skill} key={i} />);

  return (
    <div className="skill-list">
      <h1 className="skill-list__title">Skill Set</h1>
      <div className="skill-list__container">{renderSkills}</div>
    </div>
  );
};

export default SkillList;
