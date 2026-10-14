import { jwtVerify, SignJWT } from "jose";

function getSecret() {
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
        throw new Error("JWT_SECRET is not configured");
    }

    return new TextEncoder().encode(jwtSecret);
}

export async function CreateToken(email, id) {
    const secret = getSecret();

    const payload = {
        email,
        id,
    };

    const token = await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setIssuer(process.env.JWT_ISSUER || "my-app")
        .setExpirationTime(process.env.JWT_EXPIRATION_TIME || "1d")
        .sign(secret);

    return token;
}

export async function VerifyToken(token) {
    const secret = getSecret();

    const { payload } = await jwtVerify(token, secret, {
        issuer: process.env.JWT_ISSUER || "my-app",
        algorithms: ["HS256"],
    });

    return payload;
}