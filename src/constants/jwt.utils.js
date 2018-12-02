import jsonwebtoken from 'jsonwebtoken';

export function decodeJwt(jwt) {
  return jsonwebtoken.decode(jwt);
}
