import React, { useState } from 'react';
import { Field } from 'redux-form';
import AnimateHeight from 'react-animate-height';

import './SocialForm.scss';
import IconedInput from './IconedInput';

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
          <span>social network links</span>
        </button>
        <span className="socials-form__option-message">Optional</span>
      </div>
      <AnimateHeight height={height} duration={500}>
        <div className="socials-form__form">
          <Field
            name="youtube"
            placeholder="youtube channel URL"
            component={IconedInput}
          />
          <Field
            name="facebook"
            placeholder="facebook page URL"
            component={IconedInput}
          />
          <Field
            name="linkedin"
            placeholder="linkedin profile URL"
            component={IconedInput}
          />
          <Field
            name="twitter"
            placeholder="twitter profile URL"
            component={IconedInput}
          />
          <Field
            name="instagram"
            placeholder="instagram page URL"
            component={IconedInput}
          />
        </div>
      </AnimateHeight>
    </div>
  );
};

export default SocialsForm;
