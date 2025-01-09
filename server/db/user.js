import { prisma } from ".";
import bcrypt from "bcrypt";
const createUser = (userData) => {
    const finalUser = {
        ...userData,
        password: bcrypt.hashSync(userData.password, 10)
    }
    return prisma.user.create({
        data: finalUser
    })
}