import React from 'react';
import { connect } from 'react-redux';

import { removeExperience } from '../../../../redux/actions';
import getFormattedDate from '../../../../utils/getFomatedDate';
import remove from '../remove.svg';

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
          <span onClick={this.removeExperience} role="button">
            <img className="table__remove-logo" src={remove} alt="remove log" />
          </span>
        </td>
      </tr>
    );
  }
}

export default connect(null, { removeExperience })(ExpItem);
