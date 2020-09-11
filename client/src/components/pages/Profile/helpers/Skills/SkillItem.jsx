import React from 'react';

import tick from './tick.svg';

const SkillItem = ({ skill }) => (
  <li className="skills__item">
    <img src={tick} alt="tick" className="skills__icon" />
    <span>{skill}</span>
  </li>
);

export default SkillItem;
