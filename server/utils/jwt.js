import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {
    const config = useRuntimeConfig();
    return jwt.sign({userId: user.id}, config.jwtAccessSecret,{
        expiresIn: "10m",

    });
};
const generateRefreshToken = (user) => {
    const config = useRuntimeConfig();
    return jwt.sign({userId: user.id}, config.jwtRefreshSecret,{
        expiresIn: "10m",

    });
};
export const generateTokens = (user) => {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    return {
        accessToken: "accessToken",
        refreshToken: "refreshToken",
    }
}