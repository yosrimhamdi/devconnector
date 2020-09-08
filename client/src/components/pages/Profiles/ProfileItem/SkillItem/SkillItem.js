import React from 'react';

import tick from './tick.svg';
import './SkillItem.scss';

const SkillItem = ({ skill }) => (
  <div className="skill-item">
    <img src={tick} className="skill-item__tick" alt="tick logo" /> {skill}
  </div>
);
export default SkillItem;
