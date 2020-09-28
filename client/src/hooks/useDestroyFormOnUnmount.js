import { useEffect } from 'react';
import { destroy } from 'redux-form';
import store from '../redux/store';

export default form => {
  useEffect(() => {
    return () => store.dispatch(destroy(form));
  }, [form]);
};
