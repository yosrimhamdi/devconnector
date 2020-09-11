import React from 'react';
import { connect } from 'react-redux';

import { deleteEducation } from '../../../../../redux/actions';
import getFormattedDate from '../../../../../utils/getFomatedDate';
import remove from '../remove.svg';

const EducationItem = ({
  education: { school, degree, from, to, _id },
  deleteEducation,
}) => (
  <tr>
    <td>{school}</td>
    <td>{degree}</td>
    <td>{getFormattedDate(from, to)}</td>
    <td className="table__logo-cell">
      <button onClick={() => deleteEducation(_id)} type="button">
        <img
          className="fas fa-trash-alt table__remove-logo"
          src={remove}
          alt="remove logo"
        />
      </button>
    </td>
  </tr>
);

export default connect(null, { deleteEducation })(EducationItem);
