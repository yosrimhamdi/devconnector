import React from 'react';
import { connect } from 'react-redux';

import { removeEducation } from '../../../../../redux/actions';
import getFormattedDate from '../../../../../utils/getFomatedDate';

class EducationItem extends React.Component {
  removeEducation = () => {
    this.props.removeEducation(this.props.education._id);
  };

  render() {
    const { school, degree, from, to } = this.props.education;

    return (
      <tr className="table">
        <td>{school}</td>
        <td>{degree}</td>
        <td>{getFormattedDate(from, to)}</td>
        <td className="table__logo-container">
          <i
            onClick={this.removeEducation}
            className="fas fa-trash-alt table__remove-logo"
            role="button"
          />
        </td>
      </tr>
    );
  }
}

export default connect(null, { removeEducation })(EducationItem);