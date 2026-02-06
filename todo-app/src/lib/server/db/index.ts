import "process"
import { drizzle } from "drizzle-orm/node-postgres"
import { eq } from "drizzle-orm"
import { Pool } from 'pg'
import { Users } from "./schema"

// export const db = drizzle({
//     connection: {
//         connectionString: process.env.DATABASE_URL
//     }
// })

const pool = new Pool({
    connectionString: "postgres://user:mysecretpassword@localhost:5432/tododb",
    ssl: false,
})

export const db = drizzle(pool)

//USERS
export const createUser = async (username: string, password: string) => {
    //inserts a user and returns the new user object
    try{
        return await db.insert(Users).values({username: username, password: password, isAdmin: false}).returning()
    } catch (error) {
        console.log(error)
    }
}

export const getUserById = async (userId) => {
    try{
        return await db.select().from(Users).where(eq(Users.id, userId))
    } catch (error){
        console.log(error)
    }
}

export const getAllUsers = async () => {
    try {
        return await db.select().from(Users)
    } catch (error) {
        console.log(error)
    }
}