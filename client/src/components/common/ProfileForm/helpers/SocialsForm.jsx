import React, { useState } from 'react';
import { Field } from 'redux-form';
import AnimateHeight from 'react-animate-height';

import './SocialsForm.scss';
import SocialInput from '../../form/SocialInput';

const SocialsForm = () => {
  const [height, setHeight] = useState(0);

  const toggleHeight = () => setHeight(height === 0 ? 'auto' : 0);

  const message = height === 0 ? 'show' : 'hide';

  return (
    <div className="socials-form">
      <div className="socials-form__toggle-button-wrapper">
        <button
          className="socials-form__toggle-button"
          type="button"
          onClick={toggleHeight}
        >
          <span className="socials-form__toggle-message">{message}</span>
          <span>social links</span>
        </button>
        <span className="socials-form__option-message">Optional</span>
      </div>
      <AnimateHeight height={height} duration={500}>
        <div className="socials-form__form">
          <Field
            name="youtube"
            placeholder="youtube channel URL"
            component={SocialInput}
          />
          <Field
            name="facebook"
            placeholder="facebook page URL"
            component={SocialInput}
          />
          <Field
            name="linkedin"
            placeholder="linkedin profile URL"
            component={SocialInput}
          />
          <Field
            name="twitter"
            placeholder="twitter profile URL"
            component={SocialInput}
          />
          <Field
            name="instagram"
            placeholder="instagram page URL"
            component={SocialInput}
          />
        </div>
      </AnimateHeight>
    </div>
  );
};

export default SocialsForm;
