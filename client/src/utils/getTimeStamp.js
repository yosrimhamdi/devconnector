import moment from 'moment';

export default date => moment(date).startOf('day').fromNow();
