import React from 'react';
import { connect } from 'react-redux';

import { deleteExperience } from '../../../../../redux/actions';
import getFormattedDate from '../../../../../utils/getFormattedDate';
import remove from '../../icons/remove.svg';

const ExpItem = ({
  experience: { company, title, from, to, _id },
  deleteExperience,
}) => (
  <tr>
    <td>{company}</td>
    <td>{title}</td>
    <td>{getFormattedDate(from, to)}</td>
    <td className="table__logo-cell">
      <button onClick={() => deleteExperience(_id)} type="button">
        <img className="table__remove-logo" src={remove} alt="remove log" />
      </button>
    </td>
  </tr>
);

export default connect(null, { deleteExperience })(ExpItem);
