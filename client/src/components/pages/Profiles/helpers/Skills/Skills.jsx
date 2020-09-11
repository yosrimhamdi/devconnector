import React from 'react';

import './Skills.scss';

import SkillItem from './SkillItem';

const Skills = ({ skills }) => {
  const renderedSkills = skills.map((skill, i) => (
    <SkillItem skill={skill} key={`${skill}-${i + 1}`} />
  ));

  return (
    <div className="skills">
      <h1 className="skills__title">Skill Set</h1>
      <ul className="skills__container collection">{renderedSkills}</ul>
    </div>
  );
};

export default Skills;
