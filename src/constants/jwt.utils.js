import jsonwebtoken from 'jsonwebtoken';

export function decodeJwt(jwt) {
  return jsonwebtoken.decode(jwt);
}

export function isTokenExpired() {
  const token = localStorage.getItem('jwtToken');
  try {
    const date = new Date(0);
    const decoded = decodeJwt(token);
    date.setUTCSeconds(decoded.exp);
    return date.valueOf() > new Date().valueOf();
  } catch (err) {
    return false;
  }
}
