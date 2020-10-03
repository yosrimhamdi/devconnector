import React from 'react';
import { connect } from 'react-redux';

import { deleteExperience } from '../../../../../redux/actions';
import getFormattedDate from '../../../../../utils/getFormattedDate';

const ExpItem = ({
  experience: { company, title, from, to, _id },
  deleteExperience,
}) => (
  <tr>
    <td>{company}</td>
    <td>{title}</td>
    <td>{getFormattedDate(from, to)}</td>
  </tr>
);

export default connect(null, { deleteExperience })(ExpItem);
