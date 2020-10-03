import React, { useState } from 'react';
import { connect } from 'react-redux';

import { deleteEducation } from '../../../../../redux/actions';
import getFormattedDate from '../../../../../utils/getFormattedDate';

const EducationItem = ({
  education: { school, degree, from, to, _id },
  deleteEducation,
}) => {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <tr onClick={() => deleteEducation(_id)}>
      <td>{school}</td>
      <td>{degree}</td>
      <td>{getFormattedDate(from, to)}</td>
    </tr>
  );
};

export default connect(null, { deleteEducation })(EducationItem);
