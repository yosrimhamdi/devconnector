import React from 'react';
import { connect } from 'react-redux';

import { removeExperience } from '../../../../../redux/actions';
import getFormattedDate from '../../../../../utils/getFomatedDate';

class ExpItem extends React.Component {
  removeExperience = () => {
    this.props.removeExperience(this.props.experience._id);
  };

  render() {
    const { company, title, from, to } = this.props.experience;

    return (
      <tr>
        <td>{company}</td>
        <td>{title}</td>
        <td>{getFormattedDate(from, to)}</td>
        <td className="table__logo-container">
          <i
            onClick={this.removeExperience}
            className="fas fa-trash-alt table__remove-logo"
            role="button"
          />
        </td>
      </tr>
    );
  }
}

export default connect(null, { removeExperience })(ExpItem);
