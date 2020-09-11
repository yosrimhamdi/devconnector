import React from 'react';

import tick from './tick.svg';

const SkillItem = ({ skill }) => (
  <li className="skills__skill">
    <img src={tick} className="skills__tick" alt="tick logo" />
    <span>{skill}</span>
  </li>
);

export default SkillItem;
