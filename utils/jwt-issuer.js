import * as jose from 'jose'

export const JwtIssuer = {
  issueDemoToken: async function () {
    const secret = new TextEncoder().encode('the-secretest-key-of-all-time');
    const alg = 'HS256';
    const now = Math.round(new Date().getTime() / 1000);

    const claimsInClaims = {
      "iss": "jwt.show",
      "aud": "jwt.show",
      "iat": now - 2 * 60 * 60,
      "exp": now,
      "what": "just a token in a token"
    }

    const jwtInJwt = await new jose.SignJWT(claimsInClaims)
      .setProtectedHeader({alg})
      .sign(secret);

    const claims = {
      "iss": "jwt.show",
      "aud": "jwt.show",
      "iat": now,
      "exp": now + 60,
      "sub": "a-user-id",
      "admin": false,
      "last_login": now - 42 * 60,
      "some_number": 42,
      "some_array": [
        "there",
        "is no",
        "spoon"
      ],
      "an_object": {
        "type": "token-in-token",
        "token": jwtInJwt
      }
    };

    return await new jose.SignJWT(claims)
      .setProtectedHeader({alg})
      .sign(secret)
  }
}
