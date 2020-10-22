import React, { useState } from 'react';
import { connect } from 'react-redux';

import './EducationItem.scss';
import { deleteEducation } from '../../../../redux/actions';
import getFormattedDate from '../../../../utils/getFormattedDate';
import ConfirmModal from '../../modal/ConfirmModal';
import ModalContext from '../../../../contexts/ModalContext';

const EducationItem = ({
  education: { school, degree, from, to, _id },
  deleteEducation,
}) => {
  const [isModalShown, setIsModalShown] = useState(false);

  const modal = {
    title: school,
    description: `are you sure you want to delete this education`,
    action: () => deleteEducation(_id),
  };

  return (
    <>
      <tr className="education-item" onClick={() => setIsModalShown(true)}>
        <td>{school}</td>
        <td>{degree}</td>
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

export default connect(null, { deleteEducation })(EducationItem);
