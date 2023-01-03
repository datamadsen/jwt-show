export const isJwt = (checkThis) => {
  return JwtDecoder.decode(checkThis) !== "invalid jwt";
}
