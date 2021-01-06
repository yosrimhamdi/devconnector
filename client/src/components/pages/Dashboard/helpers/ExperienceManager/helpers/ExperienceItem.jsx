import React, { useState } from 'react';
import { connect } from 'react-redux';

import './ExperienceItem.scss';
import deleteExperience from '../../../../../../redux/actions/profiles/deleteExperience';
import getFormattedDate from '../../../../../../utils/getFormattedDate';
import ConfirmModal from '../../../../../common/modal/ConfirmModal';
import ModalContext from '../../../../../../contexts/ModalContext';
import deleteIcon from '../../../../../../assets/icons/close.svg';

const ExpItem = ({
  experience: { company, title, from, to, _id },
  deleteExperience,
}) => {
  const [isModalShown, setIsModalShown] = useState(false);

  const modal = {
    title: `${title} at ${company}`,
    description: `are you sure you want to delete this job title`,
    action: () => deleteExperience(_id),
  };

  return (
    <>
      <div className="experience-item">
        <div data-title="company">{company}</div>
        <div data-title="title">{title}</div>
        <div data-title="year">{getFormattedDate(from, to)}</div>
        <img
          className="experience-item__delete-icon"
          src={deleteIcon}
          alt="delete"
          onClick={() => setIsModalShown(true)}
        />
      </div>
      <ModalContext.Provider value={modal}>
        <ConfirmModal
          isModalShown={isModalShown}
          setIsModalShown={setIsModalShown}
        />
      </ModalContext.Provider>
    </>
  );
};

export default connect(null, { deleteExperience })(ExpItem);
