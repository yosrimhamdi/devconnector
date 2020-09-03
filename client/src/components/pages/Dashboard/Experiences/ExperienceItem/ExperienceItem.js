import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import './ExperienceItem.scss';
import { removeExperience } from '../../../../../redux/actions';

class ExpItem extends React.Component {
  format(date) {
    return moment(date).format('YYYY-MM-DD');
  }

  getFormattedDate(from, to) {
    if (to) {
      return `${this.format(from)} / ${this.format(to)}`;
    }

    return `${this.format(from)} / now`;
  }

  removeExp = () => {
    this.props.removeExperience(this.props.experience._id);
  };

  render() {
    const { company, title, from, to } = this.props.experience;

    return (
      <tr className="exp-item">
        <td>{company}</td>
        <td>{title}</td>
        <td>{this.getFormattedDate(from, to)}</td>
        <td className="exp-item__logo-container">
          <i
            onClick={this.removeExp}
            className="fas fa-trash-alt exp-item__remove-logo"
            role="button"
          />
        </td>
      </tr>
    );
  }
}

export default connect(null, { removeExperience })(ExpItem);
