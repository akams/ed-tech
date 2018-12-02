import DEV_CONSTANTS from './dev.env';
import PROD_CONSTANTS from './prod.env';
import TEST_CONSTANTS from './test.env';

/**
 * GET ENVIRONMENT VARIABLE FILES
 * exemple:  $exp publish --release-channel prod-v1
 * This will publish a version to the channel prod-v1 using prod conf
 */
const ENV = {
  dev: DEV_CONSTANTS,
  test: TEST_CONSTANTS,
  prod: PROD_CONSTANTS,
};

function getEnvVars(env = '') {
  // since releaseChannels are undefined in dev, return your default.
  if (!env || env === '') return ENV.dev;
  // return test environment variables
  if (env.indexOf('test') !== -1) return ENV.test;
  // this would pick up prod-v1, prod-v2, prod-v3
  if (env.indexOf('prod') !== -1) return ENV.prod;
  return ENV.dev;
}

export default getEnvVars(process.env.NODE_ENV);
