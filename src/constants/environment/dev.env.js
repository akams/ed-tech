import COMMON_ENV from './common.env';

const environment = {
  ...COMMON_ENV,
  apiUrl: 'http://localhost:3001/api/v1',
};

export default environment;
