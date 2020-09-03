import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import './EducationItem.scss';
import { removeEducation } from '../../../../../redux/actions';

class EducationItem extends React.Component {
  format(date) {
    return moment(date).format('YYYY-MM-DD');
  }

  getFormattedDate(from, to) {
    if (to) {
      return `${this.format(from)} / ${this.format(to)}`;
    }

    return `${this.format(from)} / now`;
  }

  removeEducation = () => {
    this.props.removeEducation(this.props.education._id);
  };

  render() {
    const { school, degree, from, to } = this.props.education;

    return (
      <tr className="education-item">
        <td>{school}</td>
        <td>{degree}</td>
        <td>{this.getFormattedDate(from, to)}</td>
        <td className="education-item__logo-container">
          <i
            onClick={this.removeEducation}
            className="fas fa-trash-alt education-item__remove-logo"
            role="button"
          />
        </td>
      </tr>
    );
  }
}

export default connect(null, { removeEducation })(EducationItem);
