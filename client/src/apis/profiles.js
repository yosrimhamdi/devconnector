import axios from 'axios';
import PROXY from './proxy';

export default axios.create({
  baseURL: `${PROXY}/api/profiles`,
});
