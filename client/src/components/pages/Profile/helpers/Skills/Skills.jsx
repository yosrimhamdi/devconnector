import React from 'react';

import './Skills.scss';
import SkillItem from './SkillItem';

const Skills = ({ skills }) => {
  const renderedSkills = skills.map(skill => (
    <SkillItem skill={skill} key={skill} />
  ));

  return <ul className="skills collection">{renderedSkills}</ul>;
};

export default Skills;
