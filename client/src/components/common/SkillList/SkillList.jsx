import React from 'react';

import './SkillList.scss';
import SkillItem from './SkillItem';

const Skills = ({ skills }) => {
  const renderedSkills = skills.map(skill => (
    <SkillItem skill={skill} key={skill} />
  ));

  return <ul className="skill-list collection">{renderedSkills}</ul>;
};

export default Skills;
