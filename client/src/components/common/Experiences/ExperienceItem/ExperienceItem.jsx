import React, { useState } from 'react';
import { connect } from 'react-redux';

import './ExperienceItem.scss';
import { deleteExperience } from '../../../../redux/actions';
import getFormattedDate from '../../../../utils/getFormattedDate';
import ConfirmModal from '../../modal/ConfirmModal';
import ModalContext from '../../../../contexts/ModalContext';

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
      <tr className="experience-item" onClick={() => setIsModalShown(true)}>
        <td>{company}</td>
        <td>{title}</td>
        <td>{getFormattedDate(from, to)}</td>
      </tr>
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
