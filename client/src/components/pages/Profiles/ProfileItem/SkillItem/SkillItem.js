import React from 'react';

import './SkillItem.scss';

const SkillItem = ({ skill }) => {
  return (
    <div className="skill-item">
      <i className="fas fa-check skill-item__icon"></i> {skill}
    </div>
  );
};

export default SkillItem;
