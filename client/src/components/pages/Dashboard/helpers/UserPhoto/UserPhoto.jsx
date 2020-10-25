import React, { useState } from 'react';
import { connect } from 'react-redux';

import './UserPhoto.scss';
import greyCamera from '../../icons/camera.svg';
import blueCamera from '../../icons/camera-blue.svg';
import { updatePhoto } from '../../../../../redux/actions';
import Spinner from '../../../../common/Spinner';

const UserPhoto = ({ user, updatePhoto }) => {
  const [camera, setCamera] = useState(greyCamera);

  const [loading, setLoading] = useState(false);

  const handleInputChange = e => {
    const form = new FormData();

    form.append('photo', e.target.files[0]);

    setLoading(true);

    updatePhoto(form, setLoading);
  };

  const changeCameraToBlue = () => {
    if (window.innerWidth >= 1024) {
      setCamera(blueCamera);
    }
  };

  return (
    <div className="user-photo">
      <div className="user-photo__photo-container">
        <img
          src={user.photo.path}
          alt={user.name}
          className="user-photo__user-photo"
        />
        <label
          htmlFor="update-photo-input"
          className="user-photo__update-photo-label"
          onMouseEnter={changeCameraToBlue}
          onMouseLeave={() => setCamera(greyCamera)}
        >
          <input
            type="file"
            id="update-photo-input"
            className="user-photo__update-photo-input"
            onChange={handleInputChange}
            accept="image/*"
          />
          <span>
            <img
              src={camera}
              alt="education"
              className="user-photo__camera-icon"
            />
          </span>
        </label>
        <Spinner visible={loading} small onContent />
      </div>
    </div>
  );
};

export default connect(null, { updatePhoto })(UserPhoto);
