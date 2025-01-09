import { getUserByUsername } from "~/server/db/user";
import bcrypt from "bcrypt";
import { generateTokens } from "~/server/utils/jwt";
export default defineEventHandler(async(event) => {
    const body = await useBody(event)

    const {username, password} = body;
    if(!username || !password){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Invalid params"
        }))
    }
    // đã đăng ký hay chua
    const user = await getUserByUsername(username)
    if(!user)
    {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Username or password is invalid"
        }))
    }
    // so sanh mat khau
    const doesThePasswordMatch = await bcrypt.compare(password, user.password)

    //tao token
    // truy cap token
    // lam moi token
    const { accessToken, RefreshToken } = generateTokens(user);




    return{
        access_token: accessToken,
        RefreshToken: RefreshToken
    }
})