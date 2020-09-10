import React from 'react';
import { connect } from 'react-redux';

import { deleteEducation } from '../../../../../redux/actions';
import getFormattedDate from '../../../../../utils/getFomatedDate';
import remove from '../remove.svg';

class EducationItem extends React.Component {
  removeEducation = () => {
    this.props.deleteEducation(this.props.education._id);
  };

  render() {
    const { school, degree, from, to } = this.props.education;

    return (
      <tr>
        <td>{school}</td>
        <td>{degree}</td>
        <td>{getFormattedDate(from, to)}</td>
        <td className="table__logo-container">
          <span onClick={this.removeEducation} role="button">
            <img
              className="fas fa-trash-alt table__remove-logo"
              src={remove}
              alt="remove logo"
            />
          </span>
        </td>
      </tr>
    );
  }
}

export default connect(null, { deleteEducation })(EducationItem);
