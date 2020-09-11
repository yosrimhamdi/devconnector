import React from 'react';

import tick from './tick.svg';

const SkillItem = ({ skill }) => (
  <li className="skill-list__item">
    <img src={tick} alt="tick" className="skill-list__icon" />
    <span>{skill}</span>
  </li>
);

export default SkillItem;
