import { createUser, db, getAllUsers, getUserById, getUserByUsername } from '$lib/server/db';
import { Users } from '$lib/server/db/schema'
import { redirect, fail } from '@sveltejs/kit'


// load function to decide if signin | signup | or redirect to error page
export async function load( { params, cookies }) {
    //if route not /signin or /signup then redirect to home page
    if(params.action != "signin" && params.action != "signup"){
        redirect(308, '/')
    }

    //if they are currently logged in
    if(cookies.get('loggedInUser') != undefined && cookies.get('loggedInUser') !== '0'){
        redirect(308, '/')
    }

    return {
        pageFunction: params.action,
        meta: {
            title: params.action == 'signin' ? 'Sign In' : 'Sign Up'
        }
    }
}


export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const username = data.get('username')
        const password = data.get('password')

        if(data.get('pageFunction') == 'signup'){
            if( username !== null && password !== null) {
                const user = await createUser( username, password)
                console.log(user)

                if(user == "User with that Username already exists"){
                    return fail(409, {error: "Username already exists" })
                } else{
                    const id = user?.id?.toString()
        
                    let idForCookie = '0'
                    if (id) idForCookie = id
                    cookies.set('loggedInUser', idForCookie , { path: '/'})
                }

            }
        } else {
            const user = await getUserByUsername(username)
            console.log(user)

            if(user?.password == password){
                    const id = user?.id?.toString()
        
                    let idForCookie = '0'
                    if (id) idForCookie = id
                    cookies.set('loggedInUser', idForCookie , { path: '/'})
            } else {
                return fail(401, {error: "Password is Incorrect"})
            }
        }
        
    }
}


