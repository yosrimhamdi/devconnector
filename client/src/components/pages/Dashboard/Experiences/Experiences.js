import React from 'react';

import ExpItem from './ExpItem';
import './Experiences.scss';

const Experiences = ({ experiences }) => {
  const renderedExps = experiences.map(exp => <ExpItem key={exp._id} exp={exp} />);

  return (
    <table className="table">
      <tbody className="table__body">
        <tr>
          <th className="table__company">company</th>
          <th>title</th>
          <th>year</th>
        </tr>
        {renderedExps}
      </tbody>
    </table>
  );
};

export default Experiences;
