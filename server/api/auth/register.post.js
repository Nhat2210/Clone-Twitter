import { sendError } from "#imports";
import { createUser } from "../../db/user.js";
import { useTransformer } from "~/server/transformer/user.js";
export default defineEventsHandler(async (event) => {
    const body = useBody(event);
    const { username,  email, password, repeatPassword, name } =  body;
    if(!username || !email || !password || !repeatPassword || !name){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Invalid params"
        }))
    }

    if(password !==repeatPassword){
        return sendError(event,createError({
            statusCode: 400,
            statusMessage: "Passwords do not match"
        }))
    }

    const userData = {
        username,
        email,
        password,
        name,
        profileImage: "abc"
    }

    const user = await createUser(userData)

    return {
        body: useTransformer(user)
    }
})