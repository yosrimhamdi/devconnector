import moment from 'moment';

const _format = date => moment(date).format('YYYY-MM-DD');

export default (from, to) => {
  if (to) {
    return `${_format(from)} / ${_format(to)}`;
  }

  return `${_format(from)} / now`;
};
