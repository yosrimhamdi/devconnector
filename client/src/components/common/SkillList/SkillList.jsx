import React from 'react';
import classnames from 'classnames';

import './SkillList.scss';
import SkillItem from './SkillItem';

const Skills = ({ skills, horizontal }) => {
  const renderedSkills = skills.map(skill => (
    <SkillItem skill={skill} key={skill} />
  ));

  const className = classnames('skill-list collection', {
    'skill-list--horizontal': horizontal,
  });

  return <ul className={className}>{renderedSkills}</ul>;
};

export default Skills;
