export const isJwt = (checkThis) => {
  return !!checkThis && JwtDecoder.decode(checkThis) !== "invalid jwt";
}
